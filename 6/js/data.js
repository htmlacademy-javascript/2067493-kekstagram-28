
import{getRandomArrayElement, getRandomInteger} from './util.js';
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

//Функция для формирования комментария к фотографии
const getComments = (number) => {
  const arrayComments = [{
    id: getRandomInteger(number * 20, number * 40),
    avatar:`/avatar/${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomArrayElement(MESSAGES)],
    name: NAMES[getRandomArrayElement(NAMES)]
  }];
  return arrayComments;
};
// Создадим функцию которая будет делать массив Album
const MAX_ELEMENTS = 25;
const getAlbum = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[getRandomArrayElement(DESCRIPTIONS)],
  likes: getRandomInteger (15, 200),
  comments: Array.from({length: getRandomInteger(1,20)}, () => getComments(index))
});
const album = Array.from({length: MAX_ELEMENTS}, (item, i) => getAlbum(i));

export{album};
