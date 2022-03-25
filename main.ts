basic.forever(function () {
    music.setVolume(127)
    if (input.temperature() > 10) {
        basic.showIcon(IconNames.Square)
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
    if (input.temperature() < 10) {
        basic.showIcon(IconNames.Chessboard)
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
})
