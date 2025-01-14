import { generateRandomProfileUrl } from "./avatar.js";

console.log(generateRandomProfileUrl());
console.log(generateRandomProfileUrl());
console.log(generateRandomProfileUrl());
console.log(generateRandomProfileUrl());
console.log(generateRandomProfileUrl());

function replaceProfileImages() {
 
  const images = document.querySelectorAll('.profile img');
  images.forEach(image => {
    const randomUrl = generateRandomProfileUrl();
    console.log(randomUrl); // Log the random URL
    image.src = randomUrl;
  });
}

replaceProfileImages();