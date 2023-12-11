basic.showString("hi", 600)
basic.showLeds(`
    # . # . #
    . # . # .
    # . . . #
    . # . # .
    # . # . #
    `)
music.playMelody("B F E A B B D B ", 120)
basic.setLedColor(0xff0000)
basic.showIcon(IconNames.Pitchfork, 600)
basic.setLedColor(0x000000)
basic.showLeds(`
    # # # # #
    # . . . .
    # . # # #
    # . # . .
    # . # . #
    `)
basic.showString("yoo")
basic.showString("sebi baby baby")
basic.showString("" + (randint(0, 10)))
basic.showString("" + (randint(0, 100)))
basic.showLeds(`
    # . # . #
    # . # . #
    # # # # #
    # . # . #
    # . # . #
    `)
basic.showString("sebi babyyyyy ")
basic.setLedColor(0x999999)
led.plotBarGraph(
3,
2
)
basic.showString("" + (images.createImage(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)))
basic.showString("" + (images.createImage(`
    # . . # #
    # # . # #
    # # # . .
    # # # # .
    # # # # #
    `)))
basic.setLedColor(0xffffff)
basic.showLeds(`
    # # # # #
    # # . # #
    # . # . #
    # # . # #
    # # # # #
    `)
music.playMelody("C5 F C5 B G A C G ", 120)
music.playMelody("G G E A G G E G ", 120)
basic.showLeds(`
    # . # . #
    . # . # .
    . . . . .
    . # . # .
    # . # . #
    `)
basic.setLedColor(0x000000)
basic.showLeds(`
    . . . . .
    . . . # .
    # # # . .
    # . # # #
    # # # # #
    `)
basic.setLedColor(0xff8000)
basic.showLeds(`
    # # # . #
    . . # # .
    # . # # #
    . . # # .
    # # # . #
    `)
basic.forever(function () {
	
})
