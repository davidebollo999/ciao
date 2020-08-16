sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(1, 160), randint(1, 120))
})
scene.setBackgroundColor(10)
let Personaggio = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . . . . . . . . . 
    . . . f f f 2 2 f f f . . . . . . . . . . . . . 
    . . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
    . f f f e e e e e e f f f . . . . . . . . . . . 
    . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
    . f e 2 f f f f f f 2 e f . . . . . . . . . . . 
    . f f f f e e e e f f f f . . . . . . . . . . . 
    f f e f b f 4 4 f b f e f f . . . . . . . . . . 
    f e e 4 1 f 3 3 f 1 4 e e f . . . . . . . . . . 
    . f f f f 3 3 3 3 3 e e f . . . . . . . . . . . 
    f d d d d f 5 5 5 e e f . . . . . . . . . . . . 
    f b b b b f 2 5 5 2 f 4 e . . . . . . . . . . . 
    f b b b b f 2 5 5 2 f d 4 . . . . . . . . . . . 
    . f c c f 5 5 5 5 5 f 4 4 . . . . . . . . . . . 
    . . f f f f f f f f . . . . . . . . . . . . . . 
    . . . . f f . . f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Personaggio)
let gelato = sprites.create(img`
    . . . . . . . . . . . . 3 3 3 3 b b . . b b 3 3 3 3 3 . . . . . 
    . . . . . . . . 3 b b 3 e e e e d 3 b 3 7 7 d 7 7 7 d 3 3 . . . 
    . . . . . . . 3 b d d e e e e e d b d 7 7 d 7 7 7 7 7 7 7 3 . . 
    . . . . . . . b d d d d e e e e b d 7 7 d 7 7 7 d d 7 7 7 7 3 . 
    . . . . . . 3 d e e e d d e e e b 7 7 d 7 7 7 d d 3 3 d 7 7 d 3 
    . . . . . . 3 d e e e e e d d e e 7 7 d 7 7 7 d 7 7 d 3 3 7 7 3 
    . . . . b b 3 d e e e e e e d d e e d d 7 7 7 7 7 d d 3 b 7 7 b 
    . . . b 3 d 3 d d e e e e e e d d e e d d 7 7 d 7 d d d b b d b 
    . . . 3 d d d 3 e d e e e e e e d d e e 3 d d d d d d d b . b . 
    . . 3 3 3 3 3 3 d e d d d e e e e d d e e d d d d d d 3 3 . . . 
    . . 3 3 3 3 3 3 3 e e e e d d e e e d d e e e e d d 3 3 e 3 . . 
    . . b d d d 3 3 3 3 d d d e e d d e e e d e e e e e e e e 3 . . 
    . . 3 3 3 d d d 3 3 3 d d d e e e d d e e d d d e e e e d d b . 
    . . 3 3 3 3 3 d d 3 3 3 d d d d e e d d e e e d d d d d d d b . 
    . . . b d 3 3 3 3 d 3 3 3 3 d d d e e d d e e e e e e e d 3 b . 
    . . . 4 d d 3 3 3 3 d 3 3 3 3 d d d e e d d d e e e d 3 3 3 b . 
    . . 4 d b d d d d 3 3 d 3 3 3 3 3 d d d d d d d d d d d d b . . 
    . 4 d d b d d d d d 3 3 d 3 3 3 d 3 3 d d d d d d d d d 3 b . . 
    . 4 d d d b 3 3 d d d 3 3 d d 3 3 3 d 3 3 3 d d d d 3 b b . . . 
    . 4 d d 5 5 b 3 3 3 d 3 3 d d 3 3 3 3 3 d 3 3 3 3 b b b . . . . 
    . 4 4 5 5 5 5 b 3 3 3 d 3 3 d d d d 3 3 3 3 3 3 d d b . . . . . 
    . 4 4 5 5 5 5 5 b d 3 d 3 3 3 d d d d d d d d d d d 3 . . . . . 
    . 4 5 4 5 5 5 5 5 b b 3 d 3 3 3 3 d d d d d d d 3 3 3 . . . . . 
    . 4 5 5 4 5 5 5 5 5 5 b 3 3 3 d 3 3 3 3 3 3 3 3 3 3 . . . . . . 
    4 5 5 5 5 4 5 5 5 5 5 5 b b b 3 3 d 3 3 3 3 3 d 3 3 . . . . . . 
    4 d 5 5 5 5 4 5 5 5 5 5 5 5 d b b b 3 d 3 3 d 3 3 . . . . . . . 
    4 d d 5 5 5 5 4 5 5 5 5 5 d d d d d 4 3 3 3 3 . . . . . . . . . 
    4 5 d d 5 5 5 5 4 4 d d d d d d d 4 . . . . . . . . . . . . . . 
    . 4 5 d d 5 5 5 5 d 4 4 d d d d 4 . . . . . . . . . . . . . . . 
    . . 4 5 d d 5 5 d d d d 4 4 4 4 . . . . . . . . . . . . . . . . 
    . . . 4 5 d d 5 5 4 4 4 . . . . . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
gelato.setPosition(11, 13)
info.startCountdown(60)
info.setScore(0)
info.setLife(3)
