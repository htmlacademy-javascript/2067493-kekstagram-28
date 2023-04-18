const thumbnailTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const container = document.querySelector('.pictures');

const creatThumbnails = function ({img, likes,comments}) {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = img;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
};
