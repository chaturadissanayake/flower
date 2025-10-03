// ===== DATA =====
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/JPEG/1_Jasmine.jpg", description: "The scent of a quiet dawn; a whisper of purity and grace.", tags: ["fragrant", "symbolism", "love", "peace"] },
  { name: "Lotus", imgSrc: "Assets/Flowers/JPEG/2_Lotus.jpg", description: "Rising from water to meet the sun—a symbol of the soul's journey.", tags: ["symbolism", "native", "peace", "strength"] },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/JPEG/3_Hibiscus.jpg", description: "A fleeting, vibrant bloom that speaks of passionate, delicate beauty.", tags: ["symbolism", "love", "joy"] },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/JPEG/4_Bougainvillea.jpg", description: "A resilient cascade of color, finding joy in the harshest sun.", tags: ["native", "joy", "strength"] },
  { name: "Plumeria", imgSrc: "Assets/Flowers/JPEG/5_Plumeria.jpg", description: "Soft petals holding the fragrance of a tropical evening.", tags: ["fragrant", "love", "peace"] },
  { name: "Water Lily", imgSrc: "Assets/Flowers/JPEG/6_WaterLily.jpg", description: "A star floating on a still pond, representing peace and purity.", tags: ["symbolism", "native", "peace"] },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/JPEG/7_CoconutFlower.jpg", description: "The humble heart of the giving tree, a promise of life.", tags: ["native", "strength"] },
  { name: "Orchid", imgSrc: "Assets/Flowers/JPEG/8_Orchid.jpg", description: "An elegant and mysterious bloom of rare, silent beauty.", tags: ["rare", "love"] },
  { name: "Balsam", imgSrc: "Assets/Flowers/JPEG/9_Balsam.jpg", description: "A delicate touch of kindness, adding subtle love to any garden.", tags: ["native", "love"] },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/JPEG/10_CinnamonFlower.jpg", description: "A rare, spicy-sweet scent that evokes warmth and comfort.", tags: ["rare", "native", "joy"] },
  { name: "Ixora", imgSrc: "Assets/Flowers/JPEG/11_Ixora.jpg", description: "Fiery clusters that burn with devotion and passionate admiration.", tags: ["symbolism", "native", "love", "strength"] },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/JPEG/12_Periwinkle.jpg", description: "A quiet blessing for good fortune and enduring friendship.", tags: ["symbolism", "peace"] },
  { name: "Plumeria (White)", imgSrc: "Assets/Flowers/JPEG/13_Plumeria.jpg", description: "A symbol of new beginnings and pure spiritual devotion.", tags: ["fragrant", "symbolism", "peace", "love"] },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/JPEG/14_Karthigaipoo.jpg", description: "A sacred flame of glory, representing divine blessings.", tags: ["symbolism", "native", "strength"] },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/JPEG/15_Poinsettia.jpg", description: "The cheerful star of winter, a sign of celebration and good cheer.", tags: ["symbolism", "joy"] },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/JPEG/16_WildGinger.jpg", description: "An exotic treasure hidden beneath lush, tropical leaves.", tags: ["rare", "native"] },
  { name: "Sunflower", imgSrc: "Assets/Flowers/JPEG/17_Sunflower.jpg", description: "A bright, joyful face that forever follows the light.", tags: ["symbolism", "joy", "strength"] },
  { name: "Tuberose", imgSrc: "Assets/Flowers/JPEG/18_Tuberose.jpg", description: "An intoxicating scent of dangerous pleasure and sensual beauty.", tags: ["fragrant", "rare", "love"] },
  { name: "Lantana", imgSrc: "Assets/Flowers/JPEG/19_Lantana.jpg", description: "Clusters of ever-changing color, a dance of transformation.", tags: ["native", "joy"] },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/JPEG/20_GoldenShower.jpg", description: "A cascade of gold, symbolizing abundance and the joy of spring.", tags: ["symbolism", "native", "joy"] },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/JPEG/21_MoringaFlowers.jpg", description: "Delicate blossoms from the 'miracle tree,' a gift of healing.", tags: ["native", "symbolism", "strength", "peace"] }
];

const flowerFacts = [
  "Jasmine symbolizes purity and grace, with a sweet fragrance that promotes relaxation.",
  "Lotus blooms from the mud, untainted, representing spiritual enlightenment and resilience.",
  "Hibiscus tea cools the body and warms the heart, often symbolizing delicate beauty and passion.",
  "Ixora, with its vibrant clusters, is offered in temples as a symbol of devotion.",
  "Plumeria often symbolizes new beginnings and love, with a fragrance that intensifies at night.",
  "Orchids are symbols of rare beauty, luxury, and strength, associated with elegance and refinement."
];

