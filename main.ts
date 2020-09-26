basic.forever(function () {
    while (input.temperature() < 8) {
        basic.showString("TB")
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    while (input.temperature() > 30) {
        basic.showString("TA")
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("HA")
    }
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showString("HB")
    }
    basic.showIcon(IconNames.Yes)
})
