// List of 21 flowers with their names, image paths, and descriptions (100+ words each)
const flowers = [
  { name: "Cinnamon Flower", imgSrc: "flower/Assets/Flowers/10_CinnamonFlower.png", description: "Cinnamon Flower is associated with the warm, spicy aroma of the cinnamon tree, which is used in both culinary and medicinal applications. Known for its bright, attractive colors, the cinnamon flower represents vitality, and it plays an important role in Sri Lankan culture, often found in religious offerings and festivals." },
  { name: "Ixora", imgSrc: "flower/Assets/Flowers/11_Ixora.png", description: "Ixora is a vibrant flower that comes in various colors, particularly red, yellow, and orange. It symbolizes strength and resilience in Sri Lankan culture and is often used in traditional ceremonies and decorations. The small, dense clusters of flowers bring joy and beauty to gardens, representing community and togetherness." },
  { name: "Periwinkle", imgSrc: "flower/Assets/Flowers/12_Periwinkle.png", description: "Periwinkle is known for its delicate, colorful petals and is often associated with peace and tranquility. In Sri Lanka, it is linked with healing, especially in folk medicine. The flower is also a symbol of remembrance and respect, often seen in gardens and temples." },
  { name: "Plumeria", imgSrc: "flower/Assets/Flowers/13_Plumera.png", description: "Plumeria, with its soft, fragrant blooms, is a popular flower in Sri Lanka, often used in religious offerings. It represents beauty, love, and positivity. In Sri Lankan culture, Plumeria is symbolic of divine beauty, and its scent is thought to attract good spirits and fortune." },
  { name: "Karthigaipoo", imgSrc: "flower/Assets/Flowers/14_Karthigaipoo.png", description: "Karthigaipoo is a strikingly beautiful flower in Sri Lankan culture, often associated with the Hindu festival of Karthikai. It symbolizes light, knowledge, and spiritual awakening. The bright orange petals of this flower are said to bring blessings and good fortune to those who receive it." },
  { name: "Poinsettia", imgSrc: "flower/Assets/Flowers/15_Poinsettia.png", description: "Poinsettia, with its vibrant red and green colors, is a symbol of celebration and joy, especially during the festive season. In Sri Lanka, it is considered a flower of prosperity and good fortune, commonly found in religious and cultural festivities." },
  { name: "Wild Ginger", imgSrc: "flower/Assets/Flowers/16_WildGinger.png", description: "Wild Ginger is a unique flower known for its strong, spicy fragrance. This flower is widely used in Sri Lankan traditional medicine, believed to have healing properties. The Wild Ginger represents vitality, health, and protection, often used in rituals to ward off evil spirits." },
  { name: "Sunflower", imgSrc: "flower/Assets/Flowers/17_Sunflower.png", description: "Sunflower symbolizes happiness, positivity, and warmth. In Sri Lanka, it is often associated with joy and is used in various cultural celebrations. The sunflower’s bright yellow petals symbolize the sun, radiating energy and cheerfulness wherever it blooms." },
  { name: "Tuberose", imgSrc: "flower/Assets/Flowers/18_Tuberose.png", description: "Tuberose is known for its intoxicating fragrance and delicate, white blossoms. In Sri Lankan culture, Tuberose is a symbol of purity and beauty. It’s often used in weddings and religious ceremonies to bring blessings and divine energy into the home." },
  { name: "Lantana", imgSrc: "flower/Assets/Flowers/19_Lantana.png", description: "Lantana is a vibrant, colorful flower that thrives in tropical climates. It symbolizes resilience, adaptability, and joy. In Sri Lanka, Lantana is used in gardens and often symbolizes harmony and unity. It also represents the energy of life and the beauty of nature." },
  { name: "Bougainvillea", imgSrc: "flower/Assets/Flowers/20_Bougainvillea.png", description: "Bougainvillea is a hardy flower that thrives in tropical conditions. Known for its bright, vibrant colors, it symbolizes resilience and courage. In Sri Lankan culture, Bougainvillea is often used to decorate homes and temples, as it brings warmth and beauty to its surroundings." },
  { name: "Moringa Flowers", imgSrc: "flower/Assets/Flowers/21_MoringaFlowers.png", description: "Moringa flowers are known for their subtle yet pleasant fragrance. These flowers come from the Moringa tree, often called the 'Miracle Tree' due to its nutritional value and medicinal properties. In Sri Lankan culture, Moringa is seen as a symbol of health, wellness, and vitality." },
  { name: "Jasmine", imgSrc: "flower/Assets/Flowers/1_Jasmine.png", description: "Jasmine symbolizes purity, simplicity, and modesty in Sri Lankan culture. Its sweet fragrance is associated with the gentle and loving nature of the island's people. The flower is often used in religious offerings and as a symbol of affection." },
  { name: "Lotus", imgSrc: "flower/Assets/Flowers/2_Lotus.png", description: "The Lotus is a sacred flower in Sri Lanka, symbolizing enlightenment, beauty, and purity. It grows in serene waters and is used in religious rituals, representing spiritual growth and awakening." },
  { name: "Rose", imgSrc: "flower/Assets/Flowers/3_Rose.png", description: "Roses are widely known for their association with love, beauty, and passion. In Sri Lanka, they are also used in weddings and significant celebrations as a symbol of affection and commitment." },
  { name: "Water Lily", imgSrc: "flower/Assets/Flowers/6_WaterLily.png", description: "Water Lily represents purity, peace, and tranquility. It is a symbol of spirituality in Sri Lankan culture, often associated with calm and meditation, frequently found in serene ponds and used in religious settings." },
  { name: "Coconut Flower", imgSrc: "flower/Assets/Flowers/7_CoconutFlower.png", description: "The Coconut flower is an integral part of Sri Lankan culture. It signifies fertility, abundance, and prosperity. Used in various culinary dishes and cultural rituals, the Coconut flower is also associated with Sri Lanka’s agrarian roots." },
  { name: "Orchid", imgSrc: "flower/Assets/Flowers/8_Orchid.png", description: "The Orchid represents luxury, beauty, and elegance. It is commonly used in decorative settings and symbolizes strength, refinement, and love. In Sri Lanka, Orchids are often found in gardens and are used in celebratory events." },
  { name: "Balsam", imgSrc: "flower/Assets/Flowers/9_Balsam.png", description: "Balsam is a symbol of resilience and protection. The vibrant flowers are often associated with blessings and are commonly found in Sri Lankan gardens. The Balsam flower is known for its medicinal properties in folk remedies." }
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
document.getElementById("downloadBtn").addEventListener("click", function() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  
  img.src = selectedFlower.imgSrc;
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height + 100; // Space for message
    
    ctx.drawImage(img, 0, 0);
    ctx.font = "20px Arial";
    ctx.fillText(document.getElementById("message").value, 10, img.height + 30);
    
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${selectedFlower.name}-with-message.png`;
    a.click();
  };
};
