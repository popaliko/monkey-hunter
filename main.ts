controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monkey.vy == 0) {
        monkey.vy += -225
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles8, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let monkey: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
monkey = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(monkey, 100, 0)
monkey.ay = 500
scene.centerCameraAt(monkey.x, monkey.y)
scene.cameraFollowSprite(monkey)
tiles.placeOnTile(monkey, tiles.getTileLocation(0, 251))
let Fire = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 4 . . . . . 
    . . . . 2 . . . . 4 4 . . . . . 
    . . . . 2 4 . . 4 5 4 . . . . . 
    . . . . . 2 4 d 5 5 4 . . . . . 
    . . . . . 2 5 5 5 5 4 . . . . . 
    . . . . . . 2 5 5 5 5 4 . . . . 
    . . . . . . 2 5 4 2 4 4 . . . . 
    . . . . . . 4 4 . . 2 4 4 . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Fire.follow(monkey, 30)
tiles.placeOnTile(Fire, tiles.getTileLocation(16, 255))
