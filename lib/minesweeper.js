'use strict';

// PLAYER BOARD
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	var board = [];

	// for each row
	for (c_rows = 0; c_rows < numberOfRows; c_rows++) {
		var row = [];

		// for each column
		for (c_col = 0; c_col < numberOfColumns; c_col++) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

var printBoard = function printBoard(board) {
	// for (let i =0; i< board.length; i++){
	// 	console.log(board[i].join('|'));
	// }
	console.log(board.map(function (cell) {
		return cell.join('|');
	}).join('\n'));
};

// BOMB BOARD
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	var board = [];

	// for each row
	for (c_rows = 0; c_rows < numberOfRows; c_rows++) {
		var row = [];

		// for each column
		for (c_col = 0; c_col < numberOfColumns; c_col++) {
			row.push(null);
		}
		board.push(row);
	}

	var numberOfBombsPlaced = 0;
	var randomRowIndex = void 0;
	var randomColIndex = void 0;

	// place bombs
	while (numberOfBombsPlaced < numberOfBombs) {
		randomRowIndex = Math.floor(Math.random() * numberOfRows);
		randomColIndex = Math.floor(Math.random() * numberOfColumns);
		// prevent duplicate
		while (board[randomRowIndex][randomColIndex] == 'B') {
			randomRowIndex = Math.floor(Math.random() * numberOfRows);
			randomColIndex = Math.floor(Math.random() * numberOfColumns);
		}
		board[randomRowIndex][randomColIndex] = 'B';
		numberOfBombsPlaced++;
	}

	return board;
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 8);
console.log("Player board:");
printBoard(playerBoard);
console.log("Bomb board:");
printBoard(bombBoard);