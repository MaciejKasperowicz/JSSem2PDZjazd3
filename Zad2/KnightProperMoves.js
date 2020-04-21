"use strict";

const ProperMoves = require("./ProperMoves");
module.exports = class KnightProperMoves {
    constructor(startingPosition) {
        this.startingPosition = startingPosition;
    }
    setKnightProperMoves() {
        const knightMoves = [];
        for (let i = 1; i < 2; i++) {
            const a = this.startingPosition[0];
            const b = this.startingPosition[1];
            knightMoves.push(
                [a - 2 * i, b - i], [a - 2 * i, b + i],
                [a - i, b - 2 * i], [a - i, b + 2 * i],
                [a + i, b - 2 * i], [a + i, b + 2 * i],
                [a + 2 * i, b - i], [a + 2 * i, b + i]
            );
        };
        const properMoves = new ProperMoves(knightMoves).setProperMoves();
        return properMoves
    }
}