"use strict";

module.exports = class ProperMoves {
    constructor(chessPieceMoves) {
        this.chessPieceMoves = chessPieceMoves
    }
    setProperMoves() {
        const properMoves = [];
        this.chessPieceMoves.forEach(element => {
            if (element[0] >= 0 && element[0] < 8 && element[1] >= 0 && element[1] < 8) {
                properMoves.push(element);
            }
        });
        return properMoves;
    }
}