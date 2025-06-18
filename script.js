// List of 21 flowers with their names, image paths, and descriptions
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/1_Jasmine.png", description: "Jasmine is widely known for its sweet fragrance and delicate white petals. It symbolizes purity and modesty in Sri Lankan culture, often used in religious ceremonies." },
  { name: "Lotus", imgSrc: "Assets/Flowers/2_Lotus.png", description: "The Lotus symbolizes spiritual enlightenment and beauty. It’s a sacred flower in Sri Lanka and plays a significant role in Buddhist practices." },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/3_Hibiscus.png", description: "Hibiscus is a symbol of strength and beauty. It is often associated with love and passion, and its vibrant color makes it a popular flower for celebrations." },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/4_Bougainvillea.png", description: "Bougainvillea represents resilience and joy. Its vibrant colors symbolize strength, perseverance, and enthusiasm, commonly found in Sri Lankan gardens." },
  { name: "Plumeria", imgSrc: "Assets/Flowers/5_Plumeria.png", description: "Plumeria, with its beautiful tropical petals, symbolizes love, grace, and charm. It’s widely used in Sri Lankan weddings and ceremonies." },
  { name: "Water Lily", imgSrc: "Assets/Flowers/6_WaterLily.png", description: "Water Lily represents purity and tranquility. It’s an important flower in Sri Lankan culture, often associated with water deities and rituals." },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/7_CoconutFlower.png", description: "Coconut flowers symbolize strength, vitality, and nourishment. It plays a vital role in Sri Lankan agriculture and is often used in religious offerings." },
  { name: "Orchid", imgSrc: "Assets/Flowers/8_Orchid.png", description: "The Orchid symbolizes beauty, luxury, and strength. In Sri Lanka, orchids are often used in decorative arrangements for weddings and festive occasions." },
  { name: "Balsam", imgSrc: "Assets/Flowers/9_Balsam.png", description: "Balsam flowers symbolize love and beauty. Known for their bright colors, they are often found in gardens and used in floral arrangements." },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/10_CinnamonFlower.png", description: "Cinnamon flower represents the essence of Sri Lankan spice culture. It is fragrant and often associated with healing and natural remedies." },
  { name: "Ixora", imgSrc: "Assets/Flowers/11_Ixora.png", description: "Ixora is a flower that symbolizes passion and desire. It’s often used in decorative arrangements and is a common sight in Sri Lankan gardens." },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/12_Periwinkle.png", description: "Periwinkle symbolizes friendship and good luck. Its vibrant colors make it a popular flower in Sri Lankan gardens and celebrations." },
  { name: "Plumeria", imgSrc: "Assets/Flowers/13_Plumeria.png", description: "Plumeria, a flower that symbolizes beauty, grace, and love, is often seen in Sri Lankan wedding ceremonies and offerings." },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/14_Karthigaipoo.png", description: "Karthigaipoo symbolizes prosperity and divine blessing. It’s commonly used in religious ceremonies and is a mark of spiritual significance in Sri Lanka." },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/15_Poinsettia.png", description: "Poinsettia symbolizes good cheer and happiness. It’s a popular flower during festive seasons, especially in Sri Lankan holiday decorations." },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/16_WildGinger.png", description: "Wild Ginger symbolizes boldness and strength. It is used in herbal medicine and is significant in Sri Lankan traditional healing." },
  { name: "Sunflower", imgSrc: "Assets/Flowers/17_Sunflower.png", description: "Sunflowers represent adoration, loyalty, and longevity. Their vibrant yellow petals are a symbol of positivity and energy in Sri Lanka." },
  { name: "Tubrose", imgSrc: "Assets/Flowers/18_Tubrose.png", description: "Tubrose symbolizes purity, innocence, and sensuality. It is widely used in Sri Lankan weddings and traditional ceremonies." },
  { name: "Lantana", imgSrc: "Assets/Flowers/19_Lantana.png", description: "Lantana flowers symbolize endurance and resilience. They are often associated with long-lasting beauty and are a common sight in Sri Lankan landscapes." },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/20_GoldenShower.png", description: "The Golden Shower symbolizes beauty and grace. It’s often used in Sri Lankan cultural events and is associated with positivity." },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/21_MoringaFlowers.png", description: "Moringa flowers represent health and vitality. The Moringa tree is known for its medicinal properties, and the flowers are used in various traditional remedies." }
];

// Function to load flowers
function loadFlowers() {
  const flowerGrid = document.getElementById('flowerGrid');
  flowerGrid.innerHTML = ''; // Clear existing flowers

  flowers.forEach((flower, index) => {
    const flowerElement = document.createElement('div');
    flowerElement.classList.add('flower-item');
    
    const flowerImage = document.createElement('img');
    flowerImage.src = flower.imgSrc;
    flowerImage.alt = flower.name;
    flowerImage.classList.add('flower-image');
    flowerImage.addEventListener('click', () => openFlowerDescription(index));

    const flowerName = document.createElement('p');
    flowerName.classList.add('flower-name');
    flowerName.innerText = flower.name;

    const flowerDescription = document.createElement('p');
    flowerDescription.classList.add('flower-description');
    flowerDescription.innerText = flower.description.split(' ').slice(0, 30).join(' ') + '...';

    flowerElement.appendChild(flowerImage);
    flowerElement.appendChild(flowerName);
    flowerElement.appendChild(flowerDescription);

    flowerGrid.appendChild(flowerElement);
  });
}

// Function to open flower description
function openFlowerDescription(index) {
  const selectedFlower = flowers[index];
  const fullDescription = selectedFlower.description;

  document.getElementById("flowerDescriptionText").innerText = fullDescription;
  document.getElementById("flowerDescriptionPopup").style.display = "flex";
}

// Close Flower Description Popup when clicking close button or pressing ESC
document.getElementById("closeFlowerDescriptionBtn").addEventListener("click", function() {
  document.getElementById("flowerDescriptionPopup").style.display = "none";
});

// Close popup when ESC key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    document.getElementById("flowerDescriptionPopup").style.display = "none";
  }
});

// Initialize flower selection
loadFlowers();

// Flower of the Week random selection
function setFlowerOfTheWeek() {
  const flowerOfTheWeek = flowers[Math.floor(Math.random() * flowers.length)];
  document.getElementById("flowerOfTheWeek").innerText = `Flower of the Week: ${flowerOfTheWeek.name}`;
}

setFlowerOfTheWeek();
