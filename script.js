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
}

function createButton(tag, content, className) {
    const element = document.createElement(tag);
    element.textContent = content;
    element.classList.add(className);
    calculator.appendChild(element);
    return element;
}

render();