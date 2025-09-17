// ===== DATA =====
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/JPEG/1_Jasmine.jpg", description: "A symbol of purity and sweetness, Jasmine carries the scent of serene mornings and quiet affection.", tags: ["fragrant", "symbolism"] },
  { name: "Lotus", imgSrc: "Assets/Flowers/JPEG/2_Lotus.jpg", description: "Rising from still waters, the Lotus reflects spiritual grace and the courage to bloom against odds.", tags: ["symbolism", "native"] },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/JPEG/3_Hibiscus.jpg", description: "Bold and vibrant, Hibiscus blossoms represent strength, passion, and heartfelt vitality.", tags: ["symbolism"] },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/JPEG/4_Bougainvillea.jpg", description: "Resilient and radiant, Bougainvillea reminds us of joy that blooms even in the harshest seasons.", tags: ["native"] },
  { name: "Plumeria", imgSrc: "Assets/Flowers/JPEG/5_Plumeria.jpg", description: "Soft petals and fragrant whispers - Plumeria is the gentle voice of affection and charm.", tags: ["fragrant"] },
  { name: "Water Lily", imgSrc: "Assets/Flowers/JPEG/6_WaterLily.jpg", description: "Calm and rooted, Water Lily floats with grace - a symbol of peace and inner purity.", tags: ["symbolism", "native"] },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/JPEG/7_CoconutFlower.jpg", description: "The soul of the tropical tree - Coconut flowers are life, strength, and gentle nourishment.", tags: ["native"] },
  { name: "Orchid", imgSrc: "Assets/Flowers/JPEG/8_Orchid.jpg", description: "Elegant and mysterious, Orchid flowers speak of beauty, luxury, and silent strength.", tags: ["rare"] },
  { name: "Balsam", imgSrc: "Assets/Flowers/JPEG/9_Balsam.jpg", description: "Delicate yet resilient, Balsam adds a brush of kindness and subtle love to any garden.", tags: ["native"] },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/JPEG/10_CinnamonFlower.jpg", description: "Spicy-sweet and rare, Cinnamon blooms evoke warmth, comfort, and cultural pride.", tags: ["rare", "native"] },
  { name: "Ixora", imgSrc: "Assets/Flowers/JPEG/11_Ixora.jpg", description: "With fiery clusters, Ixora reflects devotion, admiration, and the glow of passion.", tags: ["symbolism", "native"] },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/JPEG/12_Periwinkle.jpg", description: "Periwinkle brings quiet blessings - a wish for good luck and enduring friendship.", tags: ["symbolism"] },
  { name: "Plumeria (White)", imgSrc: "Assets/Flowers/JPEG/13_Plumeria.jpg", description: "The white variant of Plumeria symbolizes new beginnings and spiritual devotion.", tags: ["fragrant", "symbolism"] },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/JPEG/14_Karthigaipoo.jpg", description: "Sacred in Hindu rituals, Karthigapoo represents purity and divine blessings.", tags: ["symbolism", "native"] },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/JPEG/15_Poinsettia.jpg", description: "Known as the Christmas flower, its red leaves symbolize celebration and good cheer.", tags: ["symbolism"] },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/JPEG/16_WildGinger.jpg", description: "Exotic and tropical, Wild Ginger flowers hide beneath lush foliage like hidden treasures.", tags: ["rare", "native"] },
  { name: "Sunflower", imgSrc: "Assets/Flowers/JPEG/17_Sunflower.jpg", description: "Bright and cheerful, Sunflowers turn their faces to follow the sun's path across the sky.", tags: ["symbolism"] },
  { name: "Tuberose", imgSrc: "Assets/Flowers/JPEG/18_Tuberose.jpg", description: "Intoxicatingly fragrant, Tuberose symbolizes dangerous pleasure and sensual beauty.", tags: ["fragrant", "rare"] },
  { name: "Lantana", imgSrc: "Assets/Flowers/JPEG/19_Lantana.jpg", description: "Color-changing clusters that attract butterflies, representing transformation and vibrancy.", tags: ["native"] },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/JPEG/20_GoldenShower.jpg", description: "Cascades of golden flowers symbolizing abundance, joy, and the arrival of spring.", tags: ["symbolism", "native"] },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/JPEG/21_MoringaFlowers.jpg", description: "Delicate blossoms of the 'miracle tree', representing nourishment and healing.", tags: ["native", "symbolism"] }
];

const flowerFacts = [
  "Jasmine symbolizes purity and grace in many traditions, with a sweet fragrance that promotes relaxation.",
  "Lotus blooms from the mud, untainted and divine, representing spiritual enlightenment and resilience.",
  "Hibiscus tea cools the body and warms the heart, often symbolizing delicate beauty and passion.",
  "Ixora, with its vibrant clusters, is offered in temples across Sri Lanka as a symbol of devotion.",
  "Plumeria often symbolizes new beginnings and love, with a fragrance that intensifies at night.",
  "Orchids are symbols of rare beauty, luxury, and strength, associated with elegance and refinement."
];


// ===== SINGLE DOMContentLoaded INITIALIZER =====
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all modules
    setupSlideshow();
    setupReadMore();
    setupFlowerGrid();
    setupSearchAndFilters();
    setupWisdomCarousel();
    setupHeaderBehavior();
    setupBackToTop();
    setupMobileMenu();
    setupPopup();

    // Set initial dynamic content
    setFlowerOfTheWeek();
});


// ===== MODULES =====

function setupSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let slideInterval;

    if (slides.length === 0) return;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length; // Loop around

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function startSlideshow() {
        clearInterval(slideInterval); // Prevent multiple intervals
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Expose setSlide to the global scope so inline onclick can find it
    window.setSlide = (index) => {
        showSlide(index);
        startSlideshow(); // Reset interval on manual change
    };
    
    // Pause slideshow when tab is not visible
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clearInterval(slideInterval);
        } else {
            startSlideshow();
        }
    });

    showSlide(0);
    startSlideshow();
}

function setupReadMore() {
    const readMoreBtn = document.getElementById("readMoreBtn");
    if (!readMoreBtn) return;

    readMoreBtn.addEventListener("click", () => {
        const extraContent = document.querySelector(".extra-about");
        extraContent.classList.toggle("hidden");

        const isHidden = extraContent.classList.contains("hidden");
        readMoreBtn.textContent = isHidden ? "View More" : "View Less";
    });
}

function setupFlowerGrid() {
    const grid = document.getElementById("flowerGrid");
    const loadingContainer = document.getElementById("loadingContainer");

    if (!grid || !loadingContainer) return;

    grid.innerHTML = "";
    loadingContainer.style.display = "flex";

    setTimeout(() => {
        flowers.forEach((flower, index) => {
            const item = document.createElement("div");
            item.className = "flower-item";
            item.dataset.tags = flower.tags.join(" ");
            item.innerHTML = `
                <img src="${flower.imgSrc}" alt="${flower.name}" class="flower-image" loading="lazy">
                <p class="flower-name">${flower.name}</p>
                <p class="flower-description">${flower.description}</p>
            `;
            item.addEventListener("click", () => showFlowerDetails(index));
            grid.appendChild(item);
        });
        loadingContainer.style.display = "none";
    }, 800);
}

function showFlowerDetails(index) {
    const flower = flowers[index];
    const popup = document.getElementById("flowerDescriptionPopup");
    
    if (!popup || !flower) return;

    document.getElementById("popupFlowerName").textContent = flower.name;
    document.getElementById("popupFlowerImage").src = flower.imgSrc;
    document.getElementById("popupFlowerImage").alt = flower.name;
    document.getElementById("flowerDescriptionText").textContent = flower.description;

    popup.classList.add("show");
}

function setupSearchAndFilters() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("noResultsMessage");
    let currentFilter = "all";

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const items = document.querySelectorAll(".flower-item");
        let visibleCount = 0;

        items.forEach(item => {
            const name = item.querySelector(".flower-name").textContent.toLowerCase();
            const tags = item.dataset.tags || "";
            
            const matchesSearch = searchTerm === "" || name.includes(searchTerm);
            const matchesFilter = currentFilter === "all" || tags.includes(currentFilter);

            const isVisible = matchesSearch && matchesFilter;
            item.style.display = isVisible ? "block" : "none";
            if (isVisible) visibleCount++;
        });

        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentFilter = button.dataset.filter;
            performSearch();
        });
    });

    searchInput.addEventListener("input", performSearch);
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        performSearch();
    });
}

function setupWisdomCarousel() {
    const cardsContainer = document.querySelector('.wisdom-cards');
    const dotsContainer = document.querySelector('.wisdom-dots');
    if (!cardsContainer || !dotsContainer) return;

    // Populate cards and dots from the facts array
    flowerFacts.forEach((fact, index) => {
        cardsContainer.innerHTML += `<div class="wisdom-card"><p class="wisdom-text">${fact}</p></div>`;
        dotsContainer.innerHTML += `<span class="wisdom-dot" data-index="${index}"></span>`;
    });

    const cards = cardsContainer.querySelectorAll('.wisdom-card');
    const dots = dotsContainer.querySelectorAll('.wisdom-dot');
    let currentIndex = 0;
    let rotationInterval;

    function showCard(index) {
        currentIndex = index;
        cards.forEach((card, i) => card.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    function startRotation() {
        clearInterval(rotationInterval);
        rotationInterval = setInterval(() => {
            showCard((currentIndex + 1) % cards.length);
        }, 5000);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showCard(parseInt(dot.dataset.index));
            startRotation();
        });
    });

    showCard(0);
    startRotation();

    cardsContainer.addEventListener('mouseenter', () => clearInterval(rotationInterval));
    cardsContainer.addEventListener('mouseleave', startRotation);
}

function setupHeaderBehavior() {
    const stickyHeader = document.getElementById("stickyHeader");
    if (!stickyHeader) return;
    
    window.addEventListener("scroll", () => {
        stickyHeader.classList.toggle("visible", window.scrollY > 50);
    }, { passive: true });
}

function setupBackToTop() {
    const backBtn = document.getElementById("backToTopBtn");
    if (!backBtn) return;

    window.addEventListener("scroll", () => {
        backBtn.classList.toggle("visible", window.scrollY > 300);
    }, { passive: true });

    backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function setupMobileMenu() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const menu = document.querySelector(".sticky-right");
    if (!menuToggle || !menu) return;

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });
    
    // Close menu when clicking a link inside it
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('show'));
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
}

function setupPopup() {
    const popup = document.getElementById("flowerDescriptionPopup");
    const closeBtn = document.getElementById("closeFlowerDescriptionBtn");

    if (!popup || !closeBtn) return;

    function closePopup() {
        popup.classList.remove("show");
    }

    closeBtn.addEventListener("click", closePopup);
    
    // Close on clicking the overlay
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    // Close with the Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && popup.classList.contains("show")) {
            closePopup();
        }
    });
}

function setFlowerOfTheWeek() {
    const bloomNameEl = document.getElementById("bloomNameTop");
    if (bloomNameEl) {
        const flower = flowers[Math.floor(Math.random() * flowers.length)];
        bloomNameEl.textContent = flower.name;
    }
}
