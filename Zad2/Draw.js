"use strict";

const chessPieceFactory = require("./chessPieceFactory");

module.exports = class Draw {
    constructor(drawnPositions, drawResults) {
        this.drawnPositions = drawnPositions;
        this.drawResults = drawResults;
    }
    draw() {
        let randomChessPiece = chessPieceFactory.createRandomPieceWithPosition();
        this.drawnPositions.forEach((item) => {
            while (item[0] === randomChessPiece.position[0] && item[1] === randomChessPiece.position[1]) {
                randomChessPiece = chessPieceFactory.createRandomPieceWithPosition();
                //zabezpieczenie przed ustawieniem figury na zajetym juz polu
            }
        })
        this.drawnPositions.push(randomChessPiece.position);
        this.drawResults.push(randomChessPiece);
    }
};



