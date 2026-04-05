// ===== DATA =====
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/JPEG/1_Jasmine.webp", description: "The scent of a quiet dawn, a whisper of purity and grace.", tags: ["fragrant", "symbolism", "love", "peace"] },
  { name: "Lotus", imgSrc: "Assets/Flowers/JPEG/2_Lotus.webp", description: "Rising from water to meet the sun, a symbol of the soul's journey.", tags: ["symbolism", "native", "peace", "strength"] },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/JPEG/3_Hibiscus.webp", description: "A fleeting, vibrant bloom that speaks of passionate, delicate beauty.", tags: ["symbolism", "love", "joy"] },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/JPEG/4_Bougainvillea.webp", description: "A resilient cascade of color, finding joy in the harshest sun.", tags: ["native", "joy", "strength"] },
  { name: "Plumeria (Araliya)", imgSrc: "Assets/Flowers/JPEG/5_Plumeria.webp", description: "Soft petals holding the fragrance of a tropical evening.", tags: ["fragrant", "love", "peace"] },
  { name: "Water Lily (Nil Mahanel)", imgSrc: "Assets/Flowers/JPEG/6_WaterLily.webp", description: "A star floating on a still pond, representing peace and purity.", tags: ["symbolism", "native", "peace"] },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/JPEG/7_CoconutFlower.webp", description: "The humble heart of the giving tree, a promise of life.", tags: ["native", "strength"] },
  { name: "Orchid", imgSrc: "Assets/Flowers/JPEG/8_Orchid.webp", description: "An elegant and mysterious bloom of rare, silent beauty.", tags: ["rare", "love"] },
  { name: "Balsam", imgSrc: "Assets/Flowers/JPEG/9_Balsam.webp", description: "A delicate touch of kindness, adding subtle love to any garden.", tags: ["native", "love"] },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/JPEG/10_CinnamonFlower.webp", description: "A rare, spicy-sweet scent that evokes warmth and comfort.", tags: ["rare", "native", "joy"] },
  { name: "Ixora", imgSrc: "Assets/Flowers/JPEG/11_Ixora.webp", description: "Fiery clusters that burn with devotion and passionate admiration.", tags: ["symbolism", "native", "love", "strength"] },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/JPEG/12_Periwinkle.webp", description: "A quiet blessing for good fortune and enduring friendship.", tags: ["symbolism", "peace"] },
  { name: "Plumeria (White)", imgSrc: "Assets/Flowers/JPEG/13_Plumeria.webp", description: "A symbol of new beginnings and pure spiritual devotion.", tags: ["fragrant", "symbolism", "peace", "love"] },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/JPEG/14_Karthigaipoo.webp", description: "A sacred flame of glory, representing divine blessings.", tags: ["symbolism", "native", "strength"] },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/JPEG/15_Poinsettia.webp", description: "The cheerful star of winter, a sign of celebration and good cheer.", tags: ["symbolism", "joy"] },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/JPEG/16_WildGinger.webp", description: "An exotic treasure hidden beneath lush, tropical leaves.", tags: ["rare", "native"] },
  { name: "Sunflower", imgSrc: "Assets/Flowers/JPEG/17_Sunflower.webp", description: "A bright, joyful face that forever follows the light.", tags: ["symbolism", "joy", "strength"] },
  { name: "Tuberose", imgSrc: "Assets/Flowers/JPEG/18_Tuberose.webp", description: "An intoxicating scent of dangerous pleasure and sensual beauty.", tags: ["fragrant", "rare", "love"] },
  { name: "Lantana", imgSrc: "Assets/Flowers/JPEG/19_Lantana.webp", description: "Clusters of ever-changing color, a dance of transformation.", tags: ["native", "joy"] },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/JPEG/20_GoldenShower.webp", description: "A cascade of gold, symbolizing abundance and the joy of spring.", tags: ["symbolism", "native", "joy"] },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/JPEG/21_MoringaFlowers.webp", description: "Delicate blossoms from the 'miracle tree,' a gift of healing.", tags: ["native", "symbolism", "strength", "peace"] }
];

