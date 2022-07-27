import { useState } from 'react';
import { CgMathDivide, CgMathPlus, CgMathEqual, CgMathMinus, CgMathPercent } from 'react-icons/cg';
import { TbLetterX, TbLetterC, TbMath } from 'react-icons/tb';
import { BsXCircle } from 'react-icons/bs';
import './index.css'

export const Calculadora = () => {

    const [ inputValue, setInputValue ] = useState(0);

    const handleClick = (data) => {
        
        setInputValue(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Fooorm")
    }

    return (
        <div className="container">
            <h1>Calculadora</h1>
            <hr />

            <div className="row d-flex justify-content-center">
                <form onSubmit={handleSubmit}  className="text-center btns-calculadora col-12  col-md-6" >

                    
                    <div type="text" className="form-control py-2 my-3 text-end">{inputValue}</div>

                    <div className="row">
                        <div className="col tecla-2" onClick={() => handleClick()}><CgMathPercent /></div>
                        <div className="col tecla-2" onClick={() => handleClick(0)}>CE</div>
                        <div className="col tecla-2" onClick={() => handleClick()}><TbLetterC /></div>
                        <div className="col tecla-2" onClick={() => handleClick()}><BsXCircle /></div>
                    </div>

                    <div className="row">
                        <div className="col tecla-2" onClick={() => handleClick()}>1/x</div>
                        <div className="col tecla-2" onClick={() => handleClick()}>x^2  </div>
                        <div className="col tecla-2" onClick={() => handleClick()}><TbMath/></div>
                        <div className="col tecla-2" onClick={() => handleClick()}><CgMathDivide /></div>
                    </div>
                    <div className="row">
                        <div className="col tecla" onClick={() => handleClick(7)}>7</div>
                        <div className="col tecla" onClick={() => handleClick(8)}>8</div>
                        <div className="col tecla" onClick={() => handleClick(9)}>9</div>
                        <div className="col tecla-2" onClick={() => handleClick()}><TbLetterX /></div>
                    </div>
                    <div className="row">
                        <div className="col tecla" onClick={() => handleClick(4)}>4</div>
                        <div className="col tecla" onClick={() => handleClick(5)}>5</div>
                        <div className="col tecla" onClick={() => handleClick(6)}>6</div>
                        <div className="col tecla-2" onClick={() => handleClick()}><CgMathMinus /></div>
                    </div>
                    <div className="row">
                        <div className="col tecla" onClick={() => handleClick(1)}>1</div>
                        <div className="col tecla" onClick={() => handleClick(2)}>2</div>
                        <div className="col tecla" onClick={() => handleClick(3)}>3</div>
                        <div className="col tecla-2 onClick={() => handleClick()}"><CgMathPlus/></div>
                    </div>
                    <div className="row">
                        <div className="col tecla-2" onClick={() => handleClick()}>+/-</div>
                        <div className="col tecla" onClick={() => handleClick(0)}>0</div>
                        <div className="col tecla-2" onClick={() => handleClick()}>,</div>


                        <button type="submit" className="col tecla-3"><CgMathEqual /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
