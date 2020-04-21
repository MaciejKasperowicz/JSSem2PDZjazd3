"use strict";

const Draw = require("./Draw");
const CollisionFinder = require("./CollisionFinder");

module.exports = class FinalResult {
    constructor(drawnPositions, drawResults, collisionPosition) {
        this.drawnPositions = drawnPositions;
        this.drawResults = drawResults;
        this.collisionPosition = collisionPosition;
    }

    findFinalResult() {
        while (this.collisionPosition.length < 1) {
            new Draw(this.drawnPositions, this.drawResults).draw();
            const that = this;
            //przypisanie this do that, aby nie utracono wiazania 
            that.drawResults.forEach(function (result) {
                that.drawResults.forEach(function (element) {
                    const collisionPlace = new CollisionFinder(that.collisionPosition, result.position, element.rangeOfMotion).findCollision()
                    if (collisionPlace) {
                        console.log(`${element.chessPiece} on position [${element.position}]
                        with a range of motion:  ${JSON.stringify(element.rangeOfMotion)} 
                        takes ${result.chessPiece} on position [${result.position}].`)
                    }
                })
            })
        }
    }
}