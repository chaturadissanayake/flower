# Bloom & Share - Digital Flower Garden

![Bloom & Share Banner](Assets/banner.jpg)

A digital garden where every flower carries meaning and can be shared with loved ones.

## Features

- **Interactive Flower Gallery**: Browse 21 beautifully curated flowers with cultural significance
- **Wisdom Carousel**: Discover rotating flower facts and meanings
- **Personal Messages**: Create and share digital floral gifts
- **Responsive Design**: Works perfectly on all devices
- **Animated Transitions**: Smooth animations throughout the experience

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- JavaScript (ES6)
- [Google Fonts](https://fonts.google.com/) (Playfair Display, Inter)

## Installation

No installation required - simply open `index.html` in any modern browser.

## Customization

To customize the flowers or messages:

1. Edit the `flowers` array in `script.js`
```javascript
const flowers = [
  {
    name: "Jasmine",
    imgSrc: "Assets/Flowers/JPEG/1_Jasmine.jpg",
    description: "A symbol of purity and sweetness...",
    tags: ["fragrant", "symbolism"]
  },
  // Add more flowers as needed
];
```

2. Update the wisdom messages:
```javascript
const flowerFacts = [
  "Jasmine symbolizes purity and grace...",
  // Add more facts
];
```

## Animation Customization

Adjust animation timing in CSS:
```css
:root {
  --wisdom-anim-duration: 0.7s;
  --wisdom-anim-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Color Scheme

Customize colors in CSS variables:
```css
:root {
  --primary: #EC5EAB;
  --primary-light: #FFE6F0;
  --text: #1F1F1F;
  --text-light: #444;
}
```

## Responsive Breakpoints

- Mobile: <600px
- Tablet: 600-992px
- Desktop: >992px

## License

This project is open source under the MIT License.

---

**Created with love by Chatura**  
For Imali and all flower lovers worldwide 🌸
