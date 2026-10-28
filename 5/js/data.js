import { getRandomInteger, getRandomArrayElements } from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Без лишних слов.',
  'Момент, застывший во времени.',
  'Просто оставлю это здесь.',
  'Немного эстетики в ленту.',
  'Детали, которые делают этот день.',
  'Кадр дня.',
  'То, что попало в объектив.',
  'Настроение: здесь и сейчас.',
  'Один момент из тысячи.',
  'Магия в простых вещах.',
  'Вспышка воспоминаний.',
  'Без фильтров и подтекста.'
];
const PICTURES_COUNT = 25;

const createMessage = () => {
  const count = getRandomInteger(1, 2);
  const messageParts = [];
  for (let i = 0; i < count; i++){
    messageParts.push(getRandomArrayElements(MESSAGES));
  }
  return messageParts.join(' ');
};

let commentIdCounter = 1;

const createComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElements(NAMES),
});

const createPicture = (index) => {
  const id = index + 1;
  const commentsCount = getRandomInteger(0, 30);
  const comments = Array.from({length: commentsCount}, createComment);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElements(DESCRIPTIONS),
    likes: getRandomInteger(15,200),
    comments: comments
  };
};

const generatePictures = () => Array.from({length: PICTURES_COUNT}, (_, index) => createPicture(index));

export {generatePictures};
