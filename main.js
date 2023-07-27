const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

const [primeiro, segundo, ...resd] = array;


document.body.innerHTML = JSON.stringify({ primeiro, segundo, resd })