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

  filteredOpportunities.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('opportunity-card');
    // Add card index for animations
    card.style.setProperty('--card-index', index);

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
    tagHeader.className = 'suggestion-item suggestion-header';
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
    oppHeader.className = 'suggestion-item suggestion-header';
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

// Function to clear all selected tags
function clearAllTags() {
  document.querySelectorAll('.tag.selected').forEach(tag => {
    tag.classList.remove('selected');
  });
  selectedTags = [];
  document.getElementById('selected-count').textContent = '(0)';
}

// Setup mobile filters
function setupMobileFilters() {
  const filterSection = document.querySelector('.filter-section');
  const filterHeader = document.querySelector('.filter-header');
  const tagsContainer = document.getElementById('tags-container');
  
  // Remove existing toggle button if it exists
  const existingToggle = document.querySelector('.mobile-filter-toggle');
  if (existingToggle) {
    existingToggle.remove();
  }
  
  // Create a toggle button
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Show Filters';
  toggleButton.classList.add('mobile-filter-toggle');
  
  if (window.