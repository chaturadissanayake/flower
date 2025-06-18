// List of 21 flowers with their names, image paths, and descriptions
const flowers = [
  { name: "Jasmine", imgSrc: "Assets/Flowers/1_Jasmine.png", description: "Jasmine is widely known for its sweet fragrance and delicate white petals. It symbolizes purity and modesty in Sri Lankan culture, often used in religious ceremonies." },
  { name: "Lotus", imgSrc: "Assets/Flowers/2_Lotus.png", description: "The Lotus symbolizes spiritual enlightenment and beauty. It’s a sacred flower in Sri Lanka and plays a significant role in Buddhist practices." },
  { name: "Hibiscus", imgSrc: "Assets/Flowers/3_Hibiscus.png", description: "Hibiscus is a symbol of strength and beauty. It is often associated with love and passion, and its vibrant color makes it a popular flower for celebrations." },
  // Continue with all flowers...
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
