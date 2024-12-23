
        const display = document.getElementById('display');

        function appendNumber(number) {
            display.value += number;
        }

        function appendOperator(operator) {
            const lastChar = display.value.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) return;
            display.value += operator;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }