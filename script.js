/* =============================================
   ILY'S GARDEN — Main Script
   ============================================= */

// ─── Flower Data ─────────────────────────────────
const flowers = [
  {
    id: 1,
    name: "Blue Water Lily",
    category: "peace",
    meaning: "Tranquility & Inner Peace",
    img: "Assets/Flowers/JPEG/lily.jpg"
  },
  {
    id: 2,
    name: "Ceylon Ironwood",
    category: "strength",
    meaning: "Strength & Resilience",
    img: "Assets/Flowers/JPEG/ironwood.jpg"
  },
  {
    id: 3,
    name: "Kandy Orchid",
    category: "love",
    meaning: "Rare Beauty & Deep Love",
    img: "Assets/Flowers/JPEG/orchid.jpg"
  },
  {
    id: 4,
    name: "Temple Flower",
    category: "devotion",
    meaning: "Devotion & Pure Thought",
    img: "Assets/Flowers/JPEG/temple.jpg"
  },
  {
    id: 5,
    name: "Wild Jasmine",
    category: "joy",
    meaning: "Joy & Sweet Remembrance",
    img: "Assets/Flowers/JPEG/jasmine.jpg"
  },
  {
    id: 6,
    name: "Lotus Blossom",
    category: "new_beginnings",
    meaning: "New Beginnings & Grace",
    img: "Assets/Flowers/JPEG/lotus.jpg"
  }
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
  lucide && lucide.createIcons();
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
    // Swap icon
    toggle.innerHTML = isOpen
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
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
        <img src="${flower.img}" alt="${flower.name}" loading="lazy">
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
      if (e.key === 'Enter' || e.key === ' ') openModal(flower);
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
      // Auto-fill first template if message is empty or was auto-filled
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
    btn.className = 'chip';
    btn.style.fontSize = '0.68rem';
    btn.textContent = `Template ${i + 1}`;
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

  // Set flower data
  document.getElementById('pcImage').src    = flower.img;
  document.getElementById('pcImage').alt    = flower.name;
  document.getElementById('pcName').textContent    = flower.name;
  document.getElementById('pcMeaning').textContent = flower.meaning;

  // Reset fields
  document.getElementById('pcTo').value    = '';
  document.getElementById('pcFrom').value  = '';
  document.getElementById('pcFrom').disabled = false;
  document.getElementById('pcFrom').classList.remove('anon');
  document.getElementById('anonToggle').checked = false;

  // Set first template for active occasion
  const msg = document.getElementById('pcMsg');
  msg.value = occasionTemplates[activeOccasion][0];
  msg.dataset.autofilled = 'true';

  // Mark typed changes as not auto-filled
  msg.addEventListener('input', () => { msg.dataset.autofilled = 'false'; }, { once: true });

  // Render template chips
  renderTemplateChips(activeOccasion);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus the To field
  setTimeout(() => document.getElementById('pcTo').focus(), 100);
}

function closeModal() {
  const modal = document.getElementById('createPopup');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('createPopup');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── Canvas Generation ────────────────────────────
async function generateCanvas() {
  const element = document.getElementById('postcardElement');
  if (!element) return null;

  // Hide UI-only elements from canvas
  const uiOnly = element.querySelectorAll('.pc-corner-ornament, #templateChips, .occasion-label, #occasionChips');
  uiOnly.forEach(el => el.style.display = 'none');

  // Clean up input borders for capture
  const inputs = element.querySelectorAll('input, textarea, select');
  const originalStyles = [];
  inputs.forEach(input => {
    originalStyles.push({
      border:     input.style.border,
      borderBottom: input.style.borderBottom,
      background: input.style.background
    });
    input.style.border     = 'none';
    input.style.borderBottom = 'none';
    input.style.background = 'transparent';
  });

  let canvas;
  try {
    canvas = await html2canvas(element, {
      scale:           2,
      backgroundColor: '#FFFEF9',
      useCORS:         true,
      logging:         false
    });
  } catch (err) {
    console.error('Canvas error:', err);
  }

  // Restore everything
  inputs.forEach((input, i) => {
    input.style.border       = originalStyles[i].border;
    input.style.borderBottom = originalStyles[i].borderBottom;
    input.style.background   = originalStyles[i].background;
  });
  uiOnly.forEach(el => el.style.display = '');

  return canvas;
}

// ─── Download ─────────────────────────────────────
async function downloadPostcard() {
  const btn = document.getElementById('downloadBtn');
  if (btn) btn.disabled = true;

  const canvas = await generateCanvas();
  if (!canvas) { if (btn) btn.disabled = false; return; }

  const link = document.createElement('a');
  link.download = `ilys-garden-postcard.png`;
  link.href     = canvas.toDataURL('image/png');
  link.click();

  if (btn) btn.disabled = false;
}

// ─── Share ────────────────────────────────────────
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
        // User cancelled — that's okay
        if (err.name !== 'AbortError') console.error('Share error:', err);
      }
    } else {
      // Fallback: trigger download
      const link = document.createElement('a');
      link.download = 'ilys-garden-postcard.png';
      link.href     = canvas.toDataURL('image/png');
      link.click();
      alert("Your browser doesn't support direct sharing. The postcard has been saved instead!");
    }

    if (btn) btn.disabled = false;
  });
}
