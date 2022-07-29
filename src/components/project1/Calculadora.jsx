import { useState } from 'react';
import { CgMathEqual} from 'react-icons/cg';
import './index.css'

function evaluaArimetica(fn) { return new Function('return ' + fn)(); }

export const Calculadora = () => {

    const [inputValue, setInputValue] = useState('0');



    const handleClick = ({ target }) => {
        if (inputValue.length > 17) return;
        
        let valueKey = target.getAttribute('name');

        if (inputValue == '0' && valueKey === '+') return setInputValue('0');
        if (inputValue == '0' && valueKey === '-') return setInputValue('0');
        if (inputValue == '0' && valueKey === '*') return setInputValue('0');
        if (inputValue == '0' && valueKey === '/') return setInputValue('0');
        if (inputValue == '0' && valueKey === '.') return setInputValue('0');
        if (inputValue == '0') return setInputValue(valueKey);

        //obtengo el valor actual del input
        let valorInput = inputValue + valueKey
        //convierto el string en un array
        const valorArr = valorInput.split('');

        if(valueKey != '+' && valueKey != '-' && valueKey != '/' && valueKey != '*'){
            let count = 0;
            for (let i = 0; i < valorArr.length; i++) {
                if(valorArr[i] === '.') count++;
                if(count === 2) return;
            }
        }

        //Obtengo los dos ultimos elementos del array y los transformo a string
        let dosUltimosElementosArray = valorArr.slice(-2).join('');
        //comprobar que no existen solo valores != de numeros (+ - / *)
        let re = /\d/;
        const tieneUnNumbero = re.test(dosUltimosElementosArray);
        //Si no tiene ningún número, significa que hay dos simbolos, plt, return
        if (tieneUnNumbero) setInputValue(inputValue + valueKey)
    }



    const handleClickSpecial = key => {
        if(inputValue.toString() === '0') return

        switch (key) {
            case 'CE':
                return setInputValue('0');
            case 'C':
                if(inputValue.toString().length === 1) return setInputValue('0')  
                else return setInputValue(inputValue.toString().slice(0, - 1)) 
            case '+/-' :
                const cambioSigno = parseInt( inputValue * -1 );
                if(!isNaN(cambioSigno)) return setInputValue(cambioSigno.toString());   
                return inputValue.toString();     
            case '%':
                let re = /[+/*]/;
                if(re.test(inputValue) || inputValue.endsWith('-')) return;
                const cambioAInt = parseInt(inputValue)/100
                return setInputValue(cambioAInt.toString())      
            default:
                return;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault(); 
        setInputValue(evaluaArimetica(inputValue))
    }

    return (
        <div className="container">
            <h1>Calculadora</h1>
            <hr />

            <div className="row d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="text-center btns-calculadora col-12  col-md-6" >


                    <div type="text" className="form-control py-2 my-3 text-end fw-bolder fs-3"
                    >{inputValue}</div>


                    <div className="row">
                        <div className="col tecla-2 fw-bolder" onClick={() => handleClickSpecial('%')}>%</div>
                        <div className="col tecla-2 fw-bolder" onClick={() => handleClickSpecial('CE')}>CE</div>
                        <div className="col tecla-2 fw-bolder" onClick={() => handleClickSpecial('C')}>C</div>
                        <div className="col tecla-2 fw-bolder" name="/" onClick={handleClick}>/</div>
                    </div>
                    <div className="row">
                        <div className="col tecla" name='7' onClick={handleClick}>7</div>
                        <div className="col tecla" name='8' onClick={handleClick}>8</div>
                        <div className="col tecla" name='9' onClick={handleClick}>9</div>
                        <div className="col tecla-2 fw-bolder" name="*" onClick={handleClick}>x</div>
                    </div>
                    <div className="row">
                        <div className="col tecla" name='4' onClick={handleClick}>4</div>
                        <div className="col tecla" name='5' onClick={handleClick}>5</div>
                        <div className="col tecla" name='6' onClick={handleClick}>6</div>
                        <div className="col tecla-2 fw-bolder" name="-" onClick={handleClick}>-</div>
                    </div>
                    <div className="row">
                        <div className="col tecla" name='1' onClick={handleClick}>1</div>
                        <div className="col tecla" name='2' onClick={handleClick}>2</div>
                        <div className="col tecla" name='3' onClick={handleClick}>3</div>
                        <div className="col tecla-2 fw-bolder" name="+" onClick={handleClick}>+</div>
                    </div>
                    <div className="row">
                        <div className="col tecla-2 fw-bolder" onClick={() => handleClickSpecial('+/-')}>+/-</div>
                        <div className="col tecla" name='0' onClick={handleClick}>0</div>
                        <div className="col tecla-2 fw-bolder" name='.' onClick={handleClick}>.</div>


                        <button type="submit" className="col tecla-3"><CgMathEqual /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
