// List of 21 flowers with their names, image paths, and descriptions (100+ words each)
const flowers = [
  { name: "Jasmine", imgSrc: "flower/Assets/Flowers/1_Jasmine.png", description: "Jasmine is widely known for its sweet fragrance and delicate white petals. In Sri Lanka, it symbolizes purity, simplicity, and modesty. Often used in religious ceremonies, it’s a flower that represents affection and grace. The fragrance of Jasmine flowers is particularly beloved during the early hours of the morning, creating a peaceful ambiance." },
  { name: "Lotus", imgSrc: "flower/Assets/Flowers/2_Lotus.png", description: "The Lotus is a sacred flower in Sri Lankan culture, symbolizing enlightenment, beauty, and purity. It thrives in serene waters, representing spiritual growth and transformation. The Lotus is often featured in religious rituals and is deeply associated with Buddhist teachings of enlightenment and detachment." },
  { name: "Hibiscus", imgSrc: "flower/Assets/Flowers/3_Hibiscus.png", description: "The Hibiscus is a vibrant, showy flower that represents strength and beauty. It is widely associated with love and passion. In Sri Lanka, the Hibiscus is often used in offerings at temples, where it is thought to invite positivity and divine blessings into one’s life." },
  { name: "Bougainvillea", imgSrc: "flower/Assets/Flowers/4_Bougainvillea.png", description: "Bougainvillea is a hardy and vibrant flower that thrives in tropical climates. It represents resilience and courage, often found in Sri Lankan gardens and used to decorate homes during festivals and cultural events. The flower’s vivid colors bring warmth and beauty to its surroundings." },
  { name: "Plumeria", imgSrc: "flower/Assets/Flowers/5_Plumera.png", description: "Plumeria is a fragrant, elegant flower often used in religious offerings and celebrations. In Sri Lanka, it symbolizes beauty, positivity, and purity. Its rich, sweet scent is considered spiritually uplifting, and it is widely admired for its delicate petals that radiate softness and grace." },
  { name: "Karthigaipoo", imgSrc: "flower/Assets/Flowers/6_Karthigaipoo.png", description: "Karthigaipoo is a festival flower often used during the Hindu festival of Karthikai. It symbolizes light, knowledge, and spiritual awakening. The bright, orange-red flowers are believed to attract positive energy and blessings, making them a favored choice during rituals and ceremonies." },
  { name: "Poinsettia", imgSrc: "flower/Assets/Flowers/7_Poinsettia.png", description: "Poinsettia, with its vibrant red and green colors, is a symbol of celebration and joy, especially during the festive season. In Sri Lanka, it is considered a flower of prosperity and good fortune, commonly found in religious and cultural festivities." },
  { name: "Wild Ginger", imgSrc: "flower/Assets/Flowers/8_WildGinger.png", description: "Wild Ginger is known for its distinct, spicy fragrance and is often used in Sri Lankan herbal medicine. Symbolizing vitality and protection, this flower is considered sacred, and it is used in rituals to purify and ward off negative energies, promoting health and well-being." },
  { name: "Sunflower", imgSrc: "flower/Assets/Flowers/9_Sunflower.png", description: "Sunflowers symbolize happiness, positivity, and strength. In Sri Lanka, they are associated with good luck and success. Their large, bright yellow petals are thought to represent the sun, bringing warmth and light wherever they bloom, and are often used in festivals to symbolize joy." },
  { name: "Tuberose", imgSrc: "flower/Assets/Flowers/10_Tuberose.png", description: "Tuberose is celebrated for its intoxicating fragrance and pure white flowers. It represents purity and beauty in Sri Lankan culture and is often used during weddings and other significant events. The flower’s scent is thought to attract good fortune, happiness, and divine energy into the home." },
  { name: "Lantana", imgSrc: "flower/Assets/Flowers/11_Lantana.png", description: "Lantana, a bright and colorful flower, symbolizes resilience and adaptability. It thrives in various environments and is a popular choice for Sri Lankan gardens. Known for its ability to bring harmony and balance, Lantana represents the unity of opposites and is associated with enduring strength." },
  { name: "Coconut Flower", imgSrc: "flower/Assets/Flowers/12_CoconutFlower.png", description: "The Coconut flower is deeply rooted in Sri Lankan culture, symbolizing fertility, prosperity, and abundance. It is used in various culinary and cultural traditions, often appearing in religious ceremonies and offerings. The Coconut tree itself holds immense significance in Sri Lanka, and the flower represents the nation’s agrarian and tropical lifestyle." },
  { name: "Orchid", imgSrc: "flower/Assets/Flowers/13_Orchid.png", description: "Orchids represent luxury, beauty, and strength. In Sri Lanka, they symbolize refinement and elegance, often used in decorative settings for special occasions. The delicate petals of Orchids are highly regarded, and they signify the beauty of both nature and culture, often appearing in Sri Lankan gardens." },
  { name: "Balsam", imgSrc: "flower/Assets/Flowers/14_Balsam.png", description: "Balsam is a flower that symbolizes resilience, protection, and healing. In Sri Lankan gardens, it is often associated with bringing blessings and good health. Its vibrant colors represent the beauty of life, and it is known for its medicinal properties in folk remedies." },
  { name: "Golden Shower", imgSrc: "flower/Assets/Flowers/15_GoldenShower.png", description: "Golden Shower is a radiant yellow flower symbolizing joy, positivity, and renewal. It’s a symbol of prosperity and good fortune, often used in religious celebrations and festivals in Sri Lanka. The flower’s bright golden color represents the sun’s energy, bringing light and warmth into homes and hearts." },
  { name: "Moringa Flowers", imgSrc: "flower/Assets/Flowers/16_MoringaFlowers.png", description: "Moringa flowers are associated with health and vitality, often considered sacred in Sri Lankan culture. The flowers come from the Moringa tree, known as the 'Miracle Tree,' which has numerous medicinal uses. The flowers represent wellness and are highly regarded for their nutritional and therapeutic benefits." },
  { name: "Ixora", imgSrc: "flower/Assets/Flowers/17_Ixora.png", description: "Ixora is a small yet vibrant flower often associated with strength, resilience, and love. It is widely cultivated in Sri Lanka for its colorful clusters, which can be found in various shades of red, yellow, and orange. Ixora flowers are often used in religious offerings, representing purity and devotion." },
  { name: "Periwinkle", imgSrc: "flower/Assets/Flowers/18_Periwinkle.png", description: "Periwinkle is a delicate flower known for its vibrant color and symbolism of peace. It is often associated with hope and healing in Sri Lankan culture. The Periwinkle’s small yet beautiful blooms are often found in gardens and are used to bring serenity and calmness into the home." },
  { name: "Water Lily", imgSrc: "flower/Assets/Flowers/19_WaterLily.png", description: "Water Lily is a symbol of purity, peace, and spiritual awakening. It is revered in Sri Lankan culture and is often used in religious offerings. Water Lily blooms in serene, calm waters and represents growth, enlightenment, and the beauty of nature." },
  { name: "Wild Ginger", imgSrc: "flower/Assets/Flowers/20_WildGinger.png", description: "Wild Ginger is a unique and spicy-scented flower commonly found in Sri Lankan forests. It symbolizes vitality, protection, and strength. Often used in herbal medicine, Wild Ginger is believed to have healing properties, making it highly respected in Sri Lankan folk remedies." }
];

