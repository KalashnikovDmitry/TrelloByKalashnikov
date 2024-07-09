const ROOT_ELEMENT = document.getElementById('root');

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');

CONTAINER.textContent = 'MY TRELLO PROJECT';

ROOT_ELEMENT.append(CONTAINER);
