
// const container = document.querySelector('.container');;
// for (let i = 0; i < 800; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
window.onload = function() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}
  
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'randomColor()';
  });
  
  square.addEventListener('mouseout', () => {
    setTimeout(() => {
      square.style.backgroundColor = 'initial';
    }, 1000);
  });
  
  container.appendChild(square);
}