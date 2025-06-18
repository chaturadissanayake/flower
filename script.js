// List of 21 flowers with their names, image paths, and descriptions
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/1_Jasmine.png", description: "Jasmine is widely known for its sweet fragrance and delicate white petals. In Sri Lanka, it symbolizes purity, simplicity, and modesty. Often used in religious ceremonies, it’s a flower that represents affection and grace. The fragrance of Jasmine flowers is particularly beloved during the early hours of the morning, creating a peaceful ambiance." },
  { name: "Lotus", imgSrc: "Assets/Flowers/2_Lotus.png", description: "The Lotus is a sacred flower in Sri Lankan culture, symbolizing enlightenment, beauty, and purity. It thrives in serene waters, representing spiritual growth and transformation. The Lotus is often featured in religious rituals and is deeply associated with Buddhist teachings of enlightenment and detachment." },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/3_Hibiscus.png", description: "The Hibiscus is a vibrant, showy flower that represents strength and beauty. It is widely associated with love and passion. In Sri Lanka, the Hibiscus is often used in offerings at temples, where it is thought to invite positivity and divine blessings into one’s life." },
  // Add remaining flowers with descriptions
];

// Function to load flowers
function loadFlowers() {
  const flowerGrid = document.getElementById('flowerGrid');
  flowerGrid.innerHTML = ''; // Clear existing flowers

  flowers.forEach((flower, index) => {
    const flowerElement = document.createElement('img');
    flowerElement.src = flower.imgSrc;
    flowerElement.alt = flower.name;
    flowerElement.classList.add('flower-image');
    flowerElement.addEventListener('click', () => openFlowerDescription(index));

    flowerGrid.appendChild(flowerElement);
  });
}

// Function to open flower description
function openFlowerDescription(index) {
  const selectedFlower = flowers[index];
  const shortDescription = selectedFlower.description.split(" ").slice(0, 30).join(" ") + '...';
  const fullDescription = selectedFlower.description;

  document.getElementById("flowerDescriptionText").innerText = shortDescription;
  document.getElementById("flowerDescriptionPopup").style.display = "flex";

  // Enable "Read More" link to show full description
  document.getElementById("readMoreLink").addEventListener("click", function() {
    document.getElementById("flowerDescriptionText").innerText = fullDescription;
  });
}

// Close Flower Description Popup
document.getElementById("closeFlowerDescriptionBtn").addEventListener("click", function() {
  document.getElementById("flowerDescriptionPopup").style.display = "none";
});

// Initialize flower selection
loadFlowers();

// Flower of the Week random selection
function setFlowerOfTheWeek() {
  const flowerOfTheWeek = flowers[Math.floor(Math.random() * flowers.length)];
  document.getElementById("flowerOfTheWeek").innerText = `Flower of the Week: ${flowerOfTheWeek.name}`;
}

setFlowerOfTheWeek();
