// Функция которая дает рандомное число из задаваемого отрезка
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция для поиска случайного элемента в массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export{getRandomArrayElement};
export{getRandomInteger};
