import './style-app.css';

const image = document.createElement('img');
image.src = 'https://source.unsplash.com/random/400x400';
const div = document.createElement('div');
div.id = 'div-color';
document.body.appendChild(div);
document.getElementById('div-color').appendChild(image);