const reflections = [
  { quote: "The earth laughs in flowers.", author: "Ralph Waldo Emerson" },
  { quote: "To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn" },
  { quote: "A flower does not think of competing with the flower next to it. It just blooms.", author: "Zen Shin" },
  { quote: "Where flowers bloom, so does hope.", author: "Lady Bird Johnson" }
];

// ===== INITIALIZER =====
// Main function to run when the DOM is ready
function main() {
    // Immediately check if the page is loaded from a share link
    if (handleSharedLink()) {
        // If so, hide the preloader quickly to show the shared card
        hidePreloader();
    } else {
        // For a normal visit, set up the preloader to hide after all content is loaded
        setupPreloader();
    }

    // Initialize all site components
    setupThemeToggle();
    setupPopups();
    setupSlideshow();
    setupReadMore();
    setupFlowerGrid();
    setupSearchAndFilters();
    setupHeaderBehavior();
    setupBackToTop();
    setupMobileMenu();
    setupYouTubeAudio();
    setupScrollAnimations();
    setDailyBloom();
    
    // Setup carousels
    setupCarousel({
        containerSelector: '.wisdom-cards',
        dotsSelector: '.wisdom-dots',
        dotClassName: 'wisdom-dot',
        items: flowerFacts,
        cardGenerator: (fact) => `<div class="wisdom-card"><p class="wisdom-text">"${fact}"</p></div>`,
        intervalTime: 5000
    });

    setupCarousel({
        containerSelector: '.reflections-container',
        dotsSelector: '.reflections-dots',
        dotClassName: 'reflection-dot',
        items: reflections,
        cardGenerator: (item) => `
            <div class="reflection-card">
                <p class="reflection-text">"${item.quote}"</p>
                <span class="reflection-author">— ${item.author}</span>
            </div>`,
        intervalTime: 6000
    });
}

// Run the main function once the DOM is fully parsed
document.addEventListener("DOMContentLoaded", main);


// ===== PRELOADER LOGIC =====
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        // Remove from DOM after transition for performance
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
}

function setupPreloader() {
    // Fallback: hide preloader after 3 seconds max, in case 'load' event fails
    const fallbackTimeout = setTimeout(hidePreloader, 3000);
    
    window.addEventListener('load', () => {
        clearTimeout(fallbackTimeout); // Clear the fallback
        hidePreloader(); // Hide when all resources (images, etc.) are loaded
    });
}


// ===== COMPONENT SETUP FUNCTIONS =====

function setupSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    if (slides.length === 0 || !dotsContainer) return;

    let slideInterval;
    
    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => setSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }
    
    function setSlide(index) {
        showSlide(index);
        startSlideshow();
    }

    function startSlideshow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    }

    document.addEventListener("visibilitychange", () => {
        document.hidden ? clearInterval(slideInterval) : startSlideshow();
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
        readMoreBtn.textContent = extraContent.classList.contains("hidden") ? "View More" : "View Less";
    });
}

function setupFlowerGrid() {
    const grid = document.getElementById("flowerGrid");
    const loadingContainer = document.getElementById("loadingContainer");
    if (!grid || !loadingContainer) return;

    grid.innerHTML = "";
    loadingContainer.style.display = "flex";

    // Create a document fragment to build the grid off-screen for better performance
    const fragment = document.createDocumentFragment();
    flowers.forEach((flower, index) => {
        const item = document.createElement("div");
        item.className = "flower-item";
        item.dataset.tags = flower.tags.join(" ");
        item.dataset.index = index;
        item.innerHTML = `
            <img src="${flower.imgSrc}" alt="${flower.name}" class="flower-image" loading="lazy">
            <div class="flower-item-content">
                <p class="flower-name">${flower.name}</p>
                <p class="flower-description">${flower.description}</p>
            </div>
        `;
        fragment.appendChild(item);
    });

    // Use requestAnimationFrame to ensure the browser is ready for the update
    requestAnimationFrame(() => {
        grid.appendChild(fragment);
        loadingContainer.style.display = "none";
    });

    // Event Delegation: Listen for clicks on the grid, not on each item
    grid.addEventListener("click", (e) => {
        const flowerItem = e.target.closest(".flower-item");
        if (flowerItem && flowerItem.dataset.index) {
            showCreatePopup(parseInt(flowerItem.dataset.index));
        }
    });
}

function setupSearchAndFilters() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("noResultsMessage");
    if(!searchInput || !searchButton || !filterButtons.length || !noResults) return;

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

