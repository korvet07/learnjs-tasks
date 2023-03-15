const getRandomIntInclusive = (min, max) => {
  if (min >= max) {
    return `max должен быть больше min`;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};