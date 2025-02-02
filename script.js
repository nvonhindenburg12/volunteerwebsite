/****************************************************
 * 1) Updated Opportunities Array (Duplicates Merged)
 *    - e.g., Girl Scouts, Girls on the Run, Habitat
 *      for Humanity now appear only once with all
 *      their relevant tags combined.
 ****************************************************/


const opportunities = [
  {
    "name": "ACLU",
    "description": "A nationwide non-profit, non-partisan organization with over 1.5 million members devoted to ensuring free speech, equal rights, and other civil liberties.",
    "tags": ["DC", "Social Advocacy & Activism"],
    "link": "https://www.acludc.org/en/volunteer"
  },
  {
    "name": "African American Civil War Museum",
    "description": "Preserves and tells the stories of the 209,145 members of the United States Colored Troops and their contributions in ending slavery and keeping America united.",
    "tags": ["DC", "Research & Citizen Science", "History"],
    "link": "https://afroamcivilwar.org/ways-to-participate/#volunteer"
  },
  {
    "name": "Boy Scouts of America",
    "description": "Focuses on helping youth do their best to help other people through group service projects and community engagement.",
    "tags": ["DC", "Social Advocacy & Activism", "Youth Empowerment"],
    "link": "https://www.scouting.org/outdoor-programs/conservation-and-environment/youth-service/"
  },
  {
    "name": "Bread for the City",
    "description": "Helps DC residents living with low income by providing food, clothing, medical care, and legal services to reduce the burden of poverty.",
    "tags": ["DC", "Food Insecurity", "Community Development"],
    "link": "https://breadforthecity.org/volunteer/"
  },
  {
    "name": "Breadcoin",
    "description": "A nonprofit organization providing food tokens as a tool to enable community response to hunger, operating in multiple DC neighborhoods.",
    "tags": ["DC", "Food Insecurity"],
    "link": "https://breadcoin.org/volunteer/"
  },
  {
    "name": "Capital Area Food Bank",
    "description": "Provides over 30 million meals annually while addressing root causes of hunger through job training programs and healthcare partnerships.",
    "tags": ["DC", "Food Insecurity", "Education"],
    "link": "https://volunteer.capitalareafoodbank.org/volunteer-individual"
  },
  {
    "name": "Capitol Hill Village",
    "description": "Sustains and enriches the lives of seniors through community support, ensuring accessible spaces and quality of life enhancement.",
    "tags": ["DC", "Senior Outreach", "Community Development"],
    "link": "https://capitolhillvillage.org/volunteer/"
  },
  {
    "name": "Central Union Mission",
    "description": "Provides emergency shelter, transformation programs, veteran benefits, addiction recovery support, and food distribution services.",
    "tags": ["DC", "Housing & Homelessness", "Food Insecurity"],
    "link": "https://www.missiondc.org/get-involved/volunteer/"
  },
  {
    "name": "Centronía",
    "description": "Provides affordable, quality early childhood education and family support services in a bilingual and multicultural environment.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://www.centronia.org/get-involved/volunteer"
  },
  {
    "name": "Charlie's Place",
    "description": "An outreach ministry providing food distribution, case management, street outreach, and housing assistance.",
    "tags": ["DC", "Housing & Homelessness", "Food Insecurity"],
    "link": "https://www.charliesplacedc.org/enhancing-your-volunteer-experience"
  },
  {
    "name": "Children's National Hospital",
    "description": "Volunteers assist patients and families during hospital visits through various support activities and programs.",
    "tags": ["DC", "Healthcare", "Youth Empowerment"],
    "link": "https://www.childrensnational.org/make-a-difference/volunteer"
  },
  {
    "name": "Chinatown Service Center",
    "description": "Assists newly-arrived Asian immigrants in making necessary adjustments to living in America through various support programs.",
    "tags": ["DC", "Immigration & Refugee Support"],
    "link": "https://www.chinatownscdc.org/how-to-help/"
  },
  {
    "name": "City Dogs & City Kitties Rescue",
    "description": "Rescues adoptable cats and dogs from overcrowded and high-kill shelters, finding them permanent homes in the DC area.",
    "tags": ["DC", "Animal Welfare"],
    "link": "https://www.citydogsrescuedc.org/volunteer/"
  },
  {
    "name": "Community of Hope",
    "description": "Improves health and ends family homelessness through housing programs and federally qualified health centers.",
    "tags": ["DC", "Housing & Homelessness", "Healthcare"],
    "link": "https://www.communityofhopedc.org/get-involved/volunteer/"
  },
  {
    "name": "DC Central Kitchen",
    "description": "Combats hunger and poverty through job training and job creation while providing nutritious food where needed most.",
    "tags": ["DC", "Food Insecurity", "Education"],
    "link": "https://dccentralkitchen.org/volunteer/"
  },
  {
    "name": "DC Public Library",
    "description": "Provides environments that invite reading, learning and community discussion to build a thriving city.",
    "tags": ["DC", "Education", "Community Development"],
    "link": "https://www.dclibrary.org/get-involved/volunteer-library"
  },
  {
    "name": "DC Scores",
    "description": "Creates neighborhood teams that give kids the confidence and skills to succeed on the playing field, in the classroom, and in life.",
    "tags": ["DC", "Youth Empowerment", "Sports", "Education"],
    "link": "https://www.dcscores.org/get-involved/#volunteer"
  },
  {
    "name": "DC State Fair",
    "description": "Holds an annual free showcase of the region's agricultural, culinary, and artistic talents.",
    "tags": ["DC", "Research & Citizen Science", "Community Development"],
    "link": "https://www.dcstatefair.org/volunteer"
  },
  {
    "name": "Edlavitch Jewish Community Center",
    "description": "Offers hands-on volunteer opportunities and education about systemic inequality in communities through social responsibility programs.",
    "tags": ["DC", "Social Advocacy & Activism", "Community Development"],
    "link": "https://www.edcjcc.org/programs/youth-action-institute/"
  },
  {
    "name": "Father McKenna Center",
    "description": "Serves men struggling with homelessness and families dealing with food insecurity in Ward 6.",
    "tags": ["DC", "Housing & Homelessness", "Food Insecurity"],
    "link": "https://fathermckennacenter.org/how-you-can-help/volunteer/"
  },
  {
    "name": "Food and Friends",
    "description": "Prepares and delivers specialized meals for people with HIV/AIDS, cancer, and other serious illnesses.",
    "tags": ["DC", "Food Insecurity", "Healthcare"],
    "link": "https://foodandfriends.org/volunteer/"
  },
  {
    "name": "For Love of Children (FLOC)",
    "description": "Provides educational services beyond the classroom to help students succeed from first grade through college and career.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSeLDbFh6c6wvJwiv56KMgYetmjyliMRSxzI1JqLgxwN4TPiuA/viewform"
  },
  {
    "name": "Free Minds Book Club & Creative Writing Workshop",
    "description": "Uses books and creative writing to empower young inmates to transform their lives through mentoring and support services.",
    "tags": ["DC", "Youth Empowerment", "Education"],
    "link": "https://freemindsbookclub.org/get-involved/intern-with-us"
  },
  {
    "name": "Friendship Place",
    "description": "Premier housing service provider offering innovative, person-focused programs to help people experiencing homelessness rebuild their lives.",
    "tags": ["DC", "Housing & Homelessness"],
    "link": "https://friendshipplace.org/get-involved/how-can-i-help/"
  },
  {
    "name": "Georgetown Ministry Center",
    "description": "Guides individuals experiencing chronic homelessness towards stability through street outreach and safe environments.",
    "tags": ["DC", "Housing & Homelessness"],
    "link": "https://georgetownministrycenter.org/help/volunteer/"
  },
  {
    "name": "Girl Scouts of America",
    "description": "Empowers girls through various community service projects and leadership development activities.",
    "tags": ["DC", "Social Advocacy & Activism", "Youth Empowerment"],
    "link": "https://www.girlscouts.org/en/girl-scouts-at-home/troop-leaders/national-service-projects.html"
  },
  {
    "name": "Girls on the Run",
    "description": "Inspires girls to recognize their inner strength through research-based curricula including discussions, activities and running games.",
    "tags": ["DC", "Youth Empowerment", "Sports"],
    "link": "https://www.gotrdc.org/Volunteer"
  },
  {
    "name": "Goods for Good DC",
    "description": "Partners with local nonprofits to provide critical care to economically disadvantaged, underserved, and vulnerable communities.",
    "tags": ["DC", "Social Advocacy & Activism", "Community Development"],
    "link": "https://goodsforgooddc.org/project/"
  },
  {
    "name": "Habitat for Humanity",
    "description": "Works in local communities to build and improve homes, believing everyone deserves a decent place to live.",
    "tags": ["DC", "Housing & Homelessness", "Community Development"],
    "link": "https://www.habitat.org/volunteer"
  },
  {
    "name": "Horizons Greater Washington",
    "description": "Prepares students from low-income families to succeed by building academic and life skills outside the traditional school year.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://www.horizonsgreaterwashington.org/volunteer"
  },
  {
    "name": "Human Rights Campaign",
    "description": "Works locally, nationally and globally on issues affecting the LGBTQ community, partnering across demographics to create positive change.",
    "tags": ["DC", "Social Advocacy & Activism"],
    "link": "https://www.hrc.org/get-involved/volunteer"
  },
  {
    "name": "Humane Rescue Alliance",
    "description": "Protects animals, supports families, and advocates for positive change to create a world where all animals can thrive.",
    "tags": ["DC", "Animal Welfare"],
    "link": "https://www.humanerescuealliance.org/youth-volunteers"
  },
  {
    "name": "Hunger Project",
    "description": "Combats hunger in the D.C. metro area through food packing events throughout the year.",
    "tags": ["DC", "Food Insecurity"],
    "link": "https://www.whctemple.org/faith-in-action/ongoing-opportunities/hunger-project/"
  },
  {
    "name": "Iona Senior Services",
    "description": "Supports people as they experience the challenges and opportunities of aging through education, advocacy, and community-based services.",
    "tags": ["DC", "Senior Outreach", "Healthcare"],
    "link": "https://www.iona.org/get-involved/volunteer/"
  },
  {
    "name": "Jack and Jill of America",
    "description": "Dedicated to nurturing future African American leaders through leadership development, volunteer service, and civic duty.",
    "tags": ["DC", "Youth Empowerment", "Social Advocacy & Activism"],
    "link": "https://www.jackandjillinc.org/programs/"
  },
  {
    "name": "KEEN",
    "description": "Pairs trained volunteer coaches with young people with disabilities for sports and recreational activities.",
    "tags": ["DC", "Accessibility", "Sports"],
    "link": "https://www.keengreaterdc.org/volunteers"
  },
  {
    "name": "Kid Power Inc.",
    "description": "Helps underserved DCPS students grow through academic success, leadership development, and healthy living initiatives.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://www.kidpowerdc.org/volunteer/"
  },
  {
    "name": "Latin American Youth Center",
    "description": "Serves over 5,000 individuals annually through various programs including homework tutoring and community services.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://www.layc-dc.org/volunteer"
  },
  {
    "name": "Latino Student Fund",
    "description": "Addresses disparities in access to education for underrepresented students through independent school and college access programs.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://latinostudentfund.org/volunteer/"
  },
  {
    "name": "LearnServe",
    "description": "Equips high school students with entrepreneurial vision and leadership skills to tackle social challenges.",
    "tags": ["DC", "Social Advocacy & Activism", "Youth Empowerment"],
    "link": "https://learn-serve.org/our-community/volunteers/"
  },
  {
    "name": "Leukemia & Lymphoma Society",
    "description": "Works to cure blood cancers and improve the quality of life of patients and their families.",
    "tags": ["DC", "Healthcare"],
    "link": "https://www.lls.org/volunteer"
  },
  {
    "name": "Loaves and Fishes",
    "description": "Provides warm, healthy meals on weekends and educates about hunger and homelessness in the community.",
    "tags": ["DC", "Food Insecurity", "Housing & Homelessness"],
    "link": "http://loavesandfishesdc.org/volunteer/"
  },
  {
    "name": "Lutheran Social Services",
    "description": "Offers hope through adoption, foster care, and refugee resettlement services.",
    "tags": ["DC", "Immigration & Refugee Support"],
    "link": "https://lssnca.org/help/volunteer.html"
  },
  {
    "name": "Martha's Table",
    "description": "Supports strong children, families, and communities by increasing access to education, healthy food, and family supports.",
    "tags": ["DC", "Food Insecurity", "Community Development"],
    "link": "https://marthastable.org/volunteer/"
  },
  {
    "name": "N Street Village",
    "description": "Empowers homeless and low-income women through housing, health care, and advocacy services.",
    "tags": ["DC", "Housing & Homelessness", "Healthcare"],
    "link": "https://www.nstreetvillage.org/volunteer/#individuals"
  },
  {
    "name": "Nationals Youth Baseball Academy",
    "description": "Uses baseball and softball to foster character development, academic achievement and improved health among youth.",
    "tags": ["DC", "Youth Empowerment", "Sports"],
    "link": "https://www.nats4good.org/youth-baseball-academy-volunteer-application/"
  },
  {
    "name": "One More Plate",
    "description": "Provides food security to those experiencing homelessness through meal delivery along a 13-stop route throughout DC.",
    "tags": ["DC", "Food Insecurity"],
    "link": "https://www.onemoreplatedc.org/volunteer"
  },
  {
    "name": "Project GiveBack",
    "description": "Provides a vehicle for corporate firms and professionals to benefit less fortunate individuals and families, focusing on children.",
    "tags": ["DC", "Youth Empowerment", "Community Development"],
    "link": "http://www.projectgiveback.org/get-involved/"
  },
  {
    "name": "Reading Partners",
    "description": "Mobilizes communities to provide students with individualized reading support to read at grade level by fourth grade.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://readingpartners.org/volunteer/"
  },
  {
    "name": "Rock Creek Conservancy",
    "description": "Works to restore Rock Creek and its parklands as a natural oasis through education, advocacy, and preservation efforts.",
    "tags": ["DC", "Environmental Justice", "Research & Citizen Science"],
    "link": "https://www.rockcreekconservancy.org/calendar"
  },
  {
    "name": "Sasha Bruce Youthwork",
    "description": "Helps young people find safe homes, achieve good health, create stable families, and explore educational and career opportunities.",
    "tags": ["DC", "Youth Empowerment", "Housing & Homelessness"],
    "link": "https://www.sashabruce.org/about-us/volunteer/"
  },
  {
    "name": "Seabury Resources for Aging",
    "description": "Provides personalized, affordable services and housing options to help older adults live with independence and dignity.",
    "tags": ["DC", "Senior Outreach", "Housing & Homelessness"],
    "link": "https://www.seaburyresources.org/volunteer"
  },
  {
    "name": "Sibley Hospital",
    "description": "A non-profit hospital providing healthcare services to the Washington, D.C. community.",
    "tags": ["DC", "Healthcare"],
    "link": "https://www.hopkinsmedicine.org/sibley-memorial-hospital/ways-to-give/about-volunteering/how-to-apply.html"
  },
  {
    "name": "Smithsonian",
    "description": "The world's largest museum, education, and research complex, preserving heritage and discovering new knowledge.",
    "tags": ["DC", "Research & Citizen Science", "Education"],
    "link": "https://www.si.edu/volunteer"
  },
  {
    "name": "So Others Might Eat (SOME)",
    "description": "Meets immediate daily needs with food, clothing, and healthcare while helping break the cycle of homelessness.",
    "tags": ["DC", "Housing & Homelessness", "Food Insecurity", "Senior Outreach"],
    "link": "https://www.some.org/volunteer/volunteer-overview"
  },
  {
    "name": "Solutions in Hometown Connections",
    "description": "Supports refugee families during resettlement through tutoring, mentoring, and community connection.",
    "tags": ["DC", "Immigration & Refugee Support", "Education"],
    "link": "https://www.shconnections.org/volunteer.html"
  },
  {
    "name": "Spark the Wave",
    "description": "Empowers and trains the next generation of leaders through community service and leadership development.",
    "tags": ["DC", "Social Advocacy & Activism", "Youth Empowerment"],
    "link": "https://www.sparkthewave.org/"
  },
  {
    "name": "Speak Truth",
    "description": "Brings students together for honest discussions about contemporary social issues through student-facilitated conversations.",
    "tags": ["DC", "Youth Empowerment", "Education"],
    "link": "https://inspiredteaching.org/youth/speak-truth/"
  },
  {
    "name": "Tenleytown Main Street",
    "description": "Works with residents and local businesses to strengthen the economic vitality of Tenleytown.",
    "tags": ["DC", "Community Development"],
    "link": "https://tenleytownmainstreet.org/volunteer-with-tenleytown-main-street/"
  },
  {
    "name": "The Tregaron Conservancy",
    "description": "Restoring and maintaining 13 acres of protected parkland for public benefit.",
    "tags": ["DC", "Environmental Justice"],
    "link": "https://tregaron.org/get-involved/"
  },
  {
    "name": "ThriveDC",
    "description": "Prevents and ends homelessness by providing vulnerable people with services to stabilize their lives.",
    "tags": ["DC", "Housing & Homelessness", "Food Insecurity"],
    "link": "https://www.thrivedc.org/volunteer/"
  },
  {
    "name": "TopSoccer",
    "description": "Provides soccer opportunities for athletes with intellectual, emotional, and physical disabilities.",
    "tags": ["DC", "Accessibility", "Sports"],
    "link": "https://www.dcsoccerclub.org/topsoccer"
  },
  {
    "name": "United States Holocaust Memorial Museum",
    "description": "Provides for the documentation, study, and interpretation of Holocaust history.",
    "tags": ["DC", "Research & Citizen Science", "History"],
    "link": "https://www.ushmm.org/information/career-volunteer-opportunities/volunteering"
  },
  {
    "name": "United We Dream",
    "description": "Empowers undocumented individuals to develop leadership and organizing skills through youth-led campaigns.",
    "tags": ["DC", "Immigration & Refugee Support", "Youth Empowerment"],
    "link": "https://unitedwedream.org/getinvolved/"
  },
  {
    "name": "US Forest Service",
    "description": "Administers national forests and grasslands while managing public lands for conservation and public use.",
    "tags": ["DC", "Environmental Justice", "Research & Citizen Science"],
    "link": "https://www.fs.usda.gov/working-with-us/opportunities-for-young-people"
  },
  {
    "name": "Washington Urban Debate League",
    "description": "Uses debate to teach critical thinking, research, public speaking, and advocacy skills to students.",
    "tags": ["DC", "Education", "Youth Empowerment"],
    "link": "https://www.urbandebatewashingtondc.org/volunteer-signup"
  },
  {
    "name": "We Are Family DC",
    "description": "Mobilizes volunteers to reach out to isolated inner-city seniors with free services and companionship.",
    "tags": ["DC", "Senior Outreach", "Community Development"],
    "link": "https://www.wearefamilydc.org/get-involved/volunteer/"
  },
  {
    "name": "Yachad",
    "description": "Preserves affordable homes and revitalizes neighborhoods through partnerships with homeowners and community stakeholders.",
    "tags": ["DC", "Housing & Homelessness", "Community Development"],
    "link": "http://www.yachad-dc.org/teenscollege.php"
  },
  {
    "name": "YMCA",
    "description": "Fosters spiritual, mental and physical development of individuals, families and communities through inclusive programs.",
    "tags": ["DC", "MD", "VA", "Social Advocacy & Activism", "Community Development"],
    "link": "https://www.ymcadc.org/virtual-volunteer-opportunities/"
  },
  {
       "name": "GDS Buddy Program",
        "description": "Connects students from across divisions in 1:1 pairs for regular conversation and connection, with weekly calls and guided activities throughout each session.",
        "tags": ["GDS Opportunities", "Education", "Youth Empowerment"],
        "link": "Email mmckeever@gds.org with interest"
      },
      {
        "name": "GDS Policy Institute",
        "description": "A student-led, interactive learning experience where fellows use their passion towards social justice issues to shape the world through advocacy, policy engagement, and relationship building.",
        "tags": ["GDS Opportunities", "Social Advocacy & Activism", "Education", "Community Development"],
        "link": "https://sites.google.com/gds.org/gds-policy-institute/"
      },
      {
        "name": "GDS Voter Mobilization Initiative",
        "description": "Unites DMV-area students to mobilize voters and combat voter suppression through registration, education, and legislation initiatives.",
        "tags": ["GDS Opportunities", "Social Advocacy & Activism", "Education", "Community Development"],
        "link": "Email studentaction@gds.org"
      },
      {
        "name": "HopShop",
        "description": "Improves student well-being by selling products and healthy food, providing business learning opportunities, and donating proceeds to nonprofits aligned with shared values.",
        "tags": ["GDS Opportunities", "Education", "Community Development", "Food Insecurity"],
        "link": "Email hopshop@gds.org"
      },
      {
        "name": "Jobs to Help",
        "description": "Student-founded initiative that encourages volunteers to fulfill odd jobs for neighbors, with payments made through donations to Black Lives Matter organizations and Covid relief efforts.",
        "tags": ["GDS Opportunities", "Community Development", "Social Advocacy & Activism"],
        "link": "Email jobstohelp.dc@gmail.com"
      },
      {
        "name": "K4K (Kards for Kids)",
        "description": "Brings joy to hospitalized children by providing them with hand-crafted cards.",
        "tags": ["GDS Opportunities", "Youth Empowerment", "Healthcare"],
        "link": ""
      },
      {
        "name": "Student Action Committee",
        "description": "Engages students in various initiatives including Voter Mobilization, Environmental Task Force, and Art Initiative to take action in the GDS community, DC, and nationwide.",
        "tags": ["GDS Opportunities", "Social Advocacy & Activism", "Environmental Justice", "Education", "Community Development"],
        "link": "Email studentaction@gds.org"
      },
      {
        "name": "Summit on Sexual Assault and Consent",
        "description": "A conference bringing together students, faculty, administrators, and parents from high schools nationwide to discuss sexual violence affecting people of all backgrounds.",
        "tags": ["GDS Opportunities", "Social Advocacy & Activism", "Education"],
        "link": "Email ltait@gds.org"
        
      },
      {
        "name": "Adventist HealthCare Shady Grove Medical Center",
        "description": "A faith-based organization dedicated to improving health and well-being through physical, mental and spiritual healing.",
        "tags": ["MD", "Healthcare"],
        "link": "https://www.adventisthealthcare.com/give/volunteer/"
      },
      {
        "name": "ArtStream",
        "description": "Offers performing arts classes for people with intellectual and developmental disabilities to learn performing arts and social skills through inclusive participation.",
        "tags": ["MD", "Accessibility", "Youth Empowerment", "Education"],
        "link": "https://art-stream.org/who-we-serve/volunteer/"
      },
      {
        "name": "Bethesda Cares",
        "description": "Works to prevent, ease and end homelessness throughout Montgomery County.",
        "tags": ["MD", "Housing & Homelessness", "Food Insecurity"],
        "link": "https://bethesdacares.org/getinvolved/volunteer-opportunities/"
      },
      {
        "name": "Bethesda Chevy Chase Rescue Squad",
        "description": "Provides emergency medical, fire and rescue services to communities in Montgomery County, Maryland, and Washington, DC.",
        "tags": ["MD", "DC", "Healthcare"],
        "link": "https://www.bccrs.org/join/junior-members/"
      },
      {
        "name": "Birthday Cakes For Free",
        "description": "Bakes and delivers birthday cakes for underprivileged children and seniors.",
        "tags": ["MD", "Youth Empowerment", "Senior Outreach"],
        "link": "https://www.bc4f.org/volunteer"
      },
      {
        "name": "Boy Scouts of America",
        "description": "Focuses on helping youth do their best to help other people through group service projects and community engagement.",
        "tags": ["MD", "DC", "VA", "Social Advocacy & Activism", "Youth Empowerment"],
        "link": "https://www.scouting.org/outdoor-programs/conservation-and-environment/youth-service/"
      },
      {
        "name": "Chesapeake Bay Foundation",
        "description": "The largest independent conservation organization dedicated solely to saving the Bay.",
        "tags": ["MD", "VA", "Environmental Justice", "Research & Citizen Science"],
        "link": "https://www.cbf.org/join-us/volunteer/"
      },
      {
        "name": "Circle of Hope Therapeutic Riding Center",
        "description": "Provides equine assisted activities and therapies for individuals with physical, mental, emotional and developmental disabilities.",
        "tags": ["MD", "Accessibility", "Healthcare"],
        "link": "http://www.chtr.org/volunteer"
      },
      {
        "name": "Down Syndrome Network of Montgomery County",
        "description": "Empowers and supports individuals with Down syndrome through education, information, public awareness and advocacy.",
        "tags": ["MD", "Accessibility", "Social Advocacy & Activism"],
        "link": "https://dsnmc.org/involved/volunteer.html"
      },
      {
        "name": "Friendship Circle",
        "description": "Provides assistance and support to children with special needs through recreational, social, educational and vocational programming.",
        "tags": ["MD", "Accessibility", "Youth Empowerment"],
        "link": "https://www.fcmd.org/templates/articlecco_cdo/aid/720969/jewish/Volunteer.htm"
      },
      {
        "name": "Girl Scouts of America",
        "description": "Empowers girls through various community service projects and leadership development activities.",
        "tags": ["MD", "DC", "VA", "Social Advocacy & Activism", "Youth Empowerment"],
        "link": "https://www.girlscouts.org/en/girl-scouts-at-home/troop-leaders/national-service-projects.html"
      },
      {
        "name": "Girls on the Run",
        "description": "Inspires girls to recognize their inner strength through research-based curricula including discussions, activities and running games.",
        "tags": ["MD", "DC", "VA", "Youth Empowerment", "Sports"],
        "link": "https://www.gotrdc.org/Volunteer"
      },
      {
        "name": "Habitat for Humanity",
        "description": "Works to build and improve homes, believing everyone deserves a decent place to live.",
        "tags": ["MD", "DC", "VA", "Housing & Homelessness", "Community Development"],
        "link": "https://www.habitat.org/volunteer"
      },
      {
        "name": "HART for Animals",
        "description": "A model for compassionate animal rescue and community involvement in saving companion animals.",
        "tags": ["MD", "Animal Welfare"],
        "link": "https://www.hartforanimals.org/volunteer"
      },
      {
        "name": "Just Tryan It",
        "description": "Provides financial assistance to families whose children have been diagnosed with cancer through children's triathlons.",
        "tags": ["MD", "Healthcare", "Youth Empowerment", "Sports"],
        "link": "https://donate.justtryanit.com/event/2024-be-volunteer/e552620"
      },
      {
        "name": "KEEN (Kids Enjoying Exercise Now)",
        "description": "Pairs trained volunteer coaches with young people with disabilities for sports and recreational activities.",
        "tags": ["MD", "DC", "VA", "Youth Empowerment", "Accessibility", "Sports"],
        "link": "https://www.keengreaterdc.org/volunteers"
      },
      {
        "name": "KID Museum",
        "description": "A pioneering experiential museum and educational makerspace fostering skills to invent the future.",
        "tags": ["MD", "Youth Empowerment", "Research & Citizen Science", "Education", "STEM"],
        "link": "https://kid-museum.org/getinvolved/teens/apprentice/"
      },
      {
        "name": "Leveling the Playing Field",
        "description": "Collects and distributes sports equipment to under-resourced youth groups and community programs.",
        "tags": ["MD", "Youth Empowerment", "Sports"],
        "link": "https://www.levelingtheplayingfield.org/ways-to-help/volunteer-center/"
      },
      {
        "name": "Lutheran Social Services",
        "description": "Offers hope through adoption, foster care, and refugee resettlement services.",
        "tags": ["MD", "DC", "VA", "Immigration & Refugee Support"],
        "link": "https://lssnca.org/help/volunteer.html"
      },
      {
        "name": "Manna Food Center",
        "description": "Works to end hunger in Montgomery County through food distribution, education and advocacy.",
        "tags": ["MD", "Food Insecurity", "Education"],
        "link": "https://www.mannafood.org/volunteer-with-us/"
      },
      {
        "name": "Miracle League Baseball of Montgomery County",
        "description": "Gives children with mental and physical disabilities the opportunity to play baseball as team members in an organized league.",
        "tags": ["MD", "Youth Empowerment", "Accessibility", "Sports"],
        "link": "https://www.miracleleaguemocomd.org/join"
      },
      {
        "name": "Montgomery Coalition for the Homeless",
        "description": "Provides solutions to ensure homelessness is rare, brief, and nonrecurring in Montgomery County.",
        "tags": ["MD", "Housing & Homelessness"],
        "link": "https://mcch.net/volunteer2-2/"
      },
      {
        "name": "Montgomery County Department of Environmental Protection",
        "description": "Protects and improves air, water and land while fostering smart growth, economy and healthy communities.",
        "tags": ["MD", "Environmental Justice"],
        "link": "https://www.montgomerycountymd.gov/dep/volunteer.html"
      },
      {
        "name": "Reading Partners",
        "description": "Provides individualized reading support to help students read at grade level by fourth grade.",
        "tags": ["MD", "DC", "Education", "Youth Empowerment"],
        "link": "https://readingpartners.org/volunteer/"
      },
      {
        "name": "Share Food Network",
        "description": "Offers healthy, nutritious groceries at roughly 50 percent discount to support community food security.",
        "tags": ["MD", "Food Insecurity"],
        "link": "https://www.catholiccharitiesdc.org/getinvolved/ways-to-volunteer/"
      },
      {
        "name": "Shepherd's Table",
        "description": "Provides meals, social services, medical support, and other assistance to people experiencing homelessness or in need.",
        "tags": ["MD", "Housing & Homelessness", "Food Insecurity", "Healthcare"],
        "link": "https://www.shepherdstable.org/volunteer-opportunities/"
      },
      {
        "name": "Solutions in Hometown Connections",
        "description": "Supports refugee families during resettlement through tutoring, mentoring, and community connection.",
        "tags": ["MD", "DC", "VA", "Immigration & Refugee Support", "Education"],
        "link": "https://www.shconnections.org/volunteer"
      },
      {
        "name": "Suburban Hospital",
        "description": "A community-based hospital serving Montgomery County as the designated trauma center since 1943.",
        "tags": ["MD", "Healthcare"],
        "link": "https://www.hopkinsmedicine.org/volunteer-services/suburban"
      },
      {
        "name": "Tacy Foundation",
        "description": "Empowers youth to share hope through music with hospital patients, senior citizens, and disadvantaged youth.",
        "tags": ["MD", "Healthcare", "Youth Empowerment", "Senior Outreach"],
        "link": "https://www.tacyfoundation.org/pages/about-us"
      },
      {
        "name": "Washington Hebrew Home",
        "description": "Provides long-term care and person-centered services promoting dignity of older adults.",
        "tags": ["MD", "Senior Outreach", "Healthcare"],
        "link": "https://www.smithlifecommunities.org/giving/volunteer/"
      }, {
            "name": "ABRACE",
            "description": "Develops educational and cultural initiatives linking Brazil and the United States through language education, cultural programs, and community building.",
            "tags": ["VA", "Youth Empowerment", "Education"],
            "link": "https://abracebrasil.org/para-voluntariar-to-volunteer/"
          },
          {
            "name": "ALIVE! Family Assistance Program",
            "description": "Faith-based organization working to alleviate suffering caused by poverty and improve lives of those in need in Alexandria.",
            "tags": ["VA", "Community Development"],
            "link": "https://www.alive-inc.org/we-need-volunteers-alexandria-va/"
          },
          {
            "name": "Arcadia Farm",
            "description": "Provides a sustainable model of agriculture to new farmers, students and the public through hands-on community engagement.",
            "tags": ["VA", "Environmental Justice", "Education"],
            "link": "https://www.arcadiafood.org/volunteer"
          },
          {
            "name": "Arlington Food Assistance Center",
            "description": "Provides dignified access to free groceries allowing families to devote limited resources to other basic needs.",
            "tags": ["VA", "Food Insecurity", ],
            "link": "https://afac.org/volunteer/"
          },
          {
            "name": "Boy Scouts of America",
            "description": "Focuses on helping youth do their best to help other people through group service projects and community engagement.",
            "tags": ["VA", "DC", "MD", "Social Advocacy & Activism", "Youth Empowerment"],
            "link": "https://www.scouting.org/outdoor-programs/conservation-and-environment/youth-service/"
          },
          {
            "name": "Chesapeake Bay Foundation",
            "description": "The largest independent conservation organization dedicated solely to saving the Bay.",
            "tags": ["VA", "MD", "Environmental Justice", "Research & Citizen Science"],
            "link": "https://www.cbf.org/join-us/volunteer/"
          },
          {
            "name": "Food for Others",
            "description": "Provides food assistance through rescue operations and food drives for emergency needs and working poor families.",
            "tags": ["VA", "Food Insecurity", ],
            "link": "https://foodforothers.org/ffovolunteer/"
          },
          {
            "name": "Four Mile Run Conservatory Foundation",
            "description": "Promotes nature, culture, and community through restoration, advocacy, recreation, and education.",
            "tags": ["VA", "Environmental Justice", "Community Development"],
            "link": "https://www.fourmilerun.org/p/events.html"
          },
          {
            "name": "Girl Scouts of America",
            "description": "Empowers girls through community service projects and leadership development activities.",
            "tags": ["VA", "DC", "MD", "Social Advocacy & Activism", "Youth Empowerment"],
            "link": "https://www.girlscouts.org/en/girl-scouts-at-home/troop-leaders/national-service-projects.html"
          },
          {
            "name": "Girls on the Run",
            "description": "Inspires girls to recognize their inner strength through research-based curricula including discussions, activities and running games.",
            "tags": ["VA", "DC", "MD", "Youth Empowerment", "Sports"],
            "link": "https://www.gotrdc.org/Volunteer"
          },
          {
            "name": "Habitat for Humanity",
            "description": "Works to build and improve homes, believing everyone deserves a decent place to live.",
            "tags": ["VA", "DC", "MD", "Housing & Homelessness", "Community Development"],
            "link": "https://www.habitat.org/volunteer"
          },
          {
            "name": "KEEN (Kids Enjoying Exercise Now)",
            "description": "Pairs trained volunteer coaches with young people with disabilities for sports and recreational activities.",
            "tags": ["VA", "DC", "MD", "Youth Empowerment", "Accessibility", "Sports"],
            "link": "https://www.keengreaterdc.org/volunteers"
          },
          {
            "name": "Lost Dog and Cat Rescue Foundation",
            "description": "Helps homeless pets find loving homes through rescue and adoption, working to create a world free of homeless pets.",
            "tags": ["VA", "Animal Welfare"],
            "link": "https://www.lostdogrescue.org/volunteer/"
          },
          {
            "name": "Lucky Dog Animal Rescue",
            "description": "Volunteer-powered nonprofit dedicated to rescuing homeless, neglected, and abandoned animals from euthanasia.",
            "tags": ["VA", "Animal Welfare"],
            "link": "https://luckydoganimalrescue.salsalabs.org/signuptobealuckydogyouthvolunteer/index.html"
          },
          {
            "name": "Lutheran Social Services",
            "description": "Offers hope through adoption, foster care, and refugee resettlement services.",
            "tags": ["VA", "DC", "MD", "Immigration & Refugee Support", ],
            "link": "https://lssnca.org/help/volunteer.html"
          },
          {
            "name": "Meals on Wheels",
            "description": "Supports community-based programs dedicated to addressing senior isolation and hunger through meal delivery.",
            "tags": ["VA", "Food Insecurity", "Senior Outreach"],
            "link": "https://www.mealsonwheelsamerica.org/americaletsdolunch"
          },
          {
            "name": "New Hope Housing",
            "description": "Works to end the cycle of homelessness through innovative solutions and comprehensive services.",
            "tags": ["VA", "Housing & Homelessness", ],
            "link": "https://www.newhopehousing.org/get-involved/volunteer/"
          },
          {
            "name": "Northern Virginia Family Service",
            "description": "Provides essential resources for financial, emotional and physical well-being to help people achieve self-sufficiency.",
            "tags": ["VA", "Community Development", ],
            "link": "https://www.nvfs.org/get-involved/individual-opportunities/"
          },
          {
            "name": "Solutions in Hometown Connections",
            "description": "Supports refugee families during resettlement through tutoring, mentoring, and community connection.",
            "tags": ["VA", "DC", "MD", "Immigration & Refugee Support", "Education"],
            "link": "https://www.shconnections.org/volunteer"
          },
          {
            "name": "Special Olympics",
            "description": "Provides year-round sports training and athletic competition for children and adults with intellectual disabilities.",
            "tags": ["VA", "DC", "MD", "Youth Empowerment", "Accessibility", "Sports"],
            "link": "https://www.specialolympics.org/get-involved/volunteer"
          },
          {
            "name": "To the Rescue Inc",
            "description": "Dedicated to saving the lives of cats and dogs from high-kill shelters across the United States.",
            "tags": ["VA", "Animal Welfare"],
            "link": "https://www.totherescueinc.org/volunteer"
          }, {
                "name": "A Wider Circle",
                "description": "Advances equity in the greater Washington, DC region by fostering exchange of goods, skills, and connections between neighbors, offering no- or low-contact volunteer opportunities.",
                "tags": ["MD", "Remote Opportunities", "Community Development", "Housing & Homelessness"],
                "link": "https://awidercircle.org/getinvolved/volunteer/"
              },
              {
                "name": "Be My Eyes",
                "description": "A free mobile app connecting blind and low-vision individuals with sighted volunteers through live video calls.",
                "tags": ["Remote Opportunities", "Accessibility", ],
                "link": "https://www.bemyeyes.com/"
              },
              {
                "name": "Best Buddies",
                "description": "Works to end social, physical and economic isolation of people with intellectual and developmental disabilities through meaningful friendships and skills development.",
                "tags": ["Remote Opportunities", "Accessibility", ],
                "link": "https://www.bestbuddies.org/volunteer/"
              },
              {
                "name": "Distributed Proofreaders",
                "description": "Provides web-based method to convert Public Domain books into e-books by dividing workload into individual pages.",
                "tags": ["Remote Opportunities", "Education", "Research & Citizen Science"],
                "link": "https://www.pgdp.net/c/"
              },
              {
                "name": "Free Minds Book Club",
                "description": "Uses books and creative writing to empower young inmates through educational worksheets and poetry feedback.",
                "tags": ["Remote Opportunities", "Youth Empowerment", "Education"],
                "link": "https://freemindsbookclub.org/get-involved/intern-with-us"
              },
              {
                "name": "Humane Rescue Alliance",
                "description": "Enables remote volunteers to create DIY toys and supplies for animal shelters.",
                "tags": ["Remote Opportunities", "Animal Welfare"],
                "link": "https://www.humanerescuealliance.org/donate-hra"
              },
              {
                "name": "Intutorly",
                "description": "Connects volunteer tutors with students for high-quality, one-on-one online tutoring to bridge educational divides.",
                "tags": ["Remote Opportunities", "Education", "Youth Empowerment"],
                "link": "https://docs.google.com/forms/d/e/1FAIpQLSe3x_gbcsmW3Qmngkr20SN3aOTkUK7-IwTsR5GjLApmWM3ayA/viewform"
              },
              {
                "name": "KEEN",
                "description": "Provides online programs and social sessions for athletes with disabilities through volunteer-led activities.",
                "tags": ["Remote Opportunities", "Accessibility", "Sports", "Youth Empowerment"],
                "link": "https://www.keengreaterdc.org/virtual-volunteer-opportunities-during-covid"
              },
              {
                "name": "Latino Student Fund",
                "description": "Provides academic foundation to underserved PreK-12th-grade students of Hispanic descent through virtual tutoring.",
                "tags": ["Remote Opportunities", "Education", "Youth Empowerment"],
                "link": "https://latinostudentfund.volunteerhub.com/"
              },
              {
                "name": "LibriVox",
                "description": "Volunteers read and record chapters of public domain books to make them freely available online.",
                "tags": ["Remote Opportunities", "Education", "Research & Citizen Science"],
                "link": "https://librivox.org/pages/volunteer-for-librivox/"
              },
              {
                "name": "NEST Tutors",
                "description": "Provides free virtual tutoring for Pre-K through high school students to foster love of learning.",
                "tags": ["Remote Opportunities", "Education", "Youth Empowerment"],
                "link": "https://docs.google.com/forms/d/e/1FAIpQLScQSA8C8zh_F5Oxt4Ppmed-dyRUpxzp3SW8MH4sknxl911q2g/viewform"
              },
              {
                "name": "Reading Partners",
                "description": "Partners with under-resourced schools to provide one-on-one reading support through structured virtual tutoring.",
                "tags": ["Remote Opportunities", "Education", "Youth Empowerment"],
                "link": "https://readingpartners.org/volunteer-washington-dc/"
              },
              {
                "name": "Solutions in Hometown Connections",
                "description": "Coordinates remote volunteer tutors to support refugee families during resettlement through education and mentoring.",
                "tags": ["Remote Opportunities", "Education", "Immigration & Refugee Support"],
                "link": "https://www.shconnections.org/volunteer.html"
              },
              {
                "name": "StoryCorps",
                "description": "Preserves and shares humanity's stories to build connections and create a more compassionate world through recorded conversations.",
                "tags": ["Remote Opportunities", "Research & Citizen Science", "Community Development"],
                "link": "https://storycorps.org/participate/"
              },
              {
                "name": "Tacy Foundation",
                "description": "Empowers youth to share hope through music with hospital patients, seniors, and disadvantaged youth.",
                "tags": ["Remote Opportunities", "Youth Empowerment", "Senior Outreach", "Healthcare"],
                "link": "https://www.tacyfoundation.org/pages/about-us"
              },
              {
                "name": "Tarjimly",
                "description": "Connects bilingual volunteers with displaced people worldwide for virtual translation services.",
                "tags": ["Remote Opportunities", "Immigration & Refugee Support", ],
                "link": "https://tarjim.ly/howitworks"
              },
              {
                "name": "TeensGive",
                "description": "Enables high school students to tutor children from Title 1 schools and teach entrepreneurship curriculum online.",
                "tags": ["Remote Opportunities", "Education", "Youth Empowerment"],
                "link": "https://teensgive.org/virtual/"
              },
              {
                "name": "Translators Without Borders",
                "description": "Provides translation services for medical texts, crisis response, and other critical communications.",
                "tags": ["Remote Opportunities", "Immigration & Refugee Support", "Healthcare"],
                "link": "https://translatorswithoutborders.org/volunteer/"
              },
              {
                "name": "UPchieve",
                "description": "Connects low-income high school students with live, volunteer coaches for online academic support.",
                "tags": ["Remote Opportunities", "Education", "Youth Empowerment"],
                "link": "https://upchieve.org/volunteer/"
              },
              {
                "name": "Zooniverse",
                "description": "Enables people to participate in real research through online citizen science projects across various fields.",
                "tags": ["Remote Opportunities", "Research & Citizen Science", "Education"],
                "link": "https://www.zooniverse.org/get-involved"
              },
              {
                "name": "AMIGOS",
                "description": "Provides authentic service and immersion experiences in Latin America for volunteers age 13-22, offering Spanish improvement, leadership development, and cultural exchange.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Education"],
                "link": "https://amigosinternational.org/amigos-programs/"
              },
              {
                "name": "Apogee Adventures",
                "description": "Offers outdoor adventure travel programs for teens including hiking, biking, community service, writing, photography, and language programs across US, Canada, Europe, and Caribbean.",
                "tags": ["Travel Experiences", "Youth Empowerment"],
                "link": "https://www.apogeeadventures.com/teen-adventures/"
              },
              {
                "name": "Appalachian Service Project",
                "description": "Brings volunteers to Central Appalachia to repair and replace homes for low-income families through structured service opportunities.",
                "tags": ["Travel Experiences", "Housing & Homelessness", "Community Development"],
                "link": "https://asphome.org/volunteer/"
              },
              {
                "name": "BBYO Passport",
                "description": "Provides Jewish travel and service-learning experiences spanning 40+ countries, combining informal education with expert travel guidance.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Education"],
                "link": "https://www.bbyopassport.org/the-passport-way/?target=who%20we%20are"
              },
              {
                "name": "Bold Earth",
                "description": "Incorporates meaningful service into adventure trips, from trail building in Colorado to caring for primates in Thailand, focusing on community benefit.",
                "tags": ["Travel Experiences", "Environmental Justice", "Youth Empowerment"],
                "link": "https://boldearth.com/about/adventure-service/"
              },
              {
                "name": "Camp Sunshine",
                "description": "Provides respite and support to families affected by life-threatening childhood illness at their campus on Maine's Sebago Lake.",
                "tags": ["Travel Experiences", "Healthcare", ],
                "link": "https://www.campsunshine.org/volunteer"
              },
              {
                "name": "Global Leadership Adventures",
                "description": "Combines community service, immersive learning, and adventure to inspire students to become global leaders and create positive change.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Education"],
                "link": "https://www.experiencegla.com/"
              },
              {
                "name": "Habitat for Humanity",
                "description": "Works globally to build and improve homes, with operations across all 50 states and approximately 70 countries.",
                "tags": ["Travel Experiences", "Housing & Homelessness", "Community Development"],
                "link": "https://www.habitat.org/volunteer"
              },
              {
                "name": "Mitzvah Corps",
                "description": "Provides social justice experiences for high school students to understand community challenges and take action through Jewish values.",
                "tags": ["Travel Experiences", "Social Advocacy & Activism", "Youth Empowerment"],
                "link": "https://mitzvahcorps.org/program-options/"
              },
              {
                "name": "No Barriers Youth",
                "description": "Takes students out of their comfort zones through educational travel experiences, working with individuals with disabilities.",
                "tags": ["Travel Experiences", "Accessibility", "Youth Empowerment"],
                "link": "https://www.nobarriersyouth.org/"
              },
              {
                "name": "Outward Bound",
                "description": "Combines wilderness adventures with service projects like trail work, community pantry volunteering, and river cleanup.",
                "tags": ["Travel Experiences", "Environmental Justice", "Youth Empowerment"],
                "link": "https://www.outwardbound.org/classic/wilderness-adventures/service-trips/"
              },
              {
                "name": "Overland",
                "description": "Focuses on hands-on projects and active exploration through mentoring, food bank work, and trail restoration.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Environmental Justice"],
                "link": "https://overlandsummers.com/trips/all/service/"
              },
              {
                "name": "Project Nido",
                "description": "Partners with PACH to provide medical missions to Ecuador, offering healthcare services and dental education to communities.",
                "tags": ["Travel Experiences", "Healthcare", "Education"],
                "link": "https://drive.google.com/file/d/1-DzDx_DhVhFjJAavCG9elefruBWwEM-t/view?usp=sharing"
              },
              {
                "name": "Rustic Pathways",
                "description": "Creates culturally-immersive travel and community service programs for students ages 12-22, including customizable teacher-led trips.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Education"],
                "link": "https://rusticpathways.com/students/programs"
              },
              {
                "name": "Travel for Teens",
                "description": "Emphasizes cultural immersion and appreciation through programs that create global citizens through hands-on experiences.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Education"],
                "link": "https://www.travelforteens.com/programs/?programType=community-service"
              },
              {
                "name": "Westcoast Connection",
                "description": "Develops teens into leaders and global citizens through community service programs that build awareness and compassion.",
                "tags": ["Travel Experiences", "Youth Empowerment", "Community Development"],
                "link": "https://www.westcoastconnection.com/programs/volunteer/"
              }
];

