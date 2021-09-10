function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
