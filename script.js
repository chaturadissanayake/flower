// List of 21 flowers with their names, image paths, and descriptions
const flowers = [
  { name: "Flower 1", imgSrc: "flower1.png", description: "Flower 1 Description. A beautiful flower with symbolic meaning in Sri Lankan culture." },
  { name: "Flower 2", imgSrc: "flower2.png", description: "Flower 2 Description. Often associated with love and affection." },
  { name: "Flower 3", imgSrc: "flower3.png", description: "Flower 3 Description. Known for its healing properties and bright color." },
  { name: "Flower 4", imgSrc: "flower4.png", description: "Flower 4 Description. A symbol of peace and serenity." },
  { name: "Flower 5", imgSrc: "flower5.png", description: "Flower 5 Description. Represents friendship and loyalty." },
  { name: "Flower 6", imgSrc: "flower6.png", description: "Flower 6 Description. Symbolizes hope and new beginnings." },
  { name: "Flower 7", imgSrc: "flower7.png", description: "Flower 7 Description. A flower associated with strength and resilience." },
  { name: "Flower 8", imgSrc: "flower8.png", description: "Flower 8 Description. This flower represents gratitude and appreciation." },
  { name: "Flower 9", imgSrc: "flower9.png", description: "Flower 9 Description. A symbol of joy and celebration." },
  { name: "Flower 10", imgSrc: "flower10.png", description: "Flower 10 Description. Known for its calming effect and beauty." },
  { name: "Flower 11", imgSrc: "flower11.png", description: "Flower 11 Description. Represents success and achievement." },
  { name: "Flower 12", imgSrc: "flower12.png", description: "Flower 12 Description. A flower connected to hope and renewal." },
  { name: "Flower 13", imgSrc: "flower13.png", description: "Flower 13 Description. Known for its ability to symbolize purity and innocence." },
  { name: "Flower 14", imgSrc: "flower14.png", description: "Flower 14 Description. Represents warmth and encouragement." },
  { name: "Flower 15", imgSrc: "flower15.png", description: "Flower 15 Description. A flower of patience and wisdom." },
  { name: "Flower 16", imgSrc: "flower16.png", description: "Flower 16 Description. Known for its boldness and strength." },
  { name: "Flower 17", imgSrc: "flower17.png", description: "Flower 17 Description. This flower brings positivity and love." },
  { name: "Flower 18", imgSrc: "flower18.png", description: "Flower 18 Description. Associated with beauty and resilience." },
  { name: "Flower 19", imgSrc: "flower19.png", description: "Flower 19 Description. Represents love and affection." },
  { name: "Flower 20", imgSrc: "flower20.png", description: "Flower 20 Description. Symbolizes purity and gentleness." },
  { name: "Flower 21", imgSrc: "flower21.png", description: "Flower 21 Description. A symbol of courage and determination." }
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

// Close Flower Description Pop-up
document.getElementById("closeFlowerDescriptionBtn").addEventListener("click", function() {
  document.getElementById("flowerDescriptionPopup").style.display = "none";
  document.getElementById("customizationPopup").style.display = "flex";
});

// Close Customization Pop-up
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

// Download Image
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
});
