const btn = document.querySelector('#change_color');
const container = document.querySelector('#container');
const color = document.querySelector('#color');

btn.addEventListener('click', changeColor);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomHex() {
    const possibleValues = '0123456789ABCDEF';

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += possibleValues.substr(getRandomInt(possibleValues.length), 1);
    }

    return hexColor;
}

function invertHexColor(hexCode) {
    let newHex = '#';

    const possibleValues = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        const newIndex = -possibleValues.indexOf(hexCode[i]) + possibleValues.length - 1;
        newHex += possibleValues[newIndex];
    }

    return newHex;
}

function changeColor() {
    const newColor = generateRandomHex();

    container.style.backgroundColor = newColor;
    color.innerHTML = newColor;
    color.style.color = invertHexColor(newColor.replace('#', ''));
}