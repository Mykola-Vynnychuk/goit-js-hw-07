const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createImageCard = image => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('image-card__item');

  const imageRef = document.createElement('img');
  imageRef.src = image.url;
  imageRef.alt = image.alt;

  itemRef.appendChild(imageRef);

  return itemRef;
};

const imagesCard = images.map(image => createImageCard(image));

document.querySelector('#gallery').append(...imagesCard);
