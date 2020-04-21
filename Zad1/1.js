// +-------------------------+
// ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
// +----+----+----+----+-----¦
// ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
// +----+----+----+----+-----¦
// ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
// +----+----+----+----+-----¦
// ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
// +----+----+----+----+-----¦
// ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
// +-------------------------+

//1)	Do you like treasure hunts? In this problem you are to write a program 
//to explore the above array for a treasure. The values in the array are clues. 
//Each cell contains an integer between 11 and 55; 
//for each value the ten's digit represents the row number 
//and the unit's digit represents the column number of the cell containing the next clue. 
//Starting in the upper left corner (at 1,1), use the clues 
//to guide your search of the array. (The first three clues are 11, 34, 42). 
//The treasure is a cell whose value is the same as its coordinates. 
//Your program should output the cells it visits during its search, 
//and a message indicating where you found the treasure.
'use strict';
const board = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];



class ValueFinder {
    constructor(array, row, col) {
        this.array = array;
        this.row = row;
        this.col = col;
    }
    findValue() {
        const value = [...this.array[this.row - 1][this.col - 1].toString()];
        return value;
    }
}
let currentPosition = [1, 1];
let currentValue = new ValueFinder(board, currentPosition[0], currentPosition[1]).findValue();


class ValueToPositionComperator {
    constructor() { }
    compareValueToPosition() {
        console.log(`I'm on position: (${currentPosition}) with value ${currentValue.join("")}.`);
        if (currentPosition.join("") === currentValue.join("")) {
            console.log(`I find treasure on position: (${currentPosition}) with value ${currentValue.join("")}.`);
        } else {
            currentPosition = currentValue;
            currentValue = new ValueFinder(board, currentPosition[0], currentPosition[1]).findValue();

            this.compareValueToPosition();
        }
    }

}
let valueToPositionComperator = new ValueToPositionComperator();
valueToPositionComperator.compareValueToPosition();