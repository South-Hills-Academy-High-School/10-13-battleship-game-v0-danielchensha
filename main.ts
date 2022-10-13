function mobeBoat (boatArray: Sprite[]) {
    if (grid.spriteCol(cursor) == 6) {
        grid.move(cursor, 0, -1)
    }
    itrator = 0
    cursor.setFlag(SpriteFlag.Invisible, true)
    for (let value of boatArray) {
        grid.place(value, tiles.getTileLocation(grid.spriteCol(cursor), grid.spriteRow(cursor) + itrator))
        itrator += 1
    }
    if (controller.A.isPressed()) {
        cursor.setFlag(SpriteFlag.Invisible, false)
        moveBoatFlag = 0
    }
}
let itrator = 0
let cursor: Sprite = null
let moveBoatFlag = 0
moveBoatFlag = 1
tiles.setCurrentTilemap(tilemap`level1`)
cursor = sprites.create(img`
    1 1 1 1 1 . . . . . . 1 1 1 1 1 
    1 1 1 . . . . . . . . . . 1 1 1 
    1 1 . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 . . . . . . . . . . . . 1 1 
    1 1 1 . . . . . . . . . . 1 1 1 
    1 1 1 1 1 . . . . . . 1 1 1 1 1 
    `, SpriteKind.Player)
grid.snap(cursor)
grid.moveWithButtons(cursor)
let smallBoatArray = [sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Player), sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Player)]
game.onUpdate(function () {
    if (moveBoatFlag == 1) {
        mobeBoat(smallBoatArray)
    }
})
