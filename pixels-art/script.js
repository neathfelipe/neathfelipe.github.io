const sectionColorPalette = document.querySelector('#color-palette');
const btnColor = document.querySelector('#btnColorRandom');
const main = document.querySelector('main');

for (let div = 0; div < 4; div += 1) {
  const divColor = document.createElement('div');
  divColor.classList.add('color');
  sectionColorPalette.appendChild(divColor);
}

const btnRandom = document.createElement('button');
btnRandom.setAttribute('id', 'button-random-color');
btnRandom.innerText = 'Cores aleatórias';
btnColor.appendChild(btnRandom);

const generateRandomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const divColors = document.querySelectorAll('.color');
const firstColorBlack = document.querySelector('.color');
divColors[0].style.backgroundColor = '#000';
for (let index = 1; index < divColors.length; index += 1) {
  const divColor = divColors[index];
  divColor.style.backgroundColor = generateRandomColor();
}
firstColorBlack.classList.add('selected')
btnRandom.addEventListener('click', () => {
  for (let index = 1; index < divColors.length; index += 1) {
    const divColor = divColors[index];
    divColor.style.backgroundColor = generateRandomColor();
  } const arrayOfColors = [];
  for (let index = 0; index < divColors.length; index += 1) {
    arrayOfColors[index] = divColors[index].style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify(arrayOfColors));
  }
})

// Requisito 5
const colorAttribute = () => {
  const colorString = localStorage.getItem('colorPalette');
  const arrayColor = JSON.parse(colorString);
  if (colorString) {
    for (let index = 0; index < divColors.length; index += 1) {
      divColors[index].style.backgroundColor = arrayColor[index]
    }
  }
}
colorAttribute();

// Requisito 6
const pixelBoard = document.createElement('div');
pixelBoard.setAttribute('id', 'pixel-board');
const creatPixelBoard = (numberOfPixels) => {
  for (let row = 0; row < numberOfPixels; row += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine'
    for (let pixel = 0; pixel < numberOfPixels; pixel += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
}
main.appendChild(pixelBoard);


// Requisito 9
const colorizePixels = () => {
  for (const color of divColors) {
    color.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
}

// Requisito 10
const pixelLine = document.querySelectorAll('.pixel');
pixelBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    let selectedColor = document.querySelector('.selected')
    const backgroundColor = selectedColor.style.backgroundColor
    event.target.style.backgroundColor = backgroundColor;
    savedPixelColor();
  }
})

// Requisito 11
const buttonClear = () => {
  const btnClear = document.createElement('button');
  const btnClearSection = document.querySelector('.btn-clear')
  btnClear.setAttribute('id', 'clear-board');
  btnClear.innerText = 'Limpar';
  btnClearSection.appendChild(btnClear);
  btnClear.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    for (let pixel = 0; pixel < pixels.length; pixel += 1) {
      const element = pixels[pixel];
      element.style.backgroundColor = 'white';
    }
    savedPixelColor();
  })
}

// Requisito 12
const savedPixelColor = () => {
  const pixels = document.querySelectorAll('.pixel');
  const arrayPixels = [];
  for (let index = 0; index < pixels.length; index += 1) {
    arrayPixels.push(pixels[index].style.backgroundColor)
    if (pixels[index].style.backgroundColor === '') {
      arrayPixels[index] = 'white'
    }
  }
  localStorage.setItem('pixelBoard', JSON.stringify(arrayPixels))
}

const recoverPixelColor = () => {
  const storagePixel = localStorage.getItem('pixelBoard')
  const arrayOfPixelColor = JSON.parse(storagePixel)
  if (arrayOfPixelColor) {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = arrayOfPixelColor[index];
    }
  }
}

// Requisito 13
const inputNumber = document.createElement('input');
const btnInput = document.createElement('button');
const sectionBtnInput = document.querySelector('#btnInputPixels');
inputNumber.setAttribute('id', 'board-size');
btnInput.setAttribute('id', 'generate-board');
btnInput.innerText = 'VQV';
inputNumber.setAttribute('min', '1');
inputNumber.setAttribute('type', 'number');
sectionBtnInput.appendChild(inputNumber);
sectionBtnInput.appendChild(btnInput);
btnInput.addEventListener('click', () => {
  let numberInput = parseInt(inputNumber.value);
  if (numberInput > 50) {
    numberInput = 50
  }
  if (numberInput > 0) {
    if (numberInput < 5) numberInput = 5
    pixelBoard.innerHTML = '';
    creatPixelBoard(numberInput);
    localStorage.setItem('boardSize', numberInput);
  } else {
    alert("Board inválido!");
  }
})



// Requisito 15
const sizeBoardString = localStorage.getItem('boardSize');
const sizeBoardNumber = parseInt(sizeBoardString);
if (sizeBoardString) {
  creatPixelBoard(sizeBoardNumber);
} else {
  creatPixelBoard(5);
}

// Functions
recoverPixelColor();
buttonClear();
colorizePixels();