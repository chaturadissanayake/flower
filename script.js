/* =============================================
   ILY'S GARDEN — Main Script
   ============================================= */

// ─── Flower Data (All 21 Blooms) ─────────────────
const flowers = [
  { id: 1, name: "Wild Jasmine", category: "joy", meaning: "Joy & Sweet Remembrance", img: "assets/Flowers/JPEG/1_Jasmine.jpg" },
  { id: 2, name: "Lotus Blossom", category: "new_beginnings", meaning: "New Beginnings & Grace", img: "assets/Flowers/JPEG/2_Lotus.jpg" },
  { id: 3, name: "Crimson Hibiscus", category: "courage", meaning: "Courage & Delicate Beauty", img: "assets/Flowers/JPEG/3_Hibiscus.jpg" },
  { id: 4, name: "Bougainvillea", category: "passion", meaning: "Passion & Vibrant Spirit", img: "assets/Flowers/JPEG/4_Bougainvillea.jpg" },
  { id: 5, name: "Plumeria", category: "devotion", meaning: "Devotion & Pure Thought", img: "assets/Flowers/JPEG/5_Plumeria.jpg" },
  { id: 6, name: "Blue Water Lily", category: "peace", meaning: "Tranquility & Inner Peace", img: "assets/Flowers/JPEG/6_WaterLily.jpg" },
  { id: 7, name: "Coconut Flower", category: "prosperity", meaning: "Prosperity & Life", img: "assets/Flowers/JPEG/7_CoconutFlower.jpg" },
  { id: 8, name: "Kandy Orchid", category: "love", meaning: "Rare Beauty & Deep Love", img: "assets/Flowers/JPEG/8_Orchid.jpg" },
  { id: 9, name: "Balsam", category: "warmth", meaning: "Warmth & Healing", img: "assets/Flowers/JPEG/9_Balsam.jpg" },
  { id: 10, name: "Cinnamon Flower", category: "comfort", meaning: "Strength & Comfort", img: "assets/Flowers/JPEG/10_CinnamonFlower.jpg" },
  { id: 11, name: "Ixora", category: "passion", meaning: "Passion & Burning Desire", img: "assets/Flowers/JPEG/11_Ixora.jpg" },
  { id: 12, name: "Periwinkle", category: "nostalgia", meaning: "Eternal Love & Nostalgia", img: "assets/Flowers/JPEG/12_Periwinkle.jpg" },
  { id: 13, name: "Primrose", category: "hope", meaning: "Youth & Hope", img: "assets/Flowers/JPEG/13_Primrose.jpg" },
  { id: 14, name: "Flame Lily", category: "resilience", meaning: "Resilience & Fierce Pride", img: "assets/Flowers/JPEG/14_Karthigaipoo.jpg" },
  { id: 15, name: "Poinsettia", category: "success", meaning: "Cheer & Success", img: "assets/Flowers/JPEG/15_Poinsettia.jpg" },
  { id: 16, name: "Wild Ginger", category: "energy", meaning: "Strength & Boundless Energy", img: "assets/Flowers/JPEG/16_WildGinger.jpg" },
  { id: 17, name: "Sunflower", category: "loyalty", meaning: "Adoration & Loyalty", img: "assets/Flowers/JPEG/17_Sunflower.jpg" },
  { id: 18, name: "Tuberose", category: "serenity", meaning: "Peace & Sweet Serenity", img: "assets/Flowers/JPEG/18_Tuberose.jpg" },
  { id: 19, name: "Lantana", category: "brightness", meaning: "Rigor & Brightness", img: "assets/Flowers/JPEG/19_Lantana.jpg" },
  { id: 20, name: "Golden Shower", category: "wealth", meaning: "Wealth & Joyful Transitions", img: "assets/Flowers/JPEG/20_GoldenShower.jpg" },
  { id: 21, name: "Moringa Flowers", category: "vitality", meaning: "Nurturance & Vitality", img: "assets/Flowers/JPEG/21_MoringaFlowers.jpg" }
];

// ─── Occasion Templates ───────────────────────────
const occasionTemplates = {
  friend: [
    "Just a quiet reminder that you make the world a brighter place.",
    "Sending you this bloom because it reminded me of you — warm, beautiful, and irreplaceable.",
    "Distance means nothing when someone means everything. Thinking of you today.",
    "You are the kind of friend that people write poems about. Thank you for being you."
  ],
  family: [
    "Home is wherever you are. Thank you for being my anchor.",
    "No words feel like enough, so I'm sending flowers instead. You mean everything to me.",
    "You have shaped who I am in ways I am still discovering. Thank you.",
    "I don't say it nearly enough — I love you, and I am so glad you are mine."
  ],
  partner: [
    "Every day with you feels like a garden in full bloom.",
    "You are the quiet I was always looking for. Thank you for being here.",
    "Thank you for being the most extraordinary chapter of my story.",
    "Ordinary days with you feel extraordinary. I am so grateful for us."
  ],
  gratitude: [
    "Thank you doesn't feel like enough, but I hope this bloom carries the full weight of my gratitude.",
    "You showed up when it mattered most. I will never forget that.",
    "Because of you, things feel a little more possible. Thank you, sincerely.",
    "What you did for me changed things. I wanted you to know it didn't go unnoticed."
  ],
  missing: [
    "Miles away, but always on my mind. Wish you were here.",
    "The distance is real, but so is this — missing you more than words can say.",
    "Some days the only thing that helps is knowing you exist somewhere in this world.",
    "I keep thinking about the last time we were together. Until next time — thinking of you."
  ],
  just_because: [
    "No special reason. I just wanted you to know you were thought of today.",
    "This bloom is a quiet way of saying — I see you, and I'm glad you're here.",
    "Because ordinary days deserve extraordinary gestures. Just because.",
    "You don't need a reason to send someone a flower. And I didn't need one either."
  ]
};

// ─── Active state ─────────────────────────────────
let activeOccasion = 'friend';

// ─── DOM Ready ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  renderFlowerGrid();
  initOccasionChips();
  initAnonToggle();
  if (typeof window !== 'undefined' && window.lucide) {
    window.lucide.createIcons();
  }
});

// ─── Sticky Header ────────────────────────────────
function initHeader() {
  const header = document.getElementById('stickyHeader');
  if (!header) return;
  const isSubpage = header.classList.contains('scrolled');

  if (!isSubpage) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// ─── Mobile Nav ───────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('mobileNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons();
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      if (typeof window !== 'undefined' && window.lucide) {
        window.lucide.createIcons();
      }
    });
  });
}

