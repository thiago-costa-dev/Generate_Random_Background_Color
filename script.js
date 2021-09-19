const btn = document.querySelector('#change_color');
const container = document.querySelector('#container');
const color = document.querySelector('#color');

btn.addEventListener('click', changeColor);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const hexFunctions = {
    possibleValues: '0123456789ABCDEF',

    generateRandomHex: function () {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += this.possibleValues.substr(getRandomInt(this.possibleValues.length), 1);
        }

        return hexColor;
    },
    
    invertHexColor: function (hexCode) {
        let newHex = '#';

        for (let i = 0; i < 6; i++) {
            const newIndex = -this.possibleValues.indexOf(hexCode[i]) + this.possibleValues.length - 1;
            newHex += this.possibleValues[newIndex];
        }

        return newHex;
    }
};

function changeColor() {
    const newColor = hexFunctions.generateRandomHex();

    container.style.backgroundColor = newColor;
    color.innerHTML = newColor;
    color.style.color = hexFunctions.invertHexColor(newColor.replace('#', ''));
}