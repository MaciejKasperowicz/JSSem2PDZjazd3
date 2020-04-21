"use strict";

module.exports = class RookProperMoves {
    constructor(startingPosition) {
        this.startingPosition = startingPosition;
    }
    setRookProperMoves() {
        const possibleMoves = [];
        const row = this.startingPosition[0];
        const column = this.startingPosition[1]
        for (let i = 0; i <= 7; i++) {
            possibleMoves.push([row, i], [i, column]);
        }

        const properMoves = [];
        possibleMoves.forEach(position => {
            if ((position[0] !== row || position[1] !== column)) {
                properMoves.push(position);
            }
        })
        return properMoves;
    }
}