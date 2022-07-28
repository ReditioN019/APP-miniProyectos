import { useState } from 'react';
import { CgMathEqual, CgMathPercent } from 'react-icons/cg';
import { TbLetterC } from 'react-icons/tb';
import './index.css'

function evaluaArimetica(fn) {
    return new Function('return ' + fn)();
}
// console.log( evaluaArimetica('12/5*9+9.4*2') );

export const Calculadora = () => {

    const [inputValue, setInputValue] = useState('0');

    const handleClick = ({ target }) => {
        if (inputValue == '0'){
            return setInputValue(target.getAttribute('name'))
        }

        setInputValue(inputValue + target.getAttribute('name'))
    }


    const handleClickSpecial = key => {
        switch (key) {
            case 'CE':
                return setInputValue('0');
            case 'C':
                // return setInputValue({ value: value.slice(0, -1) })
                return setInputValue(value.substring(0, value.length - 1))
            default:
                return;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue(evaluaArimetica(inputValue))
        // console.clear();
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
                        <button className="col tecla-2" onClick={() => handleClick()}><CgMathPercent /></button>
                        <button className="col tecla-2" onClick={() => handleClickSpecial('CE')}>CE</button>
                        <div className="col tecla-2" onClick={() => handleClick('C')}><TbLetterC /></div>
                        <button className="col tecla-2" name="/" onClick={handleClick}>/</button>
                    </div>
                    <div className="row">
                        <div className="col tecla" name='7' onClick={handleClick}>7</div>
                        <div className="col tecla" name='8' onClick={handleClick}>8</div>
                        <div className="col tecla" name='9' onClick={handleClick}>9</div>
                        <button className="col tecla-2 fw-bolder" name="*" onClick={handleClick}>x</button>
                    </div>
                    <div className="row">
                        <div className="col tecla" name='4' onClick={handleClick}>4</div>
                        <div className="col tecla" name='5' onClick={handleClick}>5</div>
                        <div className="col tecla" name='6' onClick={handleClick}>6</div>
                        <button className="col tecla-2 fw-bolder" name="-" onClick={handleClick}>-</button>
                    </div>
                    <div className="row">
                        <div className="col tecla" name='1' onClick={handleClick}>1</div>
                        <div className="col tecla" name='2' onClick={handleClick}>2</div>
                        <div className="col tecla" name='3' onClick={handleClick}>3</div>
                        <div className="col tecla-2 fw-bolder" name="+" onClick={handleClick}>+</div>
                    </div>
                    <div className="row">
                        <button className="col tecla-2" onClick={() => handleClick()}>+/-</button>
                        <div className="col tecla" name='0' onClick={handleClick}>0</div>
                        <button className="col tecla-2" onClick={() => handleClick()}>,</button>


                        <button type="submit" className="col tecla-3"><CgMathEqual /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
