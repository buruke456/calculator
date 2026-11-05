let expression = '';
const display = document.getElementById('display');
function appendValue(value) {

    expression = expression + value;

    display.textContent = expression;
}
function clearCalculator() {

    expression = '';

    display.textContent = '0';
}
function deleteLast() {

    expression = expression.slice(0, -1);

    if (expression === '') {

        display.textContent = '0';

    } else {

        display.textContent = expression;

    }
}
function calculate() {
    if (expression === '') {
        return;
    }
    const allowed = /^[0-9+\-*/%.() ]+$/;

    if (!allowed.test(expression)) {

        display.textContent = 'Error';
        expression = '';

        return;
    }

    try{
        const result = eval(expression);

        // Check whether the result is valid
        if (!Number.isFinite(result)) {

            display.textContent = 'Error';
            expression = '';

            return;
        }
        expression = String(result);

        display.textContent = expression;

    } catch (error) {
        display.textContent = 'Error';

        expression = '';

    }
}