const whispers = [
  { text: "Jasmine symbolizes purity and grace, with a sweet fragrance that promotes relaxation.", author: "Botanical Lore" },
  { text: "To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn" },
  { text: "Lotus blooms from the mud, untainted, representing spiritual enlightenment and resilience.", author: "Eastern Philosophy" },
  { text: "A flower does not think of competing with the flower next to it. It just blooms.", author: "Zen Shin" },
  { text: "Plumeria often symbolizes new beginnings and love, with a fragrance that intensifies at night.", author: "Tropical Wisdom" },
  { text: "Where flowers bloom, so does hope.", author: "Lady Bird Johnson" }
];

// ===== INITIALIZATION & CORE LOGIC =====
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    setupPreloader();
    setupHeaderBehavior();
    setupMobileMenu(); 
    setupScrollAnimations();
    setupSlideshow();
    setupHeroScroll();
    setupReadMoreAccordion();
    setupFlowerGrid(); 
    setupSearchAndFilters();
    setupWhispersCarousel(); 
    setupBackToTop();
    setupAudioSystem();
    setupInteractiveSharePopup(); 
});

function setupPreloader() {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.style.display = 'none', 600);
    });
    setTimeout(() => preloader.classList.add('hidden'), 3000); 
}

function setupHeaderBehavior() {
    const header = document.getElementById("stickyHeader");
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

function setupMobileMenu() {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const menu = document.getElementById("mobileNav");
    const links = document.querySelectorAll('.mobile-link');
    const closeBtn = document.querySelector('.close-mobile-nav');
    const sections = document.querySelectorAll('main section[id], footer[id]');
    
    const toggleMobileMenu = () => {
        menu.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
        updateActiveNav(); 
    };
    
    toggle.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        });
    });
    
    const updateActiveNav = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNav, { passive: true });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    setTimeout(() => {
        document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);
}

function setupHeroScroll() {
    const btn = document.getElementById('heroActionBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            document.getElementById('flower-selection').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function setupSlideshow() {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;
    
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 6000);
}

function setupReadMoreAccordion() {
    const btn = document.getElementById("readMoreBtn");
    const contentWrapper = document.getElementById("extraAbout");
    
    if (btn && contentWrapper) {
        btn.addEventListener("click", () => {
            contentWrapper.classList.toggle("expanded");
            const isExpanded = contentWrapper.classList.contains("expanded");
            btn.querySelector("span").textContent = isExpanded ? "Show less" : "Read the full story";
        });
    }
}

function setupFlowerGrid() {
    const grid = document.getElementById("flowerGrid");
    if (!grid) return;
    
    grid.innerHTML = ""; 
    
    flowers.forEach((flower, index) => {
        const item = document.createElement("button"); 
        item.className = "flower-item fade-up-element"; 
        item.dataset.tags = flower.tags.join(" ").toLowerCase();
        item.dataset.index = index;
        
        item.style.transitionDelay = `${(index % 4) * 0.1}s`;
        
        item.innerHTML = `
            <div class="flower-img-container">
                <img src="${flower.imgSrc}" alt="${flower.name}" draggable="false" oncontextmenu="return false;" onerror="this.src='https://images.unsplash.com/photo-1490750967868-88cb44cb2722?q=80&w=400&auto=format&fit=crop'">
            </div>
            <div class="flower-item-content">
                <h3 class="flower-name">${flower.name}</h3>
                <p class="flower-desc">${flower.description}</p>
            </div>
        `;
        grid.appendChild(item);
    });
    
    setTimeout(() => {
        document.querySelectorAll('.flower-item').forEach(el => el.classList.add('visible'));
    }, 200);
    
    grid.addEventListener("click", (e) => {
        const item = e.target.closest(".flower-item");
        if (item) openInteractivePopup(parseInt(item.dataset.index));
    });
}

