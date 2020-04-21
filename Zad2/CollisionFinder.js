"use strict";

module.exports = class CollisionFinder {
    constructor(collisionPosition, chessPiecePosition, otherChessPieceRangeOfMotion) {
        this.collisionPosition = collisionPosition;
        this.chessPiecePosition = chessPiecePosition;
        this.otherChessPieceRangeOfMotion = otherChessPieceRangeOfMotion
    }
    findCollision() {
        let foundPosition;
        this.otherChessPieceRangeOfMotion.forEach(motion => {
            if (motion[0] === this.chessPiecePosition[0] && motion[1] ===
                this.chessPiecePosition[1]) {
                this.collisionPosition.push(this.chessPiecePosition);
                foundPosition = this.chessPiecePosition;
            }
        })
        return foundPosition;
    }
}