input.onButtonPressed(Button.A, function () {
    if (randint(0, 10) > 5) {
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        music.play(music.stringPlayable("G E F E D C C C ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (randint(0, 10) < 5) {
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        music.play(music.stringPlayable("G E F E D C C C ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
