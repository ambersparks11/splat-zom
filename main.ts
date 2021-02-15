namespace SpriteKind {
    export const ink = SpriteKind.create()
    export const warriors = SpriteKind.create()
    export const mouse = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mouse.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        game.splash("splaoosh")
        tiles.placeOnRandomTile(shooter, sprites.builtin.brick)
    }
    if (mouse.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        game.splash("pew pew!")
        tiles.placeOnRandomTile(warrior, assets.tile`myTile4`)
    }
    tiles.placeOnRandomTile(ink_sac, assets.tile`transparency16`)
    if (mouse.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
    	
    }
})
function more_ink () {
    ink_sac = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . f f f 1 1 1 1 1 1 1 1 f f f . 
        f . . f 1 1 1 1 1 1 1 1 f . . f 
        f . . f 1 1 1 1 1 1 1 1 f . . f 
        f . . f 2 2 2 2 2 2 2 2 f . . f 
        f . . f 1 3 3 1 3 3 1 1 f . . f 
        f . . f 3 3 3 1 3 3 3 1 f . . f 
        f . . f f f 3 3 3 3 3 3 f . . f 
        f . . f 3 3 3 3 3 3 3 3 f . . f 
        f . . f f f f f 3 3 3 3 f . . f 
        f . . f 3 3 3 3 3 3 3 3 f . . f 
        . f . f f f f f f f f f f . f . 
        . . f . . . . . . . . . . f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.ink)
    tiles.placeOnRandomTile(ink_sac, sprites.builtin.brick)
}
let ink_sac: Sprite = null
let shooter: Sprite = null
let warrior: Sprite = null
let mouse: Sprite = null
mouse = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.mouse)
warrior = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 d 3 . . . . . . 
    . d d 3 3 3 3 d d d d . . . . . 
    d d d 3 3 3 3 d 1 f d . . . . . 
    . . d 3 3 3 3 d 1 f d . . . . . 
    . . . 3 3 3 3 d d d 3 . . . . . 
    . . . 3 3 2 3 . 1 d . 3 3 . . . 
    . . . 2 3 3 3 1 1 f d 3 7 3 . . 
    . . . 3 3 3 2 1 f f . 3 7 7 . . 
    . . . . 2 3 . 1 1 1 . . 4 4 . . 
    . . . . . . . d . d . . 4 4 4 . 
    . . . . . . . d . d . e 3 e 3 . 
    . . . . . . . . . . . 3 3 3 3 3 
    `, SpriteKind.warriors)
shooter = sprites.create(img`
    ...................
    ...................
    ...................
    ...3333333.........
    ...33333d3.........
    .dd3333dddd........
    ddd3333d1fd........
    ..d3333d1fd........
    ...3333ddd2337733..
    ...3323.1d.3377335.
    ...233311fd557733..
    ...33321ff.5.......
    ....23.111.........
    .......d.d.........
    .......d.d.........
    ...................
    `, SpriteKind.warriors)
let specal = sprites.create(img`
    ......3..3.........
    ..3.3..3.3.3.......
    ..3.3.3..3.........
    ...3333333.........
    ...33333d3.........
    .dd3333dddd........
    ddd3333d1fd........
    ..d3333d1fd........
    ...3333ddd2........
    ...3323.1d.........
    ...233311fd........
    ...33321ff.........
    ....23.111.........
    .......d.d.........
    .......d.d.........
    ...................
    `, SpriteKind.warriors)
controller.moveSprite(mouse)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mouse)
game.onUpdateInterval(5000, function () {
    more_ink()
})
