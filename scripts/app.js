function generateRandomProfileUrl() {
  const profileNumber = Math.floor(Math.random() * 70) + 1;
  return `https://i.pravatar.cc/150?img=${profileNumber}`;
}


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