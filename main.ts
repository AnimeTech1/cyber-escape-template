scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    game.showLongText("ΣΑ    2/3", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    game.showLongText("ΣΟΥ   1/3", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    game.showLongText("ΜΙ   3/3", DialogLayout.Bottom)
})
let seconds = 300
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
