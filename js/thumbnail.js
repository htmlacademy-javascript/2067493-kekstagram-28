const thumbnailTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const container = document.querySelector('.pictures');

const creatThumbnails = function ({url, likes,comments}) {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const thumbnailFragment = document.createDocumentFragment();

const addingThumbnail = function(pictures){
  pictures.forEach((picture) => {
    thumbnailFragment.appendChild(creatThumbnails(picture));
  });
  container.appendChild(thumbnailFragment);
};

export{addingThumbnail};
