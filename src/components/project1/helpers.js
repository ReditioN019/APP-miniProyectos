
export const validaOperadores = (valueKey) => /[+/*-.]/.test(valueKey)

export const validateOperadoresBasicos = (valueKey) => /[+/*-]/.test(valueKey)

export function evaluaArimetica(fn) { return new Function('return ' + fn)(); }

//Valida que solo se puede ingresar un punto entre dos numeros por cada grupo de numeros que esten entre simbolos especiales (+-*/)
export const validateDotOperation = (valorArr, inputValue) => {
    const existSpecialCharacter = valorArr.some(item => /[+/*-]/.test(item))

    if (existSpecialCharacter) {
        let newArr = [] //Nuevo array tras simbolo especial (+-*/)
        const characterList = ['-', '*', '+', '/'];
        //recorro lista para obtener el último caracter especial ingresado
        const indexList = characterList.map(item => inputValue.lastIndexOf(item))
        //a partir de ese último caracter especial ingresado, se crea un nuevo arreglo.
        newArr = valorArr.slice(Math.max(...indexList) + 1);

        let count = 0;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === '.') count++;
            if (count === 2) return -1;
        }
    } else {
        let count = 0;
        for (let i = 0; i < valorArr.length; i++) {
            if (valorArr[i] === '.') count++;
            if (count === 2) return -1;
        }
    }
}

export const specialActions = (key, inputValue, setInputValue) => {
    switch (key) {
        case 'CE': return setInputValue('0');
        case 'C':
            if (inputValue.toString().length === 1) return setInputValue('0')
            else return setInputValue(inputValue.toString().slice(0, - 1))
        case '+/-':
            const cambioSigno = parseInt(inputValue * -1);
            if (!isNaN(cambioSigno)) return setInputValue(cambioSigno.toString());
            return inputValue.toString();
        case '%':
            let re = /[+/*]/;
            if (re.test(inputValue) || inputValue.endsWith('-')) return;
            const cambioAInt = parseInt(inputValue) / 100
            return setInputValue(cambioAInt.toString())
        default:
            return;
    }
}