function setupCarousel({containerSelector, dotsSelector, dotClassName, items, cardGenerator, intervalTime}) {
    const container = document.querySelector(containerSelector);
    const dotsContainer = document.querySelector(dotsSelector);
    if (!container || !dotsContainer) return;

    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    items.forEach((item, index) => {
        container.innerHTML += cardGenerator(item, index);
        dotsContainer.innerHTML += `<button class="${dotClassName}" data-index="${index}" aria-label="Go to item ${index + 1}"></button>`;
    });

    const cards = container.children;
    const dots = dotsContainer.children;
    let currentIndex = 0;
    let rotationInterval;

    function showCard(index) {
        if (!cards[index]) return;
        currentIndex = index;
        Array.from(cards).forEach((card, i) => card.classList.toggle('active', i === index));
        Array.from(dots).forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    function startRotation() {
        clearInterval(rotationInterval);
        rotationInterval = setInterval(() => showCard((currentIndex + 1) % cards.length), intervalTime);
    }
    
    Array.from(dots).forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            showCard(index);
            startRotation();
        });
    });
    
    container.addEventListener('mouseenter', () => clearInterval(rotationInterval));
    container.addEventListener('mouseleave', startRotation);

    showCard(0);
    startRotation();
}

function setupHeaderBehavior() {
    const stickyHeader = document.getElementById("stickyHeader");
    if (!stickyHeader) return;
    const scrollObserver = new IntersectionObserver(
        ([e]) => stickyHeader.classList.toggle("scrolled", e.intersectionRatio < 1),
        { threshold: [1] }
    );
    scrollObserver.observe(stickyHeader);
}

function setupBackToTop() {
    const backBtn = document.getElementById("backToTopBtn");
    if (!backBtn) return;
    window.addEventListener("scroll", () => {
        backBtn.classList.toggle("visible", window.scrollY > 300);
    }, { passive: true });
    backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupMobileMenu() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const menu = document.querySelector(".sticky-right");
    if (!menuToggle || !menu) return;

    const closeMenu = () => {
        menu.classList.remove('show');
        document.body.classList.remove('mobile-menu-open');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', e => {
        e.stopPropagation();
        const isShown = menu.classList.toggle('show');
        document.body.classList.toggle('mobile-menu-open', isShown);
        menuToggle.textContent = isShown ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', isShown);
    });
    
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', e => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && menu.classList.contains('show')) {
            closeMenu();
        }
    });
}

function setupYouTubeAudio() {
    const audioToggle = document.getElementById('audioToggle');
    if (!audioToggle) return;

    let player;
    let isPlayerReady = false;
    let isPlaying = false;

    // Load YouTube IFrame API if not already loaded
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // This global function is called by the YouTube API when it's ready
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtubePlayer', {
            height: '0',
            width: '0',
            videoId: 'n-Jl71LY5tc', // The video ID for the background music
            playerVars: {
                'autoplay': 0, 'loop': 1, 'playlist': 'n-Jl71LY5tc',
                'controls': 0, 'modestbranding': 1, 'showinfo': 0, 'rel': 0
            },
            events: {
                'onReady': () => { isPlayerReady = true; player.setVolume(20); },
                'onStateChange': (event) => {
                    if (event.data === YT.PlayerState.ENDED) player.playVideo(); // Loop manually
                }
            }
        });
    };

    audioToggle.addEventListener('click', () => {
        if (!isPlayerReady) {
            console.warn("YouTube player is not ready yet.");
            return;
        }
        isPlaying = !isPlaying;
        if (isPlaying) {
            player.playVideo();
            audioToggle.textContent = '❚❚';
            audioToggle.classList.add('playing');
        } else {
            player.pauseVideo();
            audioToggle.textContent = '▶';
            audioToggle.classList.remove('playing');
        }
    });
}

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-anim]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
}

function setDailyBloom() {
    const bloomNameEl = document.getElementById("bloomNameTop");
    if (!bloomNameEl) return;
    
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const flowerIndex = dayOfYear % flowers.length;
    bloomNameEl.textContent = flowers[flowerIndex].name;
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Apply saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

    themeToggle.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}


// ===== POPUP & SHARING LOGIC =====

let currentFlowerIndex = null;
let activePopup = null;
let lastFocusedElement = null;

function setupPopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        const closeBtn = popup.querySelector('.close-btn');
        if(closeBtn) closeBtn.addEventListener('click', () => closePopup(popup));
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup(popup);
        });
    });
    
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && activePopup) {
            closePopup(activePopup);
        }
    });

    const createShareLinkBtn = document.getElementById('createShareLinkBtn');
    if(createShareLinkBtn) createShareLinkBtn.addEventListener('click', createAndShowShareLink);
    
    const createNewBtn = document.getElementById('createNewBtn');
    if(createNewBtn) createNewBtn.addEventListener('click', () => {
      window.location.href = window.location.pathname; // Reload to a clean state
    });
}

