// Full Flower Data (21 Flowers)
const flowers = [
  { 
    name: "Jasmine", 
    imgSrc: "Assets/Flowers/JPEG/1_Jasmine.jpg", 
    description: "A symbol of purity and sweetness, Jasmine carries the scent of serene mornings and quiet affection.", 
    tags: ["fragrant", "symbolism"] 
  },
  { 
    name: "Lotus", 
    imgSrc: "Assets/Flowers/JPEG/2_Lotus.jpg", 
    description: "Rising from still waters, the Lotus reflects spiritual grace and the courage to bloom against odds.", 
    tags: ["symbolism", "native"] 
  },
  { 
    name: "Hibiscus", 
    imgSrc: "Assets/Flowers/JPEG/3_Hibiscus.jpg", 
    description: "Bold and vibrant, Hibiscus blossoms represent strength, passion, and heartfelt vitality.", 
    tags: ["symbolism"] 
  },
  { 
    name: "Bougainvillea", 
    imgSrc: "Assets/Flowers/JPEG/4_Bougainvillea.jpg", 
    description: "Resilient and radiant, Bougainvillea reminds us of joy that blooms even in the harshest seasons.", 
    tags: ["native"] 
  },
  { 
    name: "Plumeria", 
    imgSrc: "Assets/Flowers/JPEG/5_Plumeria.jpg", 
    description: "Soft petals and fragrant whispers - Plumeria is the gentle voice of affection and charm.", 
    tags: ["fragrant"] 
  },
  { 
    name: "Water Lily", 
    imgSrc: "Assets/Flowers/JPEG/6_WaterLily.jpg", 
    description: "Calm and rooted, Water Lily floats with grace - a symbol of peace and inner purity.", 
    tags: ["symbolism", "native"] 
  },
  { 
    name: "Coconut Flower", 
    imgSrc: "Assets/Flowers/JPEG/7_CoconutFlower.jpg", 
    description: "The soul of the tropical tree - Coconut flowers are life, strength, and gentle nourishment.", 
    tags: ["native"] 
  },
  { 
    name: "Orchid", 
    imgSrc: "Assets/Flowers/JPEG/8_Orchid.jpg", 
    description: "Elegant and mysterious, Orchid flowers speak of beauty, luxury, and silent strength.", 
    tags: ["rare"] 
  },
  { 
    name: "Balsam", 
    imgSrc: "Assets/Flowers/JPEG/9_Balsam.jpg", 
    description: "Delicate yet resilient, Balsam adds a brush of kindness and subtle love to any garden.", 
    tags: ["native"] 
  },
  { 
    name: "Cinnamon Flower", 
    imgSrc: "Assets/Flowers/JPEG/10_CinnamonFlower.jpg", 
    description: "Spicy-sweet and rare, Cinnamon blooms evoke warmth, comfort, and cultural pride.", 
    tags: ["rare", "native"] 
  },
  { 
    name: "Ixora", 
    imgSrc: "Assets/Flowers/JPEG/11_Ixora.jpg", 
    description: "With fiery clusters, Ixora reflects devotion, admiration, and the glow of passion.", 
    tags: ["symbolism", "native"] 
  },
  { 
    name: "Periwinkle", 
    imgSrc: "Assets/Flowers/JPEG/12_Periwinkle.jpg", 
    description: "Periwinkle brings quiet blessings - a wish for good luck and enduring friendship.", 
    tags: ["symbolism"] 
  },
  { 
    name: "Plumeria (White)", 
    imgSrc: "Assets/Flowers/JPEG/13_Plumeria.jpg", 
    description: "The white variant of Plumeria symbolizes new beginnings and spiritual devotion.", 
    tags: ["fragrant", "symbolism"] 
  },
  { 
    name: "Karthigaipoo", 
    imgSrc: "Assets/Flowers/JPEG/14_Karthigaipoo.jpg", 
    description: "Sacred in Hindu rituals, Karthigapoo represents purity and divine blessings.", 
    tags: ["symbolism", "native"] 
  },
  { 
    name: "Poinsettia", 
    imgSrc: "Assets/Flowers/JPEG/15_Poinsettia.jpg", 
    description: "Known as the Christmas flower, its red leaves symbolize celebration and good cheer.", 
    tags: ["symbolism"] 
  },
  { 
    name: "Wild Ginger", 
    imgSrc: "Assets/Flowers/JPEG/16_WildGinger.jpg", 
    description: "Exotic and tropical, Wild Ginger flowers hide beneath lush foliage like hidden treasures.", 
    tags: ["rare", "native"] 
  },
  { 
    name: "Sunflower", 
    imgSrc: "Assets/Flowers/JPEG/17_Sunflower.jpg", 
    description: "Bright and cheerful, Sunflowers turn their faces to follow the sun's path across the sky.", 
    tags: ["symbolism"] 
  },
  { 
    name: "Tuberose", 
    imgSrc: "Assets/Flowers/JPEG/18_Tuberose.jpg", 
    description: "Intoxicatingly fragrant, Tuberose symbolizes dangerous pleasure and sensual beauty.", 
    tags: ["fragrant", "rare"] 
  },
  { 
    name: "Lantana", 
    imgSrc: "Assets/Flowers/JPEG/19_Lantana.jpg", 
    description: "Color-changing clusters that attract butterflies, representing transformation and vibrancy.", 
    tags: ["native"] 
  },
  { 
    name: "Golden Shower", 
    imgSrc: "Assets/Flowers/JPEG/20_GoldenShower.jpg", 
    description: "Cascades of golden flowers symbolizing abundance, joy, and the arrival of spring.", 
    tags: ["symbolism", "native"] 
  },
  { 
    name: "Moringa Flowers", 
    imgSrc: "Assets/Flowers/JPEG/21_MoringaFlowers.jpg", 
    description: "Delicate blossoms of the 'miracle tree', representing nourishment and healing.", 
    tags: ["native", "symbolism"] 
  }
];

