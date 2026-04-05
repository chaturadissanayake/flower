const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/JPEG/1_Jasmine.jpg", description: "The scent of a quiet dawn, a whisper of purity and grace.", tags: ["all", "love", "peace"] },
  { name: "Lotus", imgSrc: "Assets/Flowers/JPEG/2_Lotus.jpg", description: "Rising from water to meet the sun, a symbol of the soul's journey.", tags: ["all", "peace", "strength"] },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/JPEG/3_Hibiscus.jpg", description: "A fleeting, vibrant bloom that speaks of passionate, delicate beauty.", tags: ["all", "love", "joy"] },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/JPEG/4_Bougainvillea.jpg", description: "A resilient cascade of color, finding joy in the harshest sun.", tags: ["all", "joy", "strength"] },
  { name: "Plumeria (Araliya)", imgSrc: "Assets/Flowers/JPEG/5_Plumeria.jpg", description: "Soft petals holding the fragrance of a tropical evening.", tags: ["all", "love", "peace"] },
  { name: "Water Lily (Nil Mahanel)", imgSrc: "Assets/Flowers/JPEG/6_WaterLily.jpg", description: "A star floating on a still pond, representing peace and purity.", tags: ["all", "peace"] },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/JPEG/7_CoconutFlower.jpg", description: "The humble heart of the giving tree, a promise of life.", tags: ["all", "strength"] },
  { name: "Orchid", imgSrc: "Assets/Flowers/JPEG/8_Orchid.jpg", description: "An elegant and mysterious bloom of rare, silent beauty.", tags: ["all", "love"] },
  { name: "Balsam", imgSrc: "Assets/Flowers/JPEG/9_Balsam.jpg", description: "A delicate touch of kindness, adding subtle love to any garden.", tags: ["all", "love"] },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/JPEG/10_CinnamonFlower.jpg", description: "A rare, spicy-sweet scent that evokes warmth and comfort.", tags: ["all", "joy"] },
  { name: "Ixora", imgSrc: "Assets/Flowers/JPEG/11_Ixora.jpg", description: "Fiery clusters that burn with devotion and passionate admiration.", tags: ["all", "love", "strength"] },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/JPEG/12_Periwinkle.jpg", description: "A quiet blessing for good fortune and enduring friendship.", tags: ["all", "peace"] },
  { name: "Primrose", imgSrc: "Assets/Flowers/JPEG/13_Primrose.jpg", description: "A delicate symbol of youth, renewal, and gentle affection.", tags: ["all", "peace", "love"] },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/JPEG/14_Karthigaipoo.jpg", description: "A sacred flame of glory, representing divine blessings.", tags: ["all", "strength"] },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/JPEG/15_Poinsettia.jpg", description: "The cheerful star of winter, a sign of celebration and good cheer.", tags: ["all", "joy"] },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/JPEG/16_WildGinger.jpg", description: "An exotic treasure hidden beneath lush, tropical leaves.", tags: ["all"] },
  { name: "Sunflower", imgSrc: "Assets/Flowers/JPEG/17_Sunflower.jpg", description: "A bright, joyful face that forever follows the light.", tags: ["all", "joy", "strength"] },
  { name: "Tuberose", imgSrc: "Assets/Flowers/JPEG/18_Tuberose.jpg", description: "An intoxicating scent of dangerous pleasure and sensual beauty.", tags: ["all", "love"] },
  { name: "Lantana", imgSrc: "Assets/Flowers/JPEG/19_Lantana.jpg", description: "Clusters of ever-changing color, a dance of transformation.", tags: ["all", "joy"] },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/JPEG/20_GoldenShower.jpg", description: "A cascade of gold, symbolizing abundance and the joy of spring.", tags: ["all", "joy"] },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/JPEG/21_MoringaFlowers.jpg", description: "Delicate blossoms from the 'miracle tree,' a gift of healing.", tags: ["all", "strength", "peace"] }
];

const whispers = [
  { text: "Jasmine symbolizes purity and grace, with a sweet fragrance that promotes relaxation.", author: "Botanical Lore" },
  { text: "To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn" },
  { text: "Lotus blooms from the mud, untainted, representing spiritual enlightenment and resilience.", author: "Eastern Philosophy" },
  { text: "A flower does not think of competing with the flower next to it. It just blooms.", author: "Zen Shin" },
  { text: "Plumeria often symbolizes new beginnings and love, with a fragrance that intensifies at night.", author: "Tropical Wisdom" },
  { text: "Where flowers bloom, so does hope.", author: "Lady Bird Johnson" }
];