let selectedFlower = null;

// Open Flower Selection Pop-up
document.getElementById("pickFlowerBtn").addEventListener("click", function() {
  document.getElementById("flowerSelectionPopup").style.display = "flex";
  loadFlowers();
  setFlowerOfTheWeek();
});

// Close Flower Selection Pop-up
document.getElementById("closeFlowerSelectionBtn").addEventListener("click", function() {
  document.getElementById("flowerSelectionPopup").style.display = "none";
});

// Load Flower Grid
function loadFlowers() {
  const flowerGrid = document.querySelector('.flower-grid');
  flowerGrid.innerHTML = '';
  
  flowers.forEach((flower, index) => {
    const flowerElement = document.createElement('img');
    flowerElement.src = flower.imgSrc;
    flowerElement.alt = flower.name;
    flowerElement.classList.add('flower-image');
    flowerElement.addEventListener('click', () => selectFlower(index));
    
    flowerGrid.appendChild(flowerElement);
  });
}

// Select Flower and open Flower Description Pop-up
function selectFlower(index) {
  selectedFlower = flowers[index];
  document.getElementById("flowerDescriptionText").innerText = selectedFlower.description;
  document.getElementById("flowerSelectionPopup").style.display = "none";
  document.getElementById("flowerDescriptionPopup").style.display = "flex";
}

// Set Flower of the Week
function setFlowerOfTheWeek() {
  const flowerOfTheWeek = flowers[Math.floor(Math.random() * flowers.length)];
  document.getElementById("flowerOfTheWeek").innerText = `Flower of the Week: ${flowerOfTheWeek.name}`;
}

// Close Pop-ups
document.getElementById("closeFlowerDescriptionBtn").addEventListener("click", function() {
  document.getElementById("flowerDescriptionPopup").style.display = "none";
  document.getElementById("customizationPopup").style.display = "flex";
});

document.getElementById("closeCustomizationBtn").addEventListener("click", function() {
  document.getElementById("customizationPopup").style.display = "none";
});

// Preview Button
document.getElementById("previewBtn").addEventListener("click", function() {
  document.getElementById("customizationPopup").style.display = "none";
  document.getElementById("previewPopup").style.display = "flex";
  previewFlower();
});

// Preview Flower & Message
function previewFlower() {
  const previewContent = document.getElementById("previewContent");
  previewContent.innerHTML = `
    <img src="${selectedFlower.imgSrc}" alt="${selectedFlower.name}" class="flower-image">
    <p>${document.getElementById("message").value}</p>
  `;
}

// Close Preview Pop-up
document.getElementById("closePreviewBtn").addEventListener("click", function() {
  document.getElementById("previewPopup").style.display = "none";
});

// Download Image (flower + message)
document.getElementById("downloadBtn").addEventListener("
