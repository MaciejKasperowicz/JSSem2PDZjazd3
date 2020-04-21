// 2)	Chess board. Program is to choose at random one of the chess piece (except the pawn)
//and place it at the random spot on the board. After placing any piece (except first one) 
//check all present pieces move ranges and see if any can reach other piece. 
//Is so Give that pieces position and quit program. 
//FACTORY (with class hierarhy) + SINGLETON pattern.
"use strict";

const FinalResult = require("./FinalResult");
const drawResults = [];
const drawnPositions = [];
const collisionPosition = [];

const finalResult = new FinalResult(drawnPositions, drawResults, collisionPosition);
finalResult.findFinalResult();

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(drawResults);
//drawResults logowac, aby sprawdzic wszystkie wylosowane figury
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!