document.addEventListener("DOMContentLoaded", () => {
    if(typeof lucide !== 'undefined') lucide.createIcons();
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

function setupHeaderBehavior() {
    const header = document.getElementById("stickyHeader");
    if(!header) return;
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
    
    if(!toggle || !menu) return;
    
    const toggleMobileMenu = () => {
        menu.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
    };
    
    toggle.addEventListener('click', toggleMobileMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMobileMenu);
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        });
    });
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
    const target = document.getElementById('flower-selection');
    if (btn && target) {
        btn.addEventListener('click', () => {
            target.scrollIntoView({ behavior: 'smooth' });
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
                <img src="${flower.imgSrc}" alt="${flower.name}" loading="lazy" draggable="false" oncontextmenu="return false;">
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
    const filters = document.querySelectorAll(".filter-btn");
    if(!filters.length) return;

    let currentFilter = "all";
    
    const filterGrid = () => {
        document.querySelectorAll(".flower-item").forEach(item => {
            const tags = item.dataset.tags;
            if (currentFilter === "all" || tags.includes(currentFilter)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    };
    
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
    if(!btn) return;
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
    
    if (!bgMusic || !btn) return;

    const playIcon = btn.querySelector('.audio-music');
    const pauseIcon = btn.querySelector('.audio-pause');

    let isPlaying = false;
    let hasInteracted = false;

    const togglePlay = () => {
        if (isPlaying) {
            bgMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            let playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                }).catch(e => {
                    console.log("Audio playback blocked.");
                    playIcon.style.display = 'block';
                    pauseIcon.style.display = 'none';
                });
            }
        }
        isPlaying = !isPlaying;
    };

    btn.addEventListener('click', togglePlay);

    document.body.addEventListener('click', () => {
        if (!hasInteracted && !isPlaying && bgMusic.src && bgMusic.src !== window.location.href) {
            hasInteracted = true;
            let autoPlayPromise = bgMusic.play();
            if (autoPlayPromise !== undefined) {
                autoPlayPromise.then(() => {
                    isPlaying = true;
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                }).catch(e => {
                    console.log("Autoplay prevented.");
                });
            }
        }
    }, { once: true });
}

let currentSelectedFlower = null;

function setupInteractiveSharePopup() {
    const popup = document.getElementById("createPopup");
    if(!popup) return;
    
    const closeBtn = popup.querySelector(".modal-close"); 
    const toInput = document.getElementById("pcTo");
    const msgInput = document.getElementById("pcMsg");
    const fromInput = document.getElementById("pcFrom");
    const anonCheck = document.getElementById("anonCheck"); 
    const copyBtn = document.getElementById("copyLinkBtn");
    const downloadBtn = document.getElementById("downloadBtn"); 
    const charCount = document.getElementById("charCount");
    
    const tabs = document.querySelectorAll(".modal-tab");
    const artSection = document.getElementById("pcArtSection");
    const msgSection = document.getElementById("pcMessageSection");
    const actionsSection = document.getElementById("pcActionsSection");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            if (tab.dataset.tab === "art") {
                artSection.style.display = "flex";
                msgSection.style.display = "none";
                actionsSection.style.display = "none";
            } else {
                artSection.style.display = "none";
                msgSection.style.display = "flex";
                actionsSection.style.display = "flex";
            }
        });
    });
    
    const closePopup = () => { 
        popup.classList.remove("active"); 
        document.body.classList.remove('mobile-menu-open'); 
    };
    
    closeBtn.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => { if(e.target === popup) closePopup(); });
    
    msgInput.addEventListener('input', function() {
        charCount.textContent = `${this.value.length} / 250`;
        if (this.value.length >= 250) {
            charCount.classList.add("limit");
        } else {
            charCount.classList.remove("limit");
        }
        
        let currentSize = 1.6; 
        this.style.fontSize = currentSize + 'rem';
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
    
    copyBtn.addEventListener("click", async () => {
        const text = generateShareText();
        try {
            await navigator.clipboard.writeText(text);
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i data-lucide="check"></i> Copied!`;
            if(typeof lucide !== 'undefined') lucide.createIcons();
            setTimeout(() => { copyBtn.innerHTML = originalText; if(typeof lucide !== 'undefined') lucide.createIcons(); }, 2000);
        } catch (err) {
            prompt("Copy this text:", text);
        }
    });

    downloadBtn.addEventListener("click", () => {
        if (!toInput.value.trim() || !msgInput.value.trim()) {
            toInput.classList.add("error");
            msgInput.classList.add("error");
            setTimeout(() => {
                toInput.classList.remove("error");
                msgInput.classList.remove("error");
            }, 1500);
            return;
        }

        if(typeof html2canvas === 'undefined') {
            alert("Download feature is loading, please try again in a moment.");
            return;
        }
        
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = `<i data-lucide="loader"></i> Creating...`;
        if(typeof lucide !== 'undefined') lucide.createIcons();
        
        const originalPlaceholder = msgInput.placeholder;
        if(!msgInput.value) msgInput.placeholder = "";

        const fromText = anonCheck.checked ? "Anon" : (fromInput.value || "Care");
        const cleanName = fromText.replace(/[^a-z0-9]/gi, '_');
        const fileName = `Bloom_${currentSelectedFlower.name.replace(/\s+/g, '_')}_for_${cleanName}.png`;

        const renderClone = document.createElement('div');
        Object.assign(renderClone.style, {
            position: 'absolute',
            top: '-9999px',
            left: '0',
            width: '1000px',
            height: '500px',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            fontFamily: "'Cormorant Garamond', serif",
            color: '#3A473D'
        });

        renderClone.innerHTML = `
            <div style="width: 450px; height: 500px; display: flex; flex-direction: column; background: #F4EFE6; border-right: 1px solid #E6E0D4; box-sizing: border-box;">
                <div style="flex-grow: 1; display: flex; align-items: center; justify-content: center; padding: 40px; overflow: hidden;">
                    <img id="ghostRenderImg" src="${currentSelectedFlower.imgSrc}" style="width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply;">
                </div>
                <div style="padding: 20px 30px; background: #FFFFFF; border-top: 1px solid #E6E0D4; text-align: left; box-sizing: border-box;">
                    <h3 style="font-size: 22px; font-style: italic; font-weight: 500; margin: 0 0 5px 0; color: #3A473D; font-family: 'Cormorant Garamond', serif;">${currentSelectedFlower.name}</h3>
                    <p style="font-size: 16px; color: #6B7B6E; font-style: italic; font-weight: 400; margin: 0; font-family: 'Cormorant Garamond', serif;">${currentSelectedFlower.description}</p>
                </div>
            </div>
            <div style="width: 550px; height: 500px; padding: 60px 50px; display: flex; flex-direction: column; background: #FFFFFF; box-sizing: border-box;">
                <div style="font-size: 35px; font-weight: 500; margin-bottom: 20px; color: #3A473D; font-family: 'Cormorant Garamond', serif;">${toInput.value}</div>
                <div style="flex-grow: 1; font-size: 26px; line-height: 1.5; white-space: pre-wrap; color: #3A473D; font-family: 'Cormorant Garamond', serif; overflow: hidden;">${msgInput.value}</div>
                <div style="text-align: right; margin-top: auto;">
                    <div style="font-size: 22px; font-style: italic; color: #3A473D; font-family: 'Cormorant Garamond', serif;">With care,</div>
                    <div style="font-size: 30px; font-weight: 500; font-style: italic; margin-top: 5px; color: #3A473D; font-family: 'Cormorant Garamond', serif;">${fromText}</div>
                </div>
            </div>
        `;

        document.body.appendChild(renderClone);
        
        const ghostImg = document.getElementById('ghostRenderImg');
        
        const triggerDownload = () => {
            html2canvas(renderClone, {
                scale: 2, 
                backgroundColor: "#FFFFFF",
                width: 1000,
                height: 500
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = fileName;
                link.href = canvas.toDataURL('image/png', 1.0);
                link.click();
                
                document.body.removeChild(renderClone);
                downloadBtn.innerHTML = originalText;
                if(typeof lucide !== 'undefined') lucide.createIcons();
            }).catch(err => {
                console.error("Could not generate postcard", err);
                document.body.removeChild(renderClone);
                downloadBtn.innerHTML = originalText;
                if(typeof lucide !== 'undefined') lucide.createIcons();
            });
        };

        if (ghostImg.complete) {
            triggerDownload();
        } else {
            ghostImg.onload = triggerDownload;
            ghostImg.onerror = triggerDownload; 
        }
    });
}

function openInteractivePopup(index) {
    currentSelectedFlower = flowers[index];
    const popup = document.getElementById("createPopup");
    const charCount = document.getElementById("charCount");
    
    document.getElementById("pcTo").value = "";
    document.getElementById("pcTo").classList.remove("error");
    
    const msgInput = document.getElementById("pcMsg");
    msgInput.value = "";
    msgInput.classList.remove("error");
    msgInput.style.fontSize = '1.6rem'; 
    charCount.textContent = "0 / 250";
    charCount.classList.remove("limit");
    
    document.getElementById("pcFrom").value = "";
    document.getElementById("anonCheck").checked = false; 
    document.getElementById("pcFrom").disabled = false;
    document.getElementById("pcFrom").style.opacity = "1";
    
    const img = document.getElementById("pcImage");
    img.src = currentSelectedFlower.imgSrc;
    
    document.getElementById("pcName").textContent = currentSelectedFlower.name;
    document.getElementById("pcDesc").textContent = currentSelectedFlower.description;
    
    const tabs = document.querySelectorAll(".modal-tab");
    if(window.innerWidth <= 992) {
        tabs[1].classList.add("active");
        tabs[0].classList.remove("active");
        document.getElementById("pcArtSection").style.display = "none";
        document.getElementById("pcMessageSection").style.display = "flex";
        document.getElementById("pcActionsSection").style.display = "flex";
    } else {
        document.getElementById("pcArtSection").style.display = "flex";
        document.getElementById("pcMessageSection").style.display = "flex";
        document.getElementById("pcActionsSection").style.display = "flex";
    }
    
    document.body.classList.add('mobile-menu-open'); 
    popup.classList.add("active"); 
}