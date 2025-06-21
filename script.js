// Full Flower Data (21 Flowers)
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/1_Jasmine.webp", description: "A symbol of purity and sweetness, Jasmine carries the scent of serene mornings and quiet affection." },
  { name: "Lotus", imgSrc: "Assets/Flowers/2_Lotus.webp", description: "Rising from still waters, the Lotus reflects spiritual grace and the courage to bloom against odds." },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/3_Hibiscus.webp", description: "Bold and vibrant, Hibiscus blossoms represent strength, passion, and heartfelt vitality." },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/4_Bougainvillea.webp", description: "Resilient and radiant, Bougainvillea reminds us of joy that blooms even in the harshest seasons." },
  { name: "Plumeria", imgSrc: "Assets/Flowers/5_Plumeria.webp", description: "Soft petals and fragrant whispers - Plumeria is the gentle voice of affection and charm." },
  { name: "Water Lily", imgSrc: "Assets/Flowers/6_WaterLily.webp", description: "Calm and rooted, Water Lily floats with grace - a symbol of peace and inner purity." },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/7_CoconutFlower.webp", description: "The soul of the tropical tree - Coconut flowers are life, strength, and gentle nourishment." },
  { name: "Orchid", imgSrc: "Assets/Flowers/8_Orchid.webp", description: "Elegant and mysterious, Orchid flowers speak of beauty, luxury, and silent strength." },
  { name: "Balsam", imgSrc: "Assets/Flowers/9_Balsam.webp", description: "Delicate yet resilient, Balsam adds a brush of kindness and subtle love to any garden." },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/10_CinnamonFlower.webp", description: "Spicy-sweet and rare, Cinnamon blooms evoke warmth, comfort, and cultural pride." },
  { name: "Ixora", imgSrc: "Assets/Flowers/11_Ixora.webp", description: "With fiery clusters, Ixora reflects devotion, admiration, and the glow of passion." },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/12_Periwinkle.webp", description: "Periwinkle brings quiet blessings - a wish for good luck and enduring friendship." },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/13_Karthigaipoo.webp", description: "Sacred and timeless, Karthigaipoo blossoms speak of tradition, devotion, and divine presence." },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/14_Poinsettia.webp", description: "A star-shaped bloom of celebration and cheer, Poinsettia carries the joy of festive hearts." },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/15_WildGinger.webp", description: "Bold and healing, Wild Ginger thrives with determination - a symbol of natural courage." },
  { name: "Sunflower", imgSrc: "Assets/Flowers/16_Sunflower.webp", description: "Turning always to the sun, Sunflowers embody loyalty, brightness, and open-hearted joy." },
  { name: "Tuberose", imgSrc: "Assets/Flowers/17_Tuberose.webp", description: "With a fragrance that lingers like memory, Tuberose whispers tenderness and sensuality." },
  { name: "Lantana", imgSrc: "Assets/Flowers/18_Lantana.webp", description: "Hardy and colorful, Lantana blooms for resilience, diversity, and creative spirit." },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/19_GoldenShower.webp", description: "Sunlight cascades in petals - Golden Shower is beauty, celebration, and tropical abundance." },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/20_MoringaFlowers.webp", description: "Tiny white blossoms with mighty gifts - Moringa flowers represent nurturing strength and healing." },
  { name: "White Lily", imgSrc: "Assets/Flowers/21_WhiteLily.webp", description: "Elegant and calm, White Lily represents peace, devotion, and gentle remembrance." }
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
  "Moringa is called the Miracle Tree for its benefits.",
  "Bougainvillea thrives even in dry soil and sun.",
  "Cinnamon flowers bloom before fruit appears.",
  "Lantana changes color as it matures gracefully.",
  "Karthigaipoo marks sacred festival seasons annually.",
  "Wild Ginger supports healing in Ayurveda traditions.",
  "Golden Shower trees bloom during New Year rituals.",
  "Poinsettias brighten homes and hearts in December.",
  "Periwinkle is believed to bring good luck often.",
  "Sunflowers follow the sun across the sky daily.",
  "Tuberose is prized in traditional wedding ceremonies.",
  "Balsam pods burst open when gently touched.",
  "Coconut flowers bless new beginnings and journeys.",
  "Every bloom carries a message waiting to be shared."
];

