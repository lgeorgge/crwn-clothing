import { useState } from 'react';
import './trial.styles.scss';

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleNumber = (number) => {
        if (display === '0') {
            setDisplay(number);
        } else {
            setDisplay(display + number);
        }
    };

    const handleOperator = (operator) => {
        setEquation(display + ' ' + operator + ' ');
        setDisplay('0');
    };

    const handleEqual = () => {
        try {
            const result = eval(equation + display);
            setDisplay(result.toString());
            setEquation('');
        } catch (error) {
            setDisplay('Error');
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="equation">{equation}</div>
                <div className="current">{display}</div>
            </div>
            <div className="buttons">
                <button onClick={handleClear} className="clear">C</button>
                <button onClick={handleEqual} className="equals">=</button>


                <button onClick={() => handleOperator('/')} className="operator">÷</button>
                <button onClick={() => handleOperator('*')} className="operator">×</button>
                <button onClick={() => handleNumber('7')}>7</button>
                <button onClick={() => handleNumber('8')}>8</button>
                <button onClick={() => handleNumber('9')}>9</button>
                <button onClick={() => handleOperator('-')} className="operator">-</button>
                <button onClick={() => handleNumber('4')}>4</button>
                <button onClick={() => handleNumber('5')}>5</button>
                <button onClick={() => handleNumber('6')}>6</button>

                <button onClick={() => handleOperator('+')} className="operator">+</button>
                <button onClick={() => handleNumber('1')}>1</button>
                <button onClick={() => handleNumber('2')}>2</button>
                <button onClick={() => handleNumber('3')}>3</button>

                <button onClick={() => handleNumber('0')} className="zero">0</button>
                <button onClick={() => handleNumber('.')}>.</button>

            </div>
        </div>
    );
}

export default Calculator;