function setupSearchAndFilters() {
    const input = document.getElementById("searchInput");
    const filters = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("noResultsMessage");
    let currentFilter = "all";
    
    const filterGrid = () => {
        const term = input.value.toLowerCase().trim();
        let visibleCount = 0;
        
        document.querySelectorAll(".flower-item").forEach(item => {
            const name = item.querySelector(".flower-name").textContent.toLowerCase();
            const tags = item.dataset.tags;
            const matchesSearch = term === "" || name.includes(term) || tags.includes(term);
            const matchesFilter = currentFilter === "all" || tags.includes(currentFilter);
            
            if (matchesSearch && matchesFilter) {
                item.classList.remove("is-hidden");
                visibleCount++;
            } else {
                item.classList.add("is-hidden");
            }
        });
        
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    };
    
    input.addEventListener("input", filterGrid);
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter.toLowerCase();
            filterGrid();
        });
    });
}

function setupWhispersCarousel() {
    const track = document.getElementById('wisdomTrack');
    const dotsBox = document.getElementById('wisdomDots');
    if(!track || !dotsBox) return;
    
    const wisdomData = [...whispers]; 
    
    wisdomData.forEach((item, i) => {
        const slide = document.createElement('div');
        slide.className = `wisdom-slide ${i===0?'active':''}`;
        slide.innerHTML = `<p>"${item.text}"</p><span class="wisdom-author">— ${item.author}</span>`;
        track.appendChild(slide);
        
        const dot = document.createElement('button');
        dot.className = i===0?'active':'';
        dot.dataset.index = i;
        dotsBox.appendChild(dot);
    });
    
    const slides = track.children;
    const dots = dotsBox.children;
    let current = 0;
    
    const goToSlide = (idx) => {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        
        current = idx;
        
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    };
    
    setInterval(() => goToSlide((current + 1) % wisdomData.length), 6000);
    Array.from(dots).forEach(dot => dot.addEventListener('click', (e) => goToSlide(parseInt(e.target.dataset.index))));
}

function setupBackToTop() {
    const btn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.remove("hidden");
        } else {
            btn.classList.add("hidden");
        }
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo(0, 0));
}

function setupAudioSystem() {
    const bgMusic = document.getElementById("bgMusic");
    const btn = document.getElementById("audioToggle");
    const playIcon = btn.querySelector('.icon-play');
    const pauseIcon = btn.querySelector('.icon-pause');
    
    if (!bgMusic || !btn) return;

    let isPlaying = false;
    let hasInteracted = false;

    // Toggle Play/Pause on button click
    const togglePlay = () => {
        if (isPlaying) {
            bgMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            bgMusic.play().then(() => {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }).catch(e => console.log("Audio play blocked by browser. Make sure source URL is valid."));
        }
        isPlaying = !isPlaying;
    };

    btn.addEventListener('click', togglePlay);

    // Modern browsers require a user interaction before allowing audio to auto-play.
    // This listens for the very first click anywhere on the document to start the music.
    document.body.addEventListener('click', () => {
        if (!hasInteracted && !isPlaying && bgMusic.src && bgMusic.src !== window.location.href) {
            hasInteracted = true;
            bgMusic.play().then(() => {
                isPlaying = true;
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }).catch(e => {
                console.log("Autoplay prevented or source not yet set.");
            });
        }
    }, { once: true });
}

// ===== WYSIWYG POSTCARD MODAL LOGIC =====
let currentSelectedFlower = null;

