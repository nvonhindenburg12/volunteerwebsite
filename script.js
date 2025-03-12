/****************************************************
 * Global Variables
 ****************************************************/
let searchTerm = '';
let selectedTags = [];
let isStrictFiltering = false;  // for AND/OR filtering toggle

/****************************************************
 * Functions
 ****************************************************/
function renderTags() {
  const tagsContainer = document.getElementById('tags-container');
  const allTags = [...new Set(opportunities.flatMap(item => item.tags))];

  const orderedTags = [
    'DC',
    'MD',
    'VA',
    'GDS Opportunities',
    'Remote Opportunities',
    'Travel Experiences'
  ];

  const remainingTags = allTags.filter(tag => !orderedTags.includes(tag));
  const sortedTags = [...orderedTags, ...remainingTags];

  tagsContainer.innerHTML = '';

  sortedTags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.textContent = tag;

    const className = tag
      .replace(/\s+/g, '')
      .replace(/&/g, '')
      .replace(/\+/g, '');
    tagElement.classList.add(`tag-${className}`);

    tagElement.addEventListener('click', () => {
      tagElement.classList.toggle('selected');
      updateSelectedTags();
    });

    tagsContainer.appendChild(tagElement);
  });

  // Add reset filters button at the end
  const resetButton = document.createElement('span');
  resetButton.classList.add('tag', 'reset-button');
  resetButton.textContent = 'Reset Filters';
  resetButton.addEventListener('click', resetFilters);
  tagsContainer.appendChild(resetButton);
}

function updateSelectedTags() {
  selectedTags = Array.from(document.querySelectorAll('.tag.selected:not(.reset-button)'))
    .map(tag => tag.textContent);
  
  document.getElementById('selected-count').textContent = `(${selectedTags.length})`;
  applyFilters();
}

function resetFilters() {
  // Reset search bar
  document.getElementById('search-bar').value = '';
  searchTerm = '';

  // Reset all selected tags
  const selectedTagElements = document.querySelectorAll('.tag.selected:not(.reset-button)');
  selectedTagElements.forEach(tag => tag.classList.remove('selected'));
  
  //Reset the toggle switch
  const filterToggle = document.getElementById('filterToggle');
  filterToggle.checked = false;
  isStrictFiltering = false;
  
  // Reset tags count and array
  selectedTags = [];
  document.getElementById('selected-count').textContent = '(0)';
  
  // Apply the filters
  applyFilters();
}

function applyFilters() {
  console.log('Filtering with strict mode:', isStrictFiltering); // Debug log
  
  let filtered = opportunities.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );

  if (selectedTags.length > 0) {
    filtered = filtered.filter(item => {
      if (isStrictFiltering) {
        // AND filtering - all selected tags must match
        return selectedTags.every(tag => item.tags.includes(tag));
      } else {
        // OR filtering - any selected tag can match
        return item.tags.some(tag => selectedTags.includes(tag));
      }
    });
  }

  renderOpportunities(filtered);
}

