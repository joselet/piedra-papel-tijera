let mano = 0
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    mano = randint(1, 3)
    if (mano == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (mano == 2) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (mano == 3) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
