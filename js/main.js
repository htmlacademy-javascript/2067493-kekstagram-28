//Комментарии к фотографиям
const MESSAGES = [
  'Всё отлично!',
  'В целом все неплохо. Но не все.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лийа людей на фотке перекошены, как будто их избивают. как можно было поймать такой неудачный момент?!'
];
//Имена комментаторов к фотографиям
const NAMES = [
  'Антон',
  'Дмитрий',
  'Арсейний',
  'Мария',
  'Анна',
  'Славяна',
  'Лена',
];
//Описание фотографий
const DESCRIPTIONS = [
  'Красота!',
  'Получилось вроде не плохо!',
  'Старался сделать красивый снимок.',
  'Фотографии это страсть!!!',
  'Просто хороший кадр!',
  'Хорошие выходные дни',
  'Красота бывает разное',
  'Разгледеть красоту в необчном надо уметь!',
  'Было отличное время',
];

// Функция которая дает рандомное число из задаваемого отрезка
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// функция для поиска случайного элемента в массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция для формирования комментария к фотографии
let arrayComments = [];
function getComments(number) {
  arrayComments = [{
    id: getRandomInteger(number * 20, number * 40),
    avatar:`/avatar/${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomArrayElement(MESSAGES)],
    name: NAMES[getRandomArrayElement(NAMES)]
  }];
  return arrayComments;
}
getComments();

// Добавим данную функцию в основной массив
// Создадим функцию которая будет делать массив Album
const album = [];
const maxElements = 25;
function getAlbum () {
  for (let i = 1; i <= maxElements; i++){
    album.push({
      id: i,
      url: `/photos/${ i }.jpg`,
      description: DESCRIPTIONS[getRandomArrayElement(DESCRIPTIONS)],
      likes: getRandomInteger (15, 200),
      comments: Array.from({length: getRandomInteger(1,2)}, () => getComments(i))
    });
  }
  return album;
}
getAlbum();
