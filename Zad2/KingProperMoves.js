"use strict";

const ProperMoves = require("./ProperMoves");
module.exports = class KingProperMoves {
    constructor(startingPosition) {
        this.startingPosition = startingPosition;
    }
    setKingProperMoves() {
        const kingFirstMove = [this.startingPosition[0] - 1, this.startingPosition[1] - 1];
        const kingMoves = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const x = kingFirstMove[0] + i;
                const y = kingFirstMove[1] + j;
                if (x !== this.startingPosition[0] || y !== this.startingPosition[1]) {
                    kingMoves.push([x, y]);
                }
            }
        }
        const properMoves = new ProperMoves(kingMoves).setProperMoves();
        return properMoves
    }
}
