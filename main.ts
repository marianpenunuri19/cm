input.onButtonPressed(Button.A, function () {
    suma = numeo_1 + numero_2
    basic.showNumber(suma)
    texto = "sumaste"
})
input.onButtonPressed(Button.AB, function () {
    multiplicacion = numeo_1 * numero_2
    basic.showNumber(multiplicacion)
    texto = "multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    resta = numeo_1 - numero_2
    basic.showNumber(resta)
    texto = "restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(numeo_1)
    basic.showNumber(numero_2)
    basic.showString(texto)
})
let texto = ""
let multiplicacion = 0
let resta = 0
let suma = 0
let numero_2 = 0
let numeo_1 = 0
numeo_1 = randint(1, 5)
numero_2 = randint(1, 5)
suma = 0
resta = 0
multiplicacion = 0
texto = "ninguna"
basic.forever(function () {
	
})
