
// const container = document.querySelector('.container');;
// for (let i = 0; i < 800; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
window.onload = function() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = randomColor();
    });
  
    square.addEventListener('mouseout', () => {
      setTimeout(() => {
        square.style.backgroundColor = 'initial';
      }, 1000);
    });
    
    container.appendChild(square);
  }
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}