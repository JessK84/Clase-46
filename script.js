//   Calculadora de strings
// Permitir a la función aceptar otros delimitadores en vez de coma
// el delimitador se pasa por parámetro
// el delimitador es opcional
// el delimitador por defecto es una coma

// si hay más de un número negativo, debe indicarlos a todos en el error
// Números mayores a 1000 deben ser ignorados


const getSum = (srt, delimitador = (", ")) =>{
    let number= srt.split(`${delimitador}`)
    let result=0
    const resultNegative = [];
    
    for (let i = 0; i < number.length; i++) {
        let numbers= Number(number[i])
        result+=numbers >= 1000 ? 0 : numbers
        
        if(numbers < 0 ){     
            resultNegative.push(number[i])
            console.log(resultNegative) 
        } 
    }
    if(resultNegative.length > 0) {
        throw new Error(`No admite valores negativos ${resultNegative}`)
    } else {
        return result 
    }
}


const algoritmoDeLuhn = number =>{
    let numbers = number.split("-").join("").split("").reverse()
    let result =[]
    let total= 0
    let valid =false

    for (let i = 0; i < numbers.length; i++) {
        let serieNumber =  Number(numbers[i])
        if (i % 2 === 1) {
            result.push(serieNumber * 2)        
        }  else {
            result.push(serieNumber)       
        } 
    }
    for (let i = 0; i < result.length; i++) {
        if(result[i]> 9 ){
            result[i]= result[i]-9
        }
            total+=result[i] 
    }

        valid = total % 10 === 0 ? true : false
    
    return valid
}


const verificadoraDeTarjeta = numeros => {

    const verificaAlgoritoDeLuhn = algoritmoDeLuhn(numeros)
    let numerosTarjeta = numeros.split("-").join("").split("")
    console.log(numerosTarjeta)

    if (verificaAlgoritoDeLuhn) {
            // console.log(numerosTarjeta.length)

            if (numerosTarjeta.length === 15) {
                if ((numerosTarjeta[0] ==="3" 
                && numerosTarjeta[1] === "4") ||
                (numerosTarjeta[0] ==="3" 
                && numerosTarjeta[1] === "7")){
                    return "AmericanExpress"
                }
     
            } else if (numerosTarjeta.length === 13) {
                if(numerosTarjeta[0] === "4") {
                    return "Visa"
                }
            }  
                else if (numerosTarjeta.length === 16) {
                    if((numerosTarjeta[0] === "5"
                    && numerosTarjeta[1]=== "1") ||
                    (numerosTarjeta[0] === "5"
                    && numerosTarjeta[1]=== "2") ||
                    (numerosTarjeta[0]=== "5"
                    && numerosTarjeta[1]=== "3") ||
                    (numerosTarjeta[0] === "5"
                    && numerosTarjeta[1]=== "4") ||
                    (numerosTarjeta[0] === "5"
                    && numerosTarjeta[1]=== "5")) {
                     return "Mastercard"
                } 
                    else if (numerosTarjeta[0]=== "4") {
                        return "Visa"
                }
            }        
        }
        return "Invalid" 
}


