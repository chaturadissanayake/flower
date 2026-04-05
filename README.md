# Bloom and Share Digital Garden

Bloom and Share is a digital gifting experience that allows users to explore a garden of flora, select a bloom, and craft a personalised digital postcard to share. The site acts as a bridge built of petals and pixels for sharing thoughts.

## Features

* Flower selection grid with search and category filters for love, peace, joy, and strength.
* Postcard studio for writing custom messages that automatically scale to fit the frame.
* Postcard generation and download using HTML2Canvas.
* Integrated background audio with play and pause controls.
* Fully responsive design optimised for both desktop and mobile layouts.

## File Structure

* index.html: Main structure and postcard creation modal.
* styles.css: Core design system and responsive styling.
* script.js: Application logic, data handling, and postcard generation.
* Assets/Flowers/JPEG/: Directory for botanical images.
* Assets/Slides/: Directory for hero background images.
* Assets/Audio/: Directory for the background music file.

## Setup and Usage

1. Download all project files into a single root directory.
2. Ensure your images are located in Assets/Flowers/JPEG/ and named correctly to match the data array in script.js.
3. To use your own music, replace the placeholder file path in the index.html audio tag.
4. Open index.html in a web browser or host it on a server like GitHub Pages.

## Deployment Notes

When deploying to GitHub Pages, ensure that the Assets folder is uploaded with exact case-sensitivity as referenced in the code. Images must exist within the repository to avoid security blocks during the postcard download process.

## License

All rights reserved © 2026 Chatura Dissanayake.
