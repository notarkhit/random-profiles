function generateRandomProfileUrl() {
  const profileNumber = Math.floor(Math.random() * 70) + 1;
  return `https://i.pravatar.cc/150?img=${profileNumber}`;
}

function replaceProfileImages() {
 
  const images = document.querySelectorAll('.profile img');
  images.forEach(image => {
    const randomUrl = generateRandomProfileUrl();
    console.log(randomUrl); // Log the random URL
    image.src = randomUrl;
  });
}

replaceProfileImages();

const names = [
  "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack",
  "Karen", "Leo", "Mia", "Nathan", "Olivia", "Paul", "Quincy", "Rachel", "Sam", "Tina",
  "Uma", "Vera", "William", "Xander", "Yara", "Zach", "Abigail", "Benjamin", "Catherine",
  "Daniel", "Emily", "Fiona", "George", "Heather", "Ian", "Jessica", "Kyle", "Liam", "Megan",
  "Noah", "Olga", "Peter", "Quinn", "Rebeca", "Steven", "Travis", "Ursula", "Vince", "Wendy",
  "Xena", "Yasmine", "Zane"
];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function setNames () {
  const names = document.querySelectorAll(".profile-name");
  names.forEach (name => {
    const randomName = getRandomName();
    console.log(randomName);
    name.textContent = randomName;
  });
}

setNames();