/****************************************************
 * 2) Global Variables for Search Term & Selected Tags
 ****************************************************/
let searchTerm = '';
let selectedTags = [];

/****************************************************
 * 3) RENDER ALL UNIQUE TAGS
 *    - Removes duplicates across opportunities
 *    - Creates clickable <span> for each unique tag
 ****************************************************/
function renderTags() {
  const tagsContainer = document.getElementById('tags-container');
  const allTags = [...new Set(opportunities.flatMap(item => item.tags))];

  // Define the order of the specific tags
  const orderedTags = [
    'DC',
    'MD',
    'VA',
    'GDS Opportunities',
    'Remote Opportunities',
    'Travel Experiences'
  ];

  // Filter out the specific tags from allTags
  const remainingTags = allTags.filter(tag => !orderedTags.includes(tag));

  // Combine the specific tags and remaining tags in the desired order
  const sortedTags = [...orderedTags, ...remainingTags];

  tagsContainer.innerHTML = '';

  sortedTags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.textContent = tag;

    // Clean up the tag string for a valid CSS class
    const className = tag
      .replace(/\s+/g, '')    // remove spaces
      .replace(/&/g, '')      // remove ampersand
      .replace(/\+/g, '');    // remove plus sign
    tagElement.classList.add(`tag-${className}`);

    // On click, toggle selection
    tagElement.addEventListener('click', () => {
      tagElement.classList.toggle('selected');
      updateSelectedTags();
    });

    tagsContainer.appendChild(tagElement);
  });
}
/****************************************************
 * 4) UPDATE SELECTED TAGS
 *    - Tracks all currently selected tags by text
 *    - Then calls applyFilters() to re-filter results
 ****************************************************/
