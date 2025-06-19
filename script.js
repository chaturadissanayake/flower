// List of 21 flowers with their names, image paths, and descriptions
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/1_Jasmine.webp", description: "Jasmine is widely known for its sweet fragrance and delicate white petals. In Sri Lanka, it symbolizes purity, simplicity, and modesty. Often used in religious ceremonies, it’s a flower that embodies innocence and beauty." },
  { name: "Lotus", imgSrc: "Assets/Flowers/2_Lotus.webp", description: "The Lotus symbolizes spiritual enlightenment and beauty. It’s a sacred flower in Sri Lanka, often linked with Buddhist practices, and represents purity and the overcoming of adversity." },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/3_Hibiscus.webp", description: "Hibiscus symbolizes strength and beauty. It is often associated with love, passion, and vibrant energy, making it a popular flower in Sri Lankan festivals and ceremonies." },
  { name: "Bougainvillea", imgSrc: "Assets/Flowers/4_Bougainvillea.webp", description: "Bougainvillea represents resilience and joy. Its vibrant colors symbolize strength and perseverance, and it’s commonly found adorning Sri Lankan gardens, adding color and life." },
  { name: "Plumeria", imgSrc: "Assets/Flowers/5_Plumeria.webp", description: "Plumeria, with its beautiful tropical petals, symbolizes love, grace, and charm. It’s a flower deeply rooted in Sri Lankan culture, often used in weddings and religious rituals." },
  { name: "Water Lily", imgSrc: "Assets/Flowers/6_WaterLily.webp", description: "Water Lily represents purity and tranquility. It is often used in Sri Lankan Buddhist practices, symbolizing the harmony between water, nature, and spiritual purity." },
  { name: "Coconut Flower", imgSrc: "Assets/Flowers/7_CoconutFlower.webp", description: "Coconut flowers symbolize vitality, strength, and nourishment. The coconut tree is an integral part of Sri Lankan agriculture, and the flowers are frequently used in religious offerings." },
  { name: "Orchid", imgSrc: "Assets/Flowers/8_Orchid.webp", description: "The Orchid represents beauty, luxury, and strength. Orchids are often used in Sri Lankan floral arrangements and are a symbol of sophistication and elegance." },
  { name: "Balsam", imgSrc: "Assets/Flowers/9_Balsam.webp", description: "Balsam flowers are associated with beauty, love, and grace. Their vibrant colors make them a favorite in Sri Lankan gardens, where they brighten up the surroundings." },
  { name: "Cinnamon Flower", imgSrc: "Assets/Flowers/10_CinnamonFlower.webp", description: "Cinnamon flower represents the essence of Sri Lankan spice culture. Known for its rich fragrance, it is often associated with healing properties and culinary uses." },
  { name: "Ixora", imgSrc: "Assets/Flowers/11_Ixora.webp", description: "Ixora symbolizes passion and desire. Its small, bright flowers are frequently found in Sri Lankan gardens and are admired for their beauty and symbolic meaning." },
  { name: "Periwinkle", imgSrc: "Assets/Flowers/12_Periwinkle.webp", description: "Periwinkle represents friendship and good luck. This delicate flower is common in Sri Lankan gardens and is often given as a gift to show appreciation." },
  { name: "Plumeria", imgSrc: "Assets/Flowers/13_Plumeria.webp", description: "Plumeria, a symbol of love and grace, is a flower often seen in Sri Lankan weddings. Its beauty and fragrant petals add charm to any occasion." },
  { name: "Karthigaipoo", imgSrc: "Assets/Flowers/14_Karthigaipoo.webp", description: "Karthigaipoo symbolizes prosperity and divine blessing. Often used in religious ceremonies, it holds a special place in the hearts of Sri Lankans." },
  { name: "Poinsettia", imgSrc: "Assets/Flowers/15_Poinsettia.webp", description: "Poinsettia represents good cheer and happiness. Its red and green petals are iconic during the festive season and are often used in Sri Lankan Christmas decorations." },
  { name: "Wild Ginger", imgSrc: "Assets/Flowers/16_WildGinger.webp", description: "Wild Ginger symbolizes boldness and strength. It is widely used in traditional Sri Lankan medicine for its healing properties and is often associated with vitality." },
  { name: "Sunflower", imgSrc: "Assets/Flowers/17_Sunflower.webp", description: "Sunflowers represent adoration, loyalty, and longevity. Their bright, cheerful faces are a symbol of positivity, making them a beloved flower in Sri Lanka." },
  { name: "Tuberose", imgSrc: "Assets/Flowers/18_Tuberose.webp", description: "Tuberose symbolizes purity and sensuality. It is often used in Sri Lankan weddings and is known for its sweet, intoxicating fragrance." },
  { name: "Lantana", imgSrc: "Assets/Flowers/19_Lantana.webp", description: "Lantana symbolizes endurance and resilience. This hardy flower thrives in Sri Lankan gardens and represents the ability to withstand challenges." },
  { name: "Golden Shower", imgSrc: "Assets/Flowers/20_GoldenShower.webp", description: "The Golden Shower symbolizes beauty and grace. It is widely appreciated in Sri Lankan culture for its vibrant yellow petals and is often used in festivals and celebrations." },
  { name: "Moringa Flowers", imgSrc: "Assets/Flowers/21_MoringaFlowers.webp", description: "Moringa flowers represent health and vitality. The Moringa tree is valued for its nutritional benefits, and the flowers are used in various culinary dishes." }
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
