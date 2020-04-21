"use strict";

const KingProperMoves = require("./KingProperMoves");
const QueenProperMoves = require("./QueenProperMoves");
const RookProperMoves = require("./RookProperMoves");
const BishopProperMoves = require("./BishopProperMoves");
const KnightProperMoves = require("./KnightProperMoves");
const chessPieces = ["King", "Queen", "Rook", "Bishop", "Knight"];

const chessBoard = [
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x"]
];

const factory = (function () {
    class RandomPiece {
        constructor() { }
        findRandomPiece() {
            const randomNumber = Math.floor(Math.random() * chessPieces.length);
            const piece = chessPieces[randomNumber];
            return piece;
        }
    };

    class RandomPosition {
        constructor() { }
        findRandomPosition() {
            const randomRow = Math.floor(Math.random() * chessBoard.length);
            const randomCol = Math.floor(Math.random() * chessBoard.length);
            const position = [randomRow, randomCol];
            return position
        }
    };

    class MovesRange {
        constructor(pieceWithPosition) {
            this.pieceWithPosition = pieceWithPosition;
        }
        showMovesRange() {
            switch (this.pieceWithPosition.chessPiece) {
                case "King":
                    return new KingProperMoves(this.pieceWithPosition.position).setKingProperMoves();
                case "Queen":
                    return new QueenProperMoves(this.pieceWithPosition.position).setQueenProperMoves();
                case "Rook":
                    return new RookProperMoves(this.pieceWithPosition.position).setRookProperMoves();
                case "Bishop":
                    return new BishopProperMoves(this.pieceWithPosition.position).setBishopProperMoves();
                case "Knight":
                    return new KnightProperMoves(this.pieceWithPosition.position).setKnightProperMoves();
                default:
                    console.log("Error");
            }
        }
    }
    return {
        createRandomPieceWithPosition() {
            const chessPiece = new RandomPiece().findRandomPiece();
            const position = new RandomPosition().findRandomPosition();
            const piece = {
                chessPiece: chessPiece,
                position: position
            }
            return {
                chessPiece,
                position,
                rangeOfMotion: new MovesRange(piece).showMovesRange(),
            }
        }
    }
})();

module.exports = factory;