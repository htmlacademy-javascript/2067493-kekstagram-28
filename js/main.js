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

let arrayComments = [];
function getComments() {
  arrayComments = [{
    id: getRandomInteger(0, 1000),
    avatar:`/photos/${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  }];
  return arrayComments;
}
getComments();

// Добавим данную функцию в основной массив
// Создадим функцию которая будет делать массив Album
let album = [];
const maxElements = 25;
function getAlbum () {
  for (let i = 1; i <= maxElements; i++){
    album.push({
      id: i,
      url: `/photos/${ i }.jpg`,
      description: DESCRIPTIONS[getRandomInteger (0, DESCRIPTIONS.length - 1)],
      likes: getRandomInteger (15, 200),
      comments: Array.from({length: getRandomInteger(1,3)}, getComments)
    });
  }
  return album;
}
getAlbum();

console.log(album);
