function generateRandomProfileUrl() {
  const profileNumber = Math.floor(Math.random() * 70) + 1;
  return `https://i.pravatar.cc/150?img=${profileNumber}`;
}
