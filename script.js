document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            if (e.target.dataset.value) {
                if (display.innerText === '0') {
                    display.innerText = e.target.dataset.value;
                } else {
                    display.innerText += e.target.dataset.value;
                }
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = 'Error';
        }
    });

    clearButton.addEventListener('click', () => {
        display.innerText = '0';
    });
});