function setupInteractiveSharePopup() {
    const popup = document.getElementById("createPopup");
    const closeBtn = popup.querySelector(".modal-close"); 
    
    const toInput = document.getElementById("pcTo");
    const msgInput = document.getElementById("pcMsg");
    const fromInput = document.getElementById("pcFrom");
    const anonCheck = document.getElementById("anonCheck"); 
    
    const copyBtn = document.getElementById("copyLinkBtn");
    const downloadBtn = document.getElementById("downloadBtn"); 
    
    const closePopup = () => { 
        popup.classList.remove("active"); 
        document.body.classList.remove('mobile-menu-open'); 
    };
    
    closeBtn.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => { if(e.target === popup) closePopup(); });
    
    // Auto-shrink textarea text instead of expanding height
    msgInput.addEventListener('input', function() {
        let currentSize = 1.6; // Starting base font size in rem
        this.style.fontSize = currentSize + 'rem';
        
        // If content overflows the fixed height, shrink the font down to fit
        while (this.scrollHeight > this.clientHeight && currentSize > 0.9) {
            currentSize -= 0.1;
            this.style.fontSize = currentSize + 'rem';
        }
    });

    const updateAnonState = () => {
        if (anonCheck.checked) {
            fromInput.value = "Someone who cares";
            fromInput.disabled = true;
            fromInput.style.opacity = "0.5";
        } else {
            if(fromInput.value === "Someone who cares") fromInput.value = "";
            fromInput.disabled = false;
            fromInput.style.opacity = "1";
        }
    };
    
    anonCheck.addEventListener("change", updateAnonState);
    
    const generateShareText = () => {
        const to = toInput.value || "Friend";
        const from = anonCheck.checked ? "Someone who cares" : (fromInput.value || "Someone special");
        const msg = msgInput.value || `I picked this ${currentSelectedFlower.name} just for you.`;
        const link = window.location.href.split('?')[0]; 
        
        return `Dear ${to},\n\n${msg}\n\nI've sent you a digital ${currentSelectedFlower.name}. View your bloom here: ${link}\n\nWith care,\n${from}`;
    };
    
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(generateShareText()).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i data-lucide="check"></i> Copied!`;
            lucide.createIcons();
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                lucide.createIcons();
            }, 2000);
        });
    });

    downloadBtn.addEventListener("click", () => {
        if(typeof html2canvas === 'undefined') {
            alert("Download feature is loading, please try again in a moment.");
            return;
        }
        
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = `<i data-lucide="loader"></i> Creating...`;
        lucide.createIcons();
        
        const originalPlaceholder = msgInput.placeholder;
        if(!msgInput.value) msgInput.placeholder = "";

        const fromName = anonCheck.checked ? "Anon" : (fromInput.value || "Care");
        const fileName = `${currentSelectedFlower.name.replace(/\s+/g, '_')}_Postcard_From_${fromName.replace(/\s+/g, '_')}.png`;

        html2canvas(document.getElementById("postcardElement"), {
            scale: 2, 
            useCORS: true, 
            allowTaint: true, 
            logging: false,
            backgroundColor: "#FFFFFF" 
        }).then(canvas => {
            msgInput.placeholder = originalPlaceholder; // restore
            const link = document.createElement('a');
            link.download = fileName;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
            downloadBtn.innerHTML = originalText;
            lucide.createIcons();
        }).catch(err => {
            msgInput.placeholder = originalPlaceholder; // restore
            console.error("Could not generate postcard", err);
            alert("Sorry, there was an issue generating your postcard. Security constraints can prevent local files from being drawn. This feature works perfectly when hosted online.");
            downloadBtn.innerHTML = originalText;
            lucide.createIcons();
        });
    });
}

function openInteractivePopup(index) {
    currentSelectedFlower = flowers[index];
    const popup = document.getElementById("createPopup");
    
    // Reset Form
    document.getElementById("pcTo").value = "";
    const msgInput = document.getElementById("pcMsg");
    msgInput.value = "";
    msgInput.style.fontSize = '1.6rem'; // reset font size
    
    document.getElementById("pcFrom").value = "";
    document.getElementById("anonCheck").checked = false; 
    document.getElementById("pcFrom").disabled = false;
    document.getElementById("pcFrom").style.opacity = "1";
    
    const img = document.getElementById("pcImage");
    img.src = currentSelectedFlower.imgSrc;
    img.onerror = () => { img.src = 'https://images.unsplash.com/photo-1490750967868-88cb44cb2722?q=80&w=400&auto=format&fit=crop'; }; 
    
    document.getElementById("pcName").textContent = currentSelectedFlower.name;
    document.getElementById("pcDesc").textContent = currentSelectedFlower.description;
    
    document.body.classList.add('mobile-menu-open'); 
    popup.classList.add("active"); 
}
