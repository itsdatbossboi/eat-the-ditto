namespace SpriteKind {
    export const powerup = SpriteKind.create()
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -5
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.bubbles)
    info.changeScoreBy(-3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    sprite.startEffect(effects.hearts, 100)
    otherSprite.destroy()
    music.magicWand.play()
    statusbar.value += 1
})
let projectile: Sprite = null
let choice = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
game.splash("Eat The Ditto", "Press A")
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 100)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f e e e f . . . . 
    . . . . . f f f e f e f . . . . 
    . . . . f f f f e f 3 f f . . . 
    . . . . f f f e e e e f f . . . 
    . . . . . f e e f e e f . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . e f e f . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . e . e . . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.max = 50
forever(function () {
    if (info.score() >= 100) {
        game.over(true)
    } else {
    	
    }
})
game.onUpdateInterval(500, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . d . 2 2 . . . . . . 
            . . 2 2 2 2 d 2 2 2 2 . . . . . 
            . . 2 2 2 2 d 2 2 2 2 . . . . . 
            . . 2 2 2 2 d 2 2 2 2 . . . . . 
            . . . . . 2 d 2 . . . . . . . . 
            . . . . 2 2 d 2 2 . . . . . . . 
            . . . . 2 2 d 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 55, 0)
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . 1 5 5 5 1 . . . . . . 
            . . . . 1 1 e e e 1 1 . . . . . 
            . . . . 1 1 5 5 5 1 1 . . . . . 
            . . . . . 1 e e e 1 . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            . . . . . 3 3 3 3 . . . . . . . 
            . . . . 3 f 3 3 f 3 . . . . . . 
            . . . 3 3 3 3 3 3 . . . . . . . 
            . . . . 3 3 3 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = randint(10, 110)
})
