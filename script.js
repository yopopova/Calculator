const calculator = document.getElementById('calculator');
let display = document.getElementById('screen');

function render() {
    const cBtn = createButton('button', 'C', 'symbol');
    cBtn.addEventListener('click', wipe);

    const delBtn = createButton('button', 'DEL', 'symbol');
    delBtn.addEventListener('click', wipe);

    const divisionBtn = createButton('button', '/', 'symbol');
    divisionBtn.addEventListener('click', show);

    const multiplicationBtn = createButton('button', '*', 'symbol');
    multiplicationBtn.addEventListener('click', show);

    const sevenBtn = createButton('button', '7', 'number');
    sevenBtn.addEventListener('click', show);

    const eightBtn = createButton('button', '8', 'number');
    eightBtn.addEventListener('click', show);

    const nineBtn = createButton('button', '9', 'number');
    nineBtn.addEventListener('click', show);

    const subtractionBtn = createButton('button', '-', 'symbol');
    subtractionBtn.addEventListener('click', show);

    const fourBtn = createButton('button', '4', 'number');
    fourBtn.addEventListener('click', show);

    const fiveBtn = createButton('button', '5', 'number');
    fiveBtn.addEventListener('click', show);

    const sixBtn = createButton('button', '6', 'number');
    sixBtn.addEventListener('click', show);

    const addBtn = createButton('button', '+', 'symbol');
    addBtn.addEventListener('click', show);

    const oneBtn = createButton('button', '1', 'number');
    oneBtn.addEventListener('click', show);

    const twoBtn = createButton('button', '2', 'number');
    twoBtn.addEventListener('click', show);

    const threeBtn = createButton('button', '3', 'number');
    threeBtn.addEventListener('click', show);

    const dotBtn = createButton('button', '.', 'symbol');
    dotBtn.addEventListener('click', show);

    const leftBracketBtn = createButton('button', '(', 'number');
    leftBracketBtn.addEventListener('click', show);

    const zeroBtn = createButton('button', '0', 'number');
    zeroBtn.addEventListener('click', show);
}

function createButton(tag, content, className) {
    const element = document.createElement(tag);
    element.textContent = content;
    element.classList.add(className);
    calculator.appendChild(element);
    return element;
}

render();