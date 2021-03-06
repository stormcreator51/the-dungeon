scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    game.over(true, effects.confetti)
    game.over(false, effects.melt)
})
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile7)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
forever(function () {
    music.spooky.playUntilDone()
    music.footstep.playUntilDone()
    music.setVolume(100)
    effects.blizzard.startScreenEffect()
    scene.cameraShake(6, 1000)
})
