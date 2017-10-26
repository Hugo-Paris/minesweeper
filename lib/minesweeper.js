'use strict';

var printBoard = function printBoard(board) {

	console.log('current board:');
	console.log(board[0].join('|'));
	console.log(board[1].join('|'));
	console.log(board[2].join('|'));
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = 1;
board[1][2] = 'B';
printBoard(board);