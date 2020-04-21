"use strict";

const ProperMoves = require("./ProperMoves");
module.exports = class BishopProperMoves {
    constructor(startingPosition) {
        this.startingPosition = startingPosition;
    }
    setBishopProperMoves() {
        const bishopMoves = [];
        for (let i = 1; i <= 7; i++) {
            const a = this.startingPosition[0];
            const b = this.startingPosition[1];
            bishopMoves.push([a - i, b - i], [a + i, b - i], [a - i, b + i], [a + i, b + i]);
        }
        const properMoves = new ProperMoves(bishopMoves).setProperMoves();
        return properMoves;
    }
}

