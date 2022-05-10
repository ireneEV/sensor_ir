let medida = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
basic.forever(function () {
    medida = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (medida < 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 53)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(200)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    }
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    if (medida < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 53)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
})
