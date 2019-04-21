import oranda from './oranda.jpg'

const addImage = function(){
  const img = document.createElement('img');
  img.alt = 'Goldfish';
  img.width = '300';
  img.src = oranda;

  const body = document.querySelector('body')
  body.appendChild(img)

};

export default addImage;