// Function to load flowers into the grid with enhanced error handling
function loadFlowers() {
  const grid = document.getElementById("flowerGrid");
  const fallback = document.getElementById("flowerFallback");
  grid.innerHTML = "";
  
  if (!flowers.length) {
    fallback.style.display = "block";
    return;
  }

  flowers.forEach((flower, i) => {
    const item = document.createElement("div");
    item.classList.add("flower-item");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("image-wrapper");
    
    const img = document.createElement("img");
    img.src = flower.imgSrc;
    img.alt = flower.name;
    img.classList.add("flower-image");
    img.loading = "lazy";
    
    // Add loading state
    img.dataset.loaded = "false";
    img.onload = function() {
      this.dataset.loaded = "true";
    };
    
    // Enhanced error handling with case correction
    img.onerror = function() {
      // Try different case variations
      const lowerCaseSrc = flower.imgSrc.toLowerCase();
      const upperCaseSrc = flower.imgSrc.toUpperCase();
      
      if (lowerCaseSrc !== flower.imgSrc) {
        this.src = lowerCaseSrc;
      } else if (upperCaseSrc !== flower.imgSrc) {
        this.src = upperCaseSrc;
      } else {
        // Create SVG placeholder with flower name
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FFE6F0'/%3E%3Ctext x='50' y='50' font-size='10' text-anchor='middle' fill='%23EC5EAB'%3E" + 
                   encodeURIComponent(flower.name) + 
                   "%3C/text%3E%3C/svg%3E";
        console.warn("Image failed to load: " + flower.imgSrc);
      }
    };

    img.addEventListener("click", () => openFlowerDescription(i));

    const name = document.createElement("p");
    name.classList.add("flower-name");
    name.textContent = flower.name;

    const desc = document.createElement("p");
    desc.classList.add("flower-description");
    desc.textContent = flower.description;

    imgWrapper.appendChild(img);
    item.appendChild(imgWrapper);
    item.appendChild(name);
    item.appendChild(desc);
    grid.appendChild(item);
  });

  fallback.style.display = "none";
}

// Open flower description in the popup
function openFlowerDescription(index) {
  const flower = flowers[index];
  document.getElementById("popupFlowerName").textContent = flower.name;
  document.getElementById("flowerDescriptionText").textContent = flower.description;
  
  const popupImg = document.getElementById("popupFlowerImage");
  popupImg.src = flower.imgSrc;
  popupImg.alt = flower.name;
  
  // Show the popup
  document.getElementById("flowerDescriptionPopup").style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Close flower description popup
document.getElementById("closeFlowerDescriptionBtn").addEventListener("click", () => {
  document.getElementById("flowerDescriptionPopup").style.display = "none";
  document.body.style.overflow = "auto";
});

// Set the "Flower of the Week"
function setFlowerOfTheWeek() {
  const flower = flowers[Math.floor(Math.random() * flowers.length)];
  document.getElementById("bloomNameTop").textContent = flower.name;
}

// Rotate wisdom cards
function rotateWisdom() {
  const wisdomText = document.querySelector('.wisdom-text');
  let i = 0;
  
  setInterval(() => {
    wisdomText.style.opacity = 0;
    
    setTimeout(() => {
      wisdomText.textContent = `"${flowerFacts[i]}"`;
      wisdomText.style.opacity = 1;
      i = (i + 1) % flowerFacts.length;
    }, 500);
  }, 4000);
}

// Share the selected flower via message
function shareFlower() {
  const flowerName = document.getElementById("popupFlowerName").textContent;
  const flowerDesc = document.getElementById("flowerDescriptionText").textContent;
  const msg = document.getElementById("customMessage").value.trim() || "A thoughtful bloom just for you";
  
  const output = `${flowerName}\n\n${flowerDesc}\n\n"${msg}"\n\nSent with Bloom & Share`;
  
  document.getElementById("finalMessage").value = output;
  
  // Close current popup
  document.getElementById("flowerDescriptionPopup").style.display = "none";
  
  // Open confirmation popup
  document.getElementById("shareConfirmationPopup").style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Close the share confirmation popup
function closeSharePopup() {
  document.getElementById("shareConfirmationPopup").style.display = "none";
  document.body.style.overflow = "auto";
}

// Copy message to clipboard
function copyToClipboard() {
  const text = document.getElementById("finalMessage").value;
  navigator.clipboard.writeText(text).then(() => {
    // Visual feedback
    const btn = document.querySelector('.share-btn');
    const originalText = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// Slideshow logic
let currentSlide = 0;
let slides, dots;
let slideInterval;

function showSlide(index) {
  // Ensure index is within bounds
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
  // Restart auto-advance
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  showSlide(currentSlide + 1);
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

  // Template selector
  document.getElementById("templateSelector").addEventListener("change", (e) => {
    const msg = e.target.value;
    if (msg) document.getElementById("customMessage").value = msg;
  });

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
  rotateWisdom();
  loadFlowers();

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    const sticky = document.getElementById("stickyHeader");
    if (window.scrollY > 100) {
      sticky.classList.add("visible");
    } else {
      sticky.classList.remove("visible");
    }
  });
  
  // Close popups when clicking outside
  document.addEventListener("click", (e) => {
    const flowerPopup = document.getElementById("flowerDescriptionPopup");
    const sharePopup = document.getElementById("shareConfirmationPopup");
    
    if (flowerPopup.style.display === "flex" && 
        !e.target.closest(".popup-content")) {
      flowerPopup.style.display = "none";
      document.body.style.overflow = "auto";
    }
    
    if (sharePopup.style.display === "flex" && 
        !e.target.closest(".popup-content")) {
      sharePopup.style.display = "none";
      document.body.style.overflow = "auto";
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
});
