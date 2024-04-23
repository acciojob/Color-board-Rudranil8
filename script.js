//your JS code here. If required.
const container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'randomColor()'; // replace randomColor() with a function that generates random colors
  });
  
  square.addEventListener('mouseout', () => {
    setTimeout(() => {
      square.style.backgroundColor = 'initial';
    }, 1000);
  });
  
  container.appendChild(square);
}