function renderOpportunities(filteredOpportunities) {
  const container = document.getElementById('opportunities-container');
  container.innerHTML = '';

  filteredOpportunities.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('opportunity-card');

    const tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags');

    item.tags.forEach(t => {
      const tagSpan = document.createElement('span');
      tagSpan.classList.add('tag');
      const className = t
        .replace(/\s+/g, '')
        .replace(/&/g, '')
        .replace(/\+/g, '');
      tagSpan.classList.add(`tag-${className}`);
      tagSpan.textContent = t;
      tagsDiv.appendChild(tagSpan);
    });

    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Volunteer Now</a>
    `;

    card.appendChild(tagsDiv);
    container.appendChild(card);
  });
}

function getSearchSuggestions(searchTerm) {
  const filteredOpportunities = opportunities.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTags = [...new Set(opportunities.flatMap(item => item.tags))].filter(tag =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return [...filteredOpportunities.map(item => item.name), ...filteredTags];
}

/****************************************************
 * Event Listeners
 ****************************************************/
document.getElementById('search-bar').addEventListener('input', function() {
  searchTerm = this.value.toLowerCase();
  applyFilters();

  const suggestions = getSearchSuggestions(searchTerm);
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = '';

  suggestions.forEach(suggestion => {
    const suggestionElement = document.createElement('div');
    suggestionElement.textContent = suggestion;
    suggestionElement.addEventListener('click', () => {
      this.value = suggestion;
      suggestionsContainer.innerHTML = '';
      applyFilters();
    });
    suggestionsContainer.appendChild(suggestionElement);
  });
});

document.getElementById('filterToggle').addEventListener('change', function() {
  isStrictFiltering = this.checked;
  console.log('Toggle changed, strict filtering is now:', isStrictFiltering); // Debug log
  applyFilters();
});

/****************************************************
 * Initialize
 ****************************************************/
renderTags();
renderOpportunities(opportunities);

document.querySelectorAll('.info-icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    const info = icon.getAttribute('data-info');
    console.log(`Hovered over info icon: ${info}`);
  });
});

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
  const scrollTopBtn = document.getElementById('scroll-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll to top smoothly when the button is clicked
document.getElementById('scroll-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Function to show search suggestions
function showSuggestions(searchTerm) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = '';

  if (!searchTerm) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  const searchLower = searchTerm.toLowerCase();
  
  // Get all unique tags
  const allTags = [...new Set(opportunities.flatMap(item => item.tags))];
  
  // Filter tags
  const matchingTags = allTags.filter(tag => 
    tag.toLowerCase().includes(searchLower)
  );

  // Filter opportunities
  const matchingOpportunities = opportunities.filter(item =>
    item.name.toLowerCase().includes(searchLower)
  );

  if (matchingTags.length === 0 && matchingOpportunities.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  // Add matching tags
  if (matchingTags.length > 0) {
    const tagHeader = document.createElement('div');
    tagHeader.className = 'suggestion-item';
    tagHeader.style.fontWeight = 'bold';
    tagHeader.style.backgroundColor = '#f5f5f5';
    tagHeader.textContent = 'Tags:';
    suggestionsContainer.appendChild(tagHeader);

    matchingTags.forEach(tag => {
      const tagElement = document.createElement('div');
      tagElement.className = 'suggestion-item tag-suggestion';
      tagElement.textContent = tag;
      tagElement.addEventListener('click', () => {
        // Select the tag in the filter section
        const tagElements = document.querySelectorAll('.tag');
        tagElements.forEach(tagEl => {
          if (tagEl.textContent === tag && !tagEl.classList.contains('selected')) {
            tagEl.click();
          }
        });
        document.getElementById('search-bar').value = '';
        suggestionsContainer.style.display = 'none';
      });
      suggestionsContainer.appendChild(tagElement);
    });
  }

  // Add matching opportunities
  if (matchingOpportunities.length > 0) {
    const oppHeader = document.createElement('div');
    oppHeader.className = 'suggestion-item';
    oppHeader.style.fontWeight = 'bold';
    oppHeader.style.backgroundColor = '#f5f5f5';
    oppHeader.textContent = 'Opportunities:';
    suggestionsContainer.appendChild(oppHeader);

    matchingOpportunities.forEach(opp => {
      const oppElement = document.createElement('div');
      oppElement.className = 'suggestion-item opportunity-suggestion';
      oppElement.textContent = opp.name;
      oppElement.addEventListener('click', () => {
        document.getElementById('search-bar').value = opp.name;
        searchTerm = opp.name.toLowerCase();
        applyFilters();
        suggestionsContainer.style.display = 'none';
      });
      suggestionsContainer.appendChild(oppElement);
    });
  }

  suggestionsContainer.style.display = 'block';
}

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  const searchBar = document.getElementById('search-bar');
  
  if (!searchBar.contains(e.target) && !suggestionsContainer.contains(e.target)) {
    suggestionsContainer.style.display = 'none';
  }
});

// Update the search bar event listener
document.getElementById('search-bar').removeEventListener('input', null); // Remove old listener if exists
document.getElementById('search-bar').addEventListener('input', function() {
  searchTerm = this.value.toLowerCase();
  showSuggestions(this.value);
  applyFilters();
});

// Show suggestions function
function showSuggestions(searchTerm) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = '';

  if (!searchTerm) {
      suggestionsContainer.style.display = 'none';
      return;
  }

  const searchLower = searchTerm.toLowerCase();
  
  // Get all unique tags
  const allTags = [...new Set(opportunities.flatMap(item => item.tags))];
  
  // Filter tags and opportunities
  const matchingTags = allTags.filter(tag => 
      tag.toLowerCase().includes(searchLower)
  );
  const matchingOpportunities = opportunities.filter(item =>
      item.name.toLowerCase().includes(searchLower)
  );

  if (matchingTags.length === 0 && matchingOpportunities.length === 0) {
      suggestionsContainer.style.display = 'none';
      return;
  }

  // Add matching tags
  if (matchingTags.length > 0) {
      const tagHeader = document.createElement('div');
      tagHeader.className = 'suggestion-item suggestion-header';
      tagHeader.textContent = 'Tags:';
      suggestionsContainer.appendChild(tagHeader);

      matchingTags.forEach(tag => {
          const tagElement = document.createElement('div');
          tagElement.className = 'suggestion-item tag-suggestion';
          tagElement.textContent = tag;
          tagElement.addEventListener('click', () => {
              const searchBar = document.getElementById('search-bar');
              searchBar.value = tag;
              searchBar.focus();
              showSuggestions(tag); // Keep suggestions visible
          });
          suggestionsContainer.appendChild(tagElement);
      });
  }

  // Add matching opportunities
  if (matchingOpportunities.length > 0) {
      const oppHeader = document.createElement('div');
      oppHeader.className = 'suggestion-item suggestion-header';
      oppHeader.textContent = 'Opportunities:';
      suggestionsContainer.appendChild(oppHeader);

      matchingOpportunities.forEach(opp => {
          const oppElement = document.createElement('div');
          oppElement.className = 'suggestion-item opportunity-suggestion';
          oppElement.textContent = opp.name;
          oppElement.addEventListener('click', () => {
              const searchBar = document.getElementById('search-bar');
              searchBar.value = opp.name;
              searchBar.focus();
              showSuggestions(opp.name); // Keep suggestions visible
          });
          suggestionsContainer.appendChild(oppElement);
      });
  }

  suggestionsContainer.style.display = 'block';
}

// Handle Enter key
document.getElementById('search-bar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      e.preventDefault(); 
      const searchValue = this.value;
      
      if (!searchValue) {
          document.getElementById('suggestions-container').style.display = 'none';
          this.focus();
          return;
      }

      const searchLower = searchValue.toLowerCase();
      
      // Reset previous search
      clearAllTags();
      
      // Find matches
      const allTags = [...new Set(opportunities.flatMap(item => item.tags))];
      const matchingTag = allTags.find(tag => 
          tag.toLowerCase().includes(searchLower)
      );
      
      const matchingOpp = opportunities.find(opp => 
          opp.name.toLowerCase().includes(searchLower)
      );

      if (matchingTag || matchingOpp) {
          // Set the search term and apply filters
          searchTerm = searchValue.toLowerCase();
          applyFilters();
      } else {
          showPopup();
      }

      // Hide suggestions only on Enter
      document.getElementById('suggestions-container').style.display = 'none';
      this.focus();
  }
});

// Update search bar input handler
document.getElementById('search-bar').addEventListener('input', function() {
  searchTerm = this.value.toLowerCase();
  showSuggestions(this.value);
});

// Close popup but keep focus
function closePopup() {
  const popup = document.getElementById('custom-popup');
  popup.style.display = 'none';
  document.getElementById('search-bar').focus();
}

// Clear all tags function
function clearAllTags() {
  document.querySelectorAll('.tag.selected').forEach(tag => {
      tag.classList.remove('selected');
  });
  selectedTags = [];
  document.getElementById('selected-count').textContent = '(0)';
}
// Handle Enter key
document.getElementById('search-bar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      e.preventDefault(); 
      const searchValue = this.value;
      
      if (!searchValue) {
          document.getElementById('suggestions-container').style.display = 'none';
          this.focus();
          return;
      }

      const searchLower = searchValue.toLowerCase();
      
      // Reset previous search
      clearAllTags();
      searchTerm = ''; // Clear the search term
      
      // Find matches
      const allTags = [...new Set(opportunities.flatMap(item => item.tags))];
      const matchingTag = allTags.find(tag => 
          tag.toLowerCase().includes(searchLower)
      );
      
      const matchingOpp = opportunities.find(opp => 
          opp.name.toLowerCase().includes(searchLower)
      );

      if (matchingTag) {
          // Handle tag match same way as filter section
          const tagElements = document.querySelectorAll('.tag');
          tagElements.forEach(tagEl => {
              if (tagEl.textContent === matchingTag) {
                  tagEl.classList.add('selected');
              }
          });
          selectedTags = [matchingTag];
          document.getElementById('selected-count').textContent = '(1)';
          this.value = ''; // Clear search bar for tag matches
      } else if (matchingOpp) {
          // Handle opportunity match
          searchTerm = matchingOpp.name.toLowerCase();
      } else {
          showPopup();
      }

      // Apply filters after setting up tags or search term
      applyFilters();

      // Hide suggestions only on Enter
      document.getElementById('suggestions-container').style.display = 'none';
      this.focus();
  }
});
// Function to show popup
function showPopup() {
    const popup = document.getElementById('custom-popup');
    popup.style.display = 'flex';
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('custom-popup');
    popup.style.display = 'none';
    document.getElementById('search-bar').focus();
}

// Handle Enter key
document.getElementById('search-bar').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        const searchValue = this.value;
        
        if (!searchValue) {
            document.getElementById('suggestions-container').style.display = 'none';
            this.focus();
            return;
        }

        const searchLower = searchValue.toLowerCase();
        
        // Find matches
        const allTags = [...new Set(opportunities.flatMap(item => item.tags))];
        const matchingTag = allTags.find(tag => 
            tag.toLowerCase().includes(searchLower)
        );
        
        const matchingOpp = opportunities.find(opp => 
            opp.name.toLowerCase().includes(searchLower)
        );

        if (matchingTag || matchingOpp) {
            // Handle valid matches
            if (matchingTag && !selectedTags.includes(matchingTag)) {
                const tagElements = document.querySelectorAll('.tag');
                tagElements.forEach(tagEl => {
                    if (tagEl.textContent === matchingTag) {
                        tagEl.classList.add('selected');
                    }
                });
                selectedTags.push(matchingTag);
                document.getElementById('selected-count').textContent = `(${selectedTags.length})`;
                this.value = '';
                searchTerm = '';
            } else if (matchingOpp) {
                searchTerm = matchingOpp.name.toLowerCase();
            }
            applyFilters();
        } else {
            showPopup(); // Show popup for invalid entries
        }

        document.getElementById('suggestions-container').style.display = 'none';
        this.focus();
    }
});

// Close popup when clicking outside
document.getElementById('custom-popup').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Show suggestions function
function showSuggestions(searchTerm) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = '';

  const searchLower = searchTerm.toLowerCase();
  
  // Get all unique tags
  const allTags = [...new Set(opportunities.flatMap(item => item.tags))];
  
  // Filter tags and opportunities
  const matchingTags = allTags.filter(tag => 
      tag.toLowerCase().includes(searchLower)
  );
  const matchingOpportunities = opportunities.filter(item =>
      item.name.toLowerCase().includes(searchLower)
  );

  // Add matching tags
  if (matchingTags.length > 0) {
      const tagHeader = document.createElement('div');
      tagHeader.className = 'suggestion-item suggestion-header';
      tagHeader.textContent = 'Tags:';
      suggestionsContainer.appendChild(tagHeader);

      matchingTags.forEach(tag => {
          const tagElement = document.createElement('div');
          tagElement.className = 'suggestion-item tag-suggestion';
          tagElement.textContent = tag;
          tagElement.addEventListener('click', () => {
              const searchBar = document.getElementById('search-bar');
              searchBar.value = tag;
              searchBar.focus();
          });
          suggestionsContainer.appendChild(tagElement);
      });
  }

  // Add matching opportunities
  if (matchingOpportunities.length > 0) {
      const oppHeader = document.createElement('div');
      oppHeader.className = 'suggestion-item suggestion-header';
      oppHeader.textContent = 'Opportunities:';
      suggestionsContainer.appendChild(oppHeader);

      matchingOpportunities.forEach(opp => {
          const oppElement = document.createElement('div');
          oppElement.className = 'suggestion-item opportunity-suggestion';
          oppElement.textContent = opp.name;
          oppElement.addEventListener('click', () => {
              const searchBar = document.getElementById('search-bar');
              searchBar.value = opp.name;
              searchBar.focus();
          });
          suggestionsContainer.appendChild(oppElement);
      });
  }

  suggestionsContainer.style.display = 'block';
}

// Update search bar input handler
document.getElementById('search-bar').addEventListener('input', function() {
  searchTerm = this.value.toLowerCase();
  showSuggestions(this.value);
});

// Show suggestions when search bar is focused
document.getElementById('search-bar').addEventListener('focus', function() {
  showSuggestions(this.value);
});

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  const searchBar = document.getElementById('search-bar');
  
  if (!searchBar.contains(e.target) && !suggestionsContainer.contains(e.target)) {
    suggestionsContainer.style.display = 'none';
  }
});

// Update search bar input handler
document.getElementById('search-bar').addEventListener('input', function() {
  searchTerm = this.value.toLowerCase();
  showSuggestions(this.value);
  applyFilters();
});

// Show suggestions when search bar is focused
document.getElementById('search-bar').addEventListener('focus', function() {
  showSuggestions(this.value);
});

// Keep suggestions visible when clicking on a suggestion
document.getElementById('suggestions-container').addEventListener('click', function(e) {
  if (e.target.classList.contains('suggestion-item')) {
    const searchBar = document.getElementById('search-bar');
    searchBar.focus();
    showSuggestions(searchBar.value);
  }
});

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  const searchBar = document.getElementById('search-bar');
  
  if (!searchBar.contains(e.target) && !suggestionsContainer.contains(e.target)) {
    suggestionsContainer.style.display = 'none';
  }
});

// Show the return icon container when a suggestion is clicked
document.getElementById('suggestions-container').addEventListener('click', function(e) {
  if (e.target.classList.contains('suggestion-item')) {
    const returnIconContainer = document.getElementById('return-icon-container');
    returnIconContainer.style.display = 'flex';
  }
});

// Show the return icon container when Enter key is pressed
document.getElementById('search-bar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const returnIconContainer = document.getElementById('return-icon-container');
    returnIconContainer.style.display = 'flex';
    // ... (rest of the code remains the same)
  }
});

// Hide the return icon container when the search bar is cleared
document.getElementById('search-bar').addEventListener('input', function() {
  const returnIconContainer = document.getElementById('return-icon-container');
  if (this.value === '') {
    returnIconContainer.style.display = 'none';
  }
  // ... (rest of the code remains the same)
});

document.addEventListener('DOMContentLoaded', () => {
  // Add indices to opportunity cards
  document.querySelectorAll('.opportunity-card').forEach((card, index) => {
    card.style.setProperty('--card-index', index);
  });
  
  // Add indices to tags
  document.querySelectorAll('.tag').forEach((tag, index) => {
    tag.style.setProperty('--tag-index', index);
  });
});







// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".opportunity-card");
  
//   if (cards.length < 3) return; // Ensure there are enough cards to avoid errors

//   // Determine dealer position (between card 2 and card 3 in row 1)
//   const dealerCard1 = cards[1]; // Second card in row 1
//   const dealerCard2 = cards[2]; // Third card in row 1
//   const dealerX = (dealerCard1.offsetLeft + dealerCard2.offsetLeft) / 2;
//   const dealerY = dealerCard1.offsetTop;

//   // Animate only the first 20 cards
//   cards.forEach((card, index) => {
//     if (index < 20) {
//       card.classList.add("dealt");

//       // Set initial position at the dealer's hand
//       card.style.position = "absolute";
//       card.style.left = `${dealerX}px`;
//       card.style.top = `${dealerY}px`;
//       card.style.opacity = "0";

//       // Staggered dealing effect
//       setTimeout(() => {
//         card.style.opacity = "1";
//         card.style.transform = "translate(0, 0) scale(1)";
//         card.style.left = "";
//         card.style.top = "";
//         card.style.transition = `all 0.4s ease-out ${index * 100}ms`;

//         // Reset to normal after dealing
//         setTimeout(() => {
//           card.style.position = "relative";
//         }, index * 100 + 500);
//       }, index * 100);
//     }
//   });
// });