function openPopup(popup) {
    lastFocusedElement = document.activeElement; // Save current focus
    popup.classList.add("show");
    activePopup = popup;

    const focusableElements = 'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusable = popup.querySelector(focusableElements);
    if (firstFocusable) firstFocusable.focus();
}

function closePopup(popup) {
    popup.classList.remove("show");
    activePopup = null;
    if (lastFocusedElement) lastFocusedElement.focus(); // Restore focus
}

function showCreatePopup(index) {
    currentFlowerIndex = index;
    const flower = flowers[index];
    const popup = document.getElementById("createPopup");
    if (!popup || !flower) return;

    popup.querySelector("#createFlowerName").textContent = flower.name;
    const flowerImage = popup.querySelector("#createFlowerImage");
    flowerImage.src = flower.imgSrc;
    flowerImage.alt = flower.name;
    popup.querySelector("#createFlowerDescription").textContent = flower.description;

    popup.querySelector('#shareTo').value = '';
    popup.querySelector('#shareMessage').value = '';
    popup.querySelector('#shareFrom').value = '';

    openPopup(popup);
}

function createAndShowShareLink() {
    if (currentFlowerIndex === null) return;
    const flower = flowers[currentFlowerIndex];
    const to = document.getElementById('shareTo').value;
    const message = document.getElementById('shareMessage').value;
    const from = document.getElementById('shareFrom').value;

    const baseURL = window.location.href.split('?')[0];
    const params = new URLSearchParams({
        flower: flower.name, to, msg: message, from
    });
    const shareLink = `${baseURL}?${params.toString()}`;
    
    closePopup(document.getElementById('createPopup'));
    showShareView(flower, to, message, from, shareLink);
}

function showShareView(flower, to, msg, from, link) {
    const popup = document.getElementById('shareViewPopup');
    if (!popup) return;

    popup.querySelector('#shareViewTo').textContent = to || 'You';
    popup.querySelector('#shareViewFrom').textContent = from || 'A secret admirer';
    popup.querySelector('#shareViewMessage').textContent = `"${msg || 'Wishing you a beautiful day.'}"`;
    popup.querySelector('#shareViewFlowerName').textContent = flower.name;
    const shareImage = popup.querySelector('#shareViewImage');
    shareImage.src = flower.imgSrc;
    shareImage.alt = flower.name;

    const shareContainer = popup.querySelector('.share-buttons-container');
    const encodedLink = encodeURIComponent(link);
    const text = `A special flower for ${to || 'you'} from ${from || 'a friend'}!`;
    const encodedText = encodeURIComponent(text);
    
    shareContainer.innerHTML = `
      <a href="https://api.whatsapp.com/send?text=${encodedText}%20${encodedLink}" target="_blank" rel="noopener noreferrer" class="share-link-btn whatsapp-share-btn" aria-label="Share on WhatsApp"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.91-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.39 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.23.86 5.82 2.45s2.45 3.62 2.45 5.82c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.48-1.38-1.73s-.02-.38.11-.51c.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42-.14 0-.3 0-.46.01-.16 0-.41.06-.62.31-.22.25-.83.81-.83 1.98s.85 2.3 1 2.45c.12.17 1.67 2.56 4.05 3.58.59.25 1.05.4 1.41.51.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.28z"/></svg></a>
      <a href="https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedLink}" target="_blank" rel="noopener noreferrer" class="share-link-btn twitter-share-btn" aria-label="Share on Twitter"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.59-2.46.7a4.22 4.22 0 001.85-2.33 8.36 8.36 0 01-2.66 1.02 4.18 4.18 0 00-7.13 3.81 11.87 11.87 0 01-8.61-4.37 4.18 4.18 0 001.29 5.58 4.16 4.16 0 01-1.89-.52v.05a4.18 4.18 0 003.35 4.1 4.18 4.18 0 01-1.88.07 4.19 4.19 0 003.91 2.91A8.38 8.38 0 012 19.54a11.81 11.81 0 006.29 1.84c7.55 0 11.69-6.26 11.69-11.69 0-.18 0-.35-.01-.53A8.36 8.36 0 0022.46 6z"/></svg></a>
    `;

    openPopup(popup);
}

function handleSharedLink() {
    const params = new URLSearchParams(window.location.search);
    const flowerName = params.get('flower');
    if (!flowerName) return false;

    const to = params.get('to');
    const msg = params.get('msg');
    const from = params.get('from');
    const flower = flowers.find(f => f.name.toLowerCase() === flowerName.toLowerCase());

    if (flower) {
        // Use a small delay to ensure the DOM is ready for the popup
        setTimeout(() => showShareView(flower, to, msg, from, window.location.href), 100);
        return true;
    }
    return false;
}
