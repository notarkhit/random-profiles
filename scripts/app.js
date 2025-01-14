import { generateRandomProfileUrl } from "./avatar.js";

function replaceProfileImages() {
 
  const images = document.querySelectorAll('.profile img');
  images.forEach(image => {
    image.src = generateRandomProfileUrl();
  });
}

replaceProfileImages();