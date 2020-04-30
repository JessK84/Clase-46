describe("getSum(str)", () => {
    it("Debe mostrar las suma de los números ingresados en un string separados por coma", () => {
      const srt = "2, 1, 2, 0"
      const srt1 = "3, 10, 5, 2"
      const resultado = getSum(srt)
      const resultado1 = getSum(srt1)

      expect(resultado).to.equal(5) // aserción
      expect(resultado1).to.equal(20) // aserción
    })

    it("Si el se ingresa un string vacío debe devolver cero(0)", () => {
        const srt = ""
        const resultado = getSum(srt)
  
        expect(resultado).to.equal(0) // aserción
 
})
    it("Si se ingresa un único valor, debe devolver como resultado ese mismo valor, lo que representa la suma de ese valor más cero(0)", () => {
        const srt = "14"
        const resultado = getSum(srt)

    expect(resultado).to.equal(14) // aserción

})
    it("Debe permitir ingresar una cantidad indefinida de números", () => {
        const srt = "14, 22, 75, 12, 4, 0, 54, 30, 22, 7, 89, 14, 22, 75, 12, 4, 0, 54, 30, 22, 7, 89"
        const resultado = getSum(srt)
    
        expect(resultado).to.equal(658) // aserción
    
    })     
 
    it("Si algún número es mayor o igual a 1000, debe ser ignorado, por lo tanto tendrán valor cero (0) para la suma", () => {
        const srt = "75, 512, 1004, 0, 22, 47, 389"   
        const srt1 = "75, 512, 999, 0, 22, 47, 389"   
        const result = getSum(srt)
        const result1 = getSum(srt1)

        expect(result).to.eql(1045) // aserción
        expect(result1).to.eql(2044) // aserción
    
})
    it("Debe arrojar un mensaje de error 'No acepta valores negativos' si se pasa un número negativo y debe mostrar además cuál es el número negativo", () => {
        const srt = "14, 22, 75, -12, 89"
        const fn = () =>{
            getSum(srt)
        }
    expect(fn).to.throw('No admite valores negativos -12') // aserción
})
 
    it("Debe arrojar un mensaje de error 'No acepta valores negativos' si se pasa más de un número negativo y debe mostrar además los números negativos ingresados", () => {
    const srt = "75, -12, 4, 0, 22, -7, -89"   
    const fn = () =>{
        getSum(srt)
    }
    expect(fn).to.throw("No admite valores negativos -12,-7,-89") // aserción

    })
}) 


describe("algoritmoDeLuhn(numbers)", () => {
    it("Debe permitir ingresar los 16 dígitos de una tarjeta de crédito separado por guiones cada 4 números", () => {
        const number =  "4012-8888-8888-1881"
        const numbers  = number.split("-").join("").split("").join(" ")

      expect(numbers).to.eql("4 0 1 2 8 8 8 8 8 8 8 8 1 8 8 1") // aserción
    })
 
    
    it("Debe mostrar un cartel de true o false si el número ingresado es válido", () => {
        const number = "4517-6601-3066-7800"
        const numbers  = algoritmoDeLuhn(number)
        const number1 = "4517-6601-3066-7809"
        const numbers1  = algoritmoDeLuhn(number1)

      expect(numbers).to.be.true // aserción
      expect(numbers1).to.be.false // aserción
    })

}) 


describe("verificadoraDeTarjeta(numeros)", () => {
    it("Debe permitir ingresar un string y veriificar que sea un número válido de Luhn", () => {
        const numero =  "4517-6601-3066-7800"
        const numeros  = algoritmoDeLuhn(numero)
        const numero1 = "4517-6601-3066-7809"
        const numeros1  = algoritmoDeLuhn(numero1)

      expect(numeros).to.be.true // aserción
      expect(numeros1).to.be.false // aserción
    })

    it("Debe mostrar un cartel con el nombre de la tarjeta", () => {
        const numero =  "4517-6601-3066-7800"
        const numeros  = verificadoraDeTarjeta(numero)
        const numero1 = "5436-0383-6994-1607"
        const numeros1  = verificadoraDeTarjeta(numero1)
        const numero2 = "3777-910209-51538"
        const numeros2  = verificadoraDeTarjeta(numero2)

      expect(numeros).to.eql("Visa")
      expect(numeros1).to.eql("Mastercard")
      expect(numeros2).to.eql("AmericanExpress")
    })
    
    it("Debe mostrar un cartel de 'Invalid' si el número ingresado no es correcto", () => {
        const numero =  "4517-6503-3036-7800"
        const numeros  = verificadoraDeTarjeta(numero)
        const numero1 =  "4517-6601-3066"
        const numeros1  = verificadoraDeTarjeta(numero1)

      expect(numeros).to.eql("Invalid")
      expect(numeros1).to.eql("Invalid")

    })
}) 



// Verificadora de tarjeta
// Crear una función que determine si una tarjeta es válida o no
// Debe permitir ingresar un string
// Debe verificar que el string sea un numero de Luhn valido



// Debe verificar que pertenezca a algún tipo de tarjeta, siguiendo las siguientes reglas:
// American Express: Comienza con 34 o 37, tiene 15 dígitos.
// Visa: Comienza con 4, tiene 13 o 16 dígitos.
// MasterCard: Comienza con 51, 52, 53, 54 o 55, tiene 16 dígitos.
// Debe devolver un string con el tipo de la tarjeta, o "invalid" si no es una tarjeta válida
// Números de tarjeta de prueba