// ─── Render Flower Grid ───────────────────────────
function renderFlowerGrid() {
  const grid = document.getElementById('flowerGrid');
  if (!grid) return;

  flowers.forEach(flower => {
    const card = document.createElement('div');
    card.className = 'flower-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Send a ${flower.name} postcard`);
    card.innerHTML = `
      <div class="flower-card-img-wrap">
        <img src="${flower.img}" alt="${flower.name}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlN2U0ZDEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzZhN2I2ZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTRweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG1pc3Npbmc8L3RleHQ+PC9zdmc+'">
        <div class="flower-card-overlay">
          <span>Create Postcard</span>
        </div>
      </div>
      <div class="flower-card-body">
        <h3>${flower.name}</h3>
        <p class="flower-meaning-tag">${flower.meaning}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(flower));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(flower);
      }
    });
    grid.appendChild(card);
  });
}

// ─── Occasion Chips ──────────────────────────────
function initOccasionChips() {
  const chips = document.querySelectorAll('#occasionChips .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeOccasion = chip.dataset.occasion;
      renderTemplateChips(activeOccasion);
      const msg = document.getElementById('pcMsg');
      if (msg && (!msg.value || msg.dataset.autofilled === 'true')) {
        msg.value = occasionTemplates[activeOccasion][0];
        msg.dataset.autofilled = 'true';
      }
    });
  });
}

function renderTemplateChips(occasion) {
  const container = document.getElementById('templateChips');
  if (!container) return;
  container.innerHTML = '';
  const templates = occasionTemplates[occasion] || [];
  templates.forEach((tpl, i) => {
    const btn = document.createElement('button');
    btn.className = 'chip-template';
    const preview = tpl.length > 38 ? tpl.slice(0, 38) + '…' : tpl;
    btn.textContent = preview;
    btn.title = tpl;
    btn.addEventListener('click', () => {
      document.getElementById('pcMsg').value = tpl;
      document.getElementById('pcMsg').dataset.autofilled = 'true';
    });
    container.appendChild(btn);
  });
}

// ─── Anonymous Toggle ─────────────────────────────
function initAnonToggle() {
  const toggle = document.getElementById('anonToggle');
  const fromInput = document.getElementById('pcFrom');
  if (!toggle || !fromInput) return;

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      fromInput.dataset.prevValue = fromInput.value;
      fromInput.value = 'Anonymous';
      fromInput.classList.add('anon');
      fromInput.disabled = true;
    } else {
      fromInput.value = fromInput.dataset.prevValue || '';
      fromInput.classList.remove('anon');
      fromInput.disabled = false;
    }
  });
}

// ─── Modal ────────────────────────────────────────
function openModal(flower) {
  const modal = document.getElementById('createPopup');
  if (!modal) return;

  document.getElementById('pcImage').src           = flower.img;
  document.getElementById('pcImage').alt           = flower.name;
  document.getElementById('pcName').textContent    = flower.name;
  document.getElementById('pcMeaning').textContent = flower.meaning;

  document.getElementById('pcTo').value            = '';
  document.getElementById('pcFrom').value          = '';
  document.getElementById('pcFrom').disabled       = false;
  document.getElementById('pcFrom').classList.remove('anon');
  document.getElementById('anonToggle').checked    = false;

  const msg = document.getElementById('pcMsg');
  msg.value = occasionTemplates[activeOccasion][0];
  msg.dataset.autofilled = 'true';
  msg.oninput = () => { msg.dataset.autofilled = 'false'; };

  renderTemplateChips(activeOccasion);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (window.innerWidth > 768) {
    setTimeout(() => document.getElementById('pcTo').focus(), 100);
  }
}

function closeModal() {
  const modal = document.getElementById('createPopup');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('createPopup');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── Canvas Generation ────────────────────────────
async function generateCanvas() {
  const element = document.getElementById('postcardElement');
  if (!element) return null;

  // Pre-convert the flower image to a base64 data URL so html2canvas
  // never has to make a cross-origin request, which would taint the
  // canvas and produce a damaged/blank image area in the download.
  const pcImage = document.getElementById('pcImage');
  const originalSrc = pcImage ? pcImage.src : '';
  if (pcImage && originalSrc && !originalSrc.startsWith('data:')) {
    try {
      const response = await fetch(originalSrc, { mode: 'cors' });
      const blob = await response.blob();
      const dataUrl = await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      pcImage.src = dataUrl;
      await new Promise(r => setTimeout(r, 80)); // let the browser re-paint
    } catch (e) { /* keep original src if fetch fails */ }
  }

  const uiOnly = element.querySelectorAll('.pc-corner-ornament, #templateChips, .occasion-label, #occasionChips, .anon-toggle-row');
  uiOnly.forEach(el => el.style.display = 'none');

  const artPanel = element.querySelector('.postcard-art');
  const originalArtBg = artPanel ? artPanel.style.background : '';
  if (artPanel) artPanel.style.background = '#FFFFFF';

  const inputs = element.querySelectorAll('input, textarea, select');
  const originalStyles = [];
  inputs.forEach(input => {
    originalStyles.push({
      border:       input.style.border,
      borderBottom: input.style.borderBottom,
      background:   input.style.background,
      height:       input.style.height,
      overflow:     input.style.overflow
    });
    input.style.border       = 'none';
    input.style.borderBottom = 'none';
    input.style.background   = 'transparent';
    if (input.tagName === 'TEXTAREA') {
      input.style.height   = input.scrollHeight + 'px';
      input.style.overflow = 'visible';
    }
  });

  let canvas = null;
  try {
    if (typeof html2canvas !== 'undefined') {
      canvas = await html2canvas(element, {
        scale:           2,
        backgroundColor: '#FFFEF9',
        useCORS:         true,
        logging:         false
      });
    }
  } catch (err) {
    console.error('Canvas error:', err);
  }

  inputs.forEach((input, i) => {
    input.style.border       = originalStyles[i].border;
    input.style.borderBottom = originalStyles[i].borderBottom;
    input.style.background   = originalStyles[i].background;
    if (input.tagName === 'TEXTAREA') {
      input.style.height   = originalStyles[i].height;
      input.style.overflow = originalStyles[i].overflow;
    }
  });
  uiOnly.forEach(el => el.style.display = '');
  if (artPanel) artPanel.style.background = originalArtBg;
  // Restore the original relative src so the live UI isn't left with a data URL
  if (pcImage && originalSrc) pcImage.src = originalSrc;

  return canvas;
}

// ─── Download & Share ────────────────────────────
async function downloadPostcard() {
  const btn = document.getElementById('downloadBtn');
  const originalHTML = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.innerHTML = 'Saving…'; }

  const canvas = await generateCanvas();
  if (!canvas) {
    if (btn) { btn.disabled = false; btn.innerHTML = originalHTML; }
    return;
  }

  const link = document.createElement('a');
  link.download = `ilys-garden-postcard.png`;
  link.href     = canvas.toDataURL('image/png');
  link.click();

  if (btn) { btn.disabled = false; btn.innerHTML = originalHTML; }
}

async function sharePostcard() {
  const btn = document.getElementById('shareBtn');
  if (btn) btn.disabled = true;

  const canvas = await generateCanvas();
  if (!canvas) { if (btn) btn.disabled = false; return; }

  canvas.toBlob(async (blob) => {
    const file = new File([blob], `ilys-garden-postcard.png`, { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: "A postcard from Ily's Garden",
          text:  "I chose this bloom and wrote a note for you.",
          files: [file]
        });
      } catch (err) {
        if (err.name !== 'AbortError') console.error('Share error:', err);
      }
    } else {
      const link = document.createElement('a');
      link.download = 'ilys-garden-postcard.png';
      link.href     = canvas.toDataURL('image/png');
      link.click();
      alert("Your browser doesn't support direct sharing. The postcard has been saved instead!");
    }

    if (btn) btn.disabled = false;
  });
}