function updateSelectedTags() {
  selectedTags = Array.from(document.querySelectorAll('.tag.selected'))
    .map(tag => tag.textContent);
  applyFilters();
}

/****************************************************
 * 5) APPLY ALL FILTERS (SEARCH + TAGS)
 *    - 1) Filter by name/description (searchTerm)
 *    - 2) Filter by all selectedTags
 *    - Renders only the final matching list
 ****************************************************/
function applyFilters() {
  // First, filter by search
  let filtered = opportunities.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );

  // Next, filter by selected tags
  if (selectedTags.length > 0) {
    filtered = filtered.filter(item =>
      // Return true only if ALL selected tags are in the item.tags
      selectedTags.every(tag => item.tags.includes(tag))
    );
  }

  // Finally, render
  renderOpportunities(filtered);
}

/****************************************************
 * 6) RENDER OPPORTUNITIES
 *    - Also displays each opportunity's tags
 ****************************************************/
function renderOpportunities(filteredOpportunities) {
  const container = document.getElementById('opportunities-container');
  container.innerHTML = '';

  filteredOpportunities.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('opportunity-card');

    // Build tags row
    const tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags');

    item.tags.forEach(t => {
      const tagSpan = document.createElement('span');
      tagSpan.classList.add('tag');
      // Clean up text for color class
      const className = t
        .replace(/\s+/g, '')
        .replace(/&/g, '')
        .replace(/\+/g, '');
      tagSpan.classList.add(`tag-${className}`);
      tagSpan.textContent = t;
      tagsDiv.appendChild(tagSpan);
    });

    // Insert main HTML
    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Learn More</a>
    `;

    // Append the tags row at the bottom
    card.appendChild(tagsDiv);

    container.appendChild(card);
  });
}

/****************************************************
 * 7) SET UP SEARCH BAR LISTENER
 *    - On input, update searchTerm and applyFilters()
 ****************************************************/
document.getElementById('search-bar').addEventListener('input', function() {
  searchTerm = this.value.toLowerCase();
  applyFilters();
});

/****************************************************
 * 8) INITIAL RENDER:
 *    - Render the tag buttons
 *    - Render all opportunities by default
 ****************************************************/
renderTags();
renderOpportunities(opportunities);

