let medida = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
    medida = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(medida)
    if (medida < 5) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(200)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    } else {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        maqueen.motorStop(maqueen.Motors.All)
    }
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    if (medida < 10) {
    	
    }
    if (true) {
    	
    }
    basic.pause(2000)
})
control.inBackground(function () {
    basic.showNumber(medida)
})
