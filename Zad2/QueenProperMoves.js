//queen = rook + bishop;
"use strict";

const RookProperMoves = require("./RookProperMoves");
const BishopProperMoves = require("./BishopProperMoves");

module.exports = class QueenProperMoves {
    constructor(startingPosition) {
        this.startingPosition = startingPosition;
    }
    setQueenProperMoves() {
        const properMoves = new RookProperMoves(this.startingPosition).setRookProperMoves()
            .concat(new BishopProperMoves(this.startingPosition).setBishopProperMoves());
        return properMoves;
    }
}