// Facts for the wisdom section
const flowerFacts = [
  "Jasmine symbolizes purity and grace in many traditions.",
  "Lotus blooms from the mud, untainted and divine.",
  "Hibiscus tea cools the body and warms the heart.",
  "Ixora is offered in temples across Sri Lanka.",
  "Plumeria often symbolizes new beginnings and love.",
  "Orchids are symbols of rare beauty and strength.",
  "Water Lily grows in stillness, rooted and peaceful.",
  "Karthigapoo is used in traditional Ayurvedic medicine.",
  "Bougainvillea thrives even in dry soil and sun.",
  "Cinnamon flowers bloom before fruit appears.",
  "Golden Shower is the national flower of Thailand.",
  "Periwinkle is believed to bring good luck often.",
  "Balsam pods burst open when gently touched.",
  "Coconut flowers bless new beginnings and journeys.",
  "Moringa flowers are rich in antioxidants and nutrients.",
  "Tuberose fragrance is used in luxury perfumes.",
  "Lantana changes color as it matures gracefully.",
  "Sunflowers can grow up to 12 feet tall in optimal conditions.",
  "Wild Ginger flowers are pollinated by ants and beetles."
];

function loadFlowers() {
  const grid = document.getElementById("flowerGrid");
  const loadingContainer = document.getElementById("loadingContainer");
  
  if (!grid) return;

  // Show loading spinner
  loadingContainer.style.display = "flex";
  grid.innerHTML = "";
  
  // Simulate loading delay for UX purposes
  setTimeout(() => {
    flowers.forEach((flower, i) => {
      const item = document.createElement("div");
      item.className = "flower-item";
      item.dataset.tags = flower.tags.join(" ");
      
      const img = new Image(); // Preload image
      img.loading = "lazy";
      img.alt = flower.name;
      img.className = "flower-image";
      
      // Debugging wrapper
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "image-wrapper";
      imgWrapper.innerHTML = `
        <div class="debug-info" style="display:none">
          Path: ${flower.imgSrc}<br>
          Status: <span class="status">Loading...</span>
        </div>
      `;

      img.onload = function() {
        this.dataset.loaded = "true";
        imgWrapper.querySelector(".status").textContent = "Loaded";
      };
      
      img.onerror = function() {
        console.error("Failed to load:", this.src);
        imgWrapper.querySelector(".status").textContent = "Failed";
        // Fallback to SVG with error info
        this.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect width='100' height='100' fill='%23FFE6F0'/>
          <text x='50' y='30' font-size='5' text-anchor='middle'>Failed to load:</text>
          <text x='50' y='50' font-size='3' text-anchor='middle'>${encodeURIComponent(this.src)}</text>
        </svg>`;
      };

      img.src = flower.imgSrc;
      imgWrapper.prepend(img);

      item.append(
        imgWrapper,
        Object.assign(document.createElement("p"), {
          className: "flower-name",
          textContent: flower.name
        }),
        Object.assign(document.createElement("p"), {
          className: "flower-description",
          textContent: flower.description
        })
      );
      
      // Add click event to show flower details
      item.addEventListener("click", () => {
        showFlowerDetails(i);
      });
      
      grid.appendChild(item);
    });
    
    // Hide loading spinner
    loadingContainer.style.display = "none";
  }, 800); // Simulated loading time
}

function showFlowerDetails(index) {
  const flower = flowers[index];
  const popup = document.getElementById("flowerDescriptionPopup");
  
  if (!popup) return;
  
  document.getElementById("popupFlowerName").textContent = flower.name;
  document.getElementById("popupFlowerImage").src = flower.imgSrc;
  document.getElementById("popupFlowerImage").alt = flower.name;
  document.getElementById("flowerDescriptionText").textContent = flower.description;
  
  popup.style.display = "flex";
}

// Enhanced Search & Filter functionality
function setupSearchAndFilters() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("noResultsMessage");
  let currentFilter = "all"; // Default filter

  // Main filtering function
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(".flower-item");
    let visibleCount = 0;

    items.forEach(item => {
      const name = item.querySelector(".flower-name").textContent.toLowerCase();
      const desc = item.querySelector(".flower-description").textContent.toLowerCase();
      const tags = item.dataset.tags || "";
      
      const matchesSearch = searchTerm === "" || 
                          name.includes(searchTerm) || 
                          desc.includes(searchTerm);
      const matchesFilter = currentFilter === "all" || 
                          tags.includes(currentFilter);

      if (matchesSearch && matchesFilter) {
        item.style.display = "block";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });

    noResults.style.display = visibleCount ? "none" : "block";
  }

  // Set up filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      
      // Set new filter and search
      currentFilter = button.dataset.filter;
      performSearch();
    });
  });

  // Set up search events
  searchInput.addEventListener("input", performSearch);
  searchButton.addEventListener("click", performSearch);

  // Initialize with all flowers showing
  performSearch();
}

// Call this in your DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  setupSearchAndFilters();
  // ... rest of your initialization code
});

// Set the "Flower of the Week"
function setFlowerOfTheWeek() {
  const flower = flowers[Math.floor(Math.random() * flowers.length)];
  document.getElementById("bloomNameTop").textContent = flower.name;
}

// Enhanced Wisdom Carousel Function
function rotateWisdom() {
  const cards = document.querySelectorAll('.wisdom-card');
  const dots = document.querySelectorAll('.wisdom-dot');
  let currentIndex = 0;
  let rotationInterval;

  function showCard(index) {
    // Remove active classes
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active classes to current card/dot
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function startRotation() {
    rotationInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % cards.length;
      showCard(nextIndex);
    }, 5000); // Rotate every 5 seconds
  }

  // Dot click handlers
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(rotationInterval); // Pause auto-rotation
      showCard(parseInt(dot.dataset.index));
      startRotation(); // Restart rotation
    });
  });

  // Initialize
  showCard(0);
  startRotation();

  // Optional: Pause on hover
  const carouselContainer = document.querySelector('.wisdom-cards');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(rotationInterval);
    });
    carouselContainer.addEventListener('mouseleave', startRotation);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', rotateWisdom);

// Back to top button
function setupBackToTop() {
  const backBtn = document.getElementById("backToTopBtn");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backBtn.style.display = "block";
    } else {
      backBtn.style.display = "none";
    }
  });
  
  backBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  // Initialize slideshow
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Read more button
  document.getElementById("readMoreBtn").addEventListener("click", () => {
    const extras = document.querySelectorAll(".extra-about");
    extras.forEach(p => p.classList.toggle("hidden"));

    const btn = document.getElementById("readMoreBtn");
    if (btn.textContent === "View More") {
      btn.textContent = "View Less";
    } else {
      btn.textContent = "View More";
    }
  });

  // Set initial content
  setFlowerOfTheWeek();
  loadFlowers();
  setupSearch();
  rotateWisdom();
  setupBackToTop();

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    const sticky = document.getElementById("stickyHeader");
    if (window.scrollY > 100) {
      sticky.classList.add("visible");
    } else {
      sticky.classList.remove("visible");
    }
  });

  // Pause slideshow when not visible
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(slideInterval);
    } else {
      slideInterval = setInterval(nextSlide, 5000);
    }
  });
  
  // Close popup functionality
  document.getElementById("closeFlowerDescriptionBtn").addEventListener("click", () => {
    document.getElementById("flowerDescriptionPopup").style.display = "none";
  });
});

// Slideshow logic (existing)
let currentSlide = 0;
let slides, dots;
let slideInterval;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (dots[i]) dots[i].classList.remove("active");
  });
  
  slides[index].classList.add("active");
  if (dots[index]) dots[index].classList.add("active");
  currentSlide = index;
}

function setSlide(index) {
  clearInterval(slideInterval);
  showSlide(index);
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.createElement('button');
  menuToggle.className = 'mobile-menu-toggle';
  menuToggle.innerHTML = '☰';
  document.querySelector('.sticky-header').appendChild(menuToggle);
  
  menuToggle.addEventListener('click', () => {
    document.querySelector('.sticky-right').classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isMenu = e.target.closest('.sticky-right');
    const isToggle = e.target.closest('.mobile-menu-toggle');
    
    if (!isMenu && !isToggle && document.querySelector('.sticky-right.show')) {
      document.querySelector('.sticky-right').classList.remove('show');
    }
  });

  // Existing initialization code remains same
  // ...
});

// EXISTING JS CODE REMAINS EXACTLY THE SAME
// Only added mobile menu functionality above
