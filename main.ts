let getal = 0
input.onButtonPressed(Button.A, function () {
    getal += -1
    basic.showNumber(getal)
})
input.onButtonPressed(Button.B, function () {
    getal += 1
    basic.showNumber(getal)
})
