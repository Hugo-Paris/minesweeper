
// PLAYER BOARD
let generatePlayerBoard = function(numberOfRows, numberOfColumns){
	let board = [];

	// for each row
	for (c_rows = 0; c_rows < numberOfRows; c_rows++){
		let row = [];
		
		// for each column
		for (c_col = 0; c_col < numberOfColumns; c_col++){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

let printBoard = function(board){
	// for (let i =0; i< board.length; i++){
	// 	console.log(board[i].join('|'));
	// }
	console.log((board.map(cell => cell.join('|'))).join('\n'));
};


// BOMB BOARD
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];

	// for each row
	for (c_rows = 0; c_rows < numberOfRows; c_rows++){
		let row = [];
		
		// for each column
		for (c_col = 0; c_col < numberOfColumns; c_col++){
			row.push(null);
		}
		board.push(row);
	}

	let numberOfBombsPlaced = 0;
	let randomRowIndex;
	let randomColIndex;
	
	// place bombs
	while (numberOfBombsPlaced < numberOfBombs){
		randomRowIndex = Math.floor(Math.random()*numberOfRows);
		randomColIndex = Math.floor(Math.random()*numberOfColumns);
		// prevent duplicate
		if(board[randomRowIndex][randomColIndex] != 'B'){
			board[randomRowIndex][randomColIndex] = 'B';
			numberOfBombsPlaced++;		
		}
	}

	return board;	
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, colIndex) => {
	const neighborOffsets =[ 	[-1, -1],
								[-1,  0],
								[-1,  1],
								[ 0, -1],
								[ 1, -1],
								[ 1,  0],
								[ 0,  1],
								[ 1,  1]
							];
	const numberOfRows 		= bombBoard.length;												
	const numberOfColumns 	= bombBoard[0].length;	
	let numberOfNighboringBombs = 0;			

	neighborOffsets.forEach(offset => {
		let neighborRowIndex = rowIndex + offset[0];
		let neighborColIndex = colIndex + offset[1];
		if( (neighborRowIndex>=0) && (neighborColIndex>=0) && (neighborRowIndex < numberOfRows) && (neighborColIndex < numberOfColumns) ){
			if (bombBoard[neighborRowIndex][neighborColIndex] === 'B'){
				numberOfNighboringBombs++;
			}
		}
	});	
	return numberOfNighboringBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, colIndex) => {
	// Has the specified tile already been flipped?
	// check that tile isn't emty
	if (playerBoard[rowIndex][colIndex] !== ' ' ){
		console.log('This tile has already been flipped')
		return;
	}
	// check that tile is bombed
	else if (bombBoard[rowIndex][colIndex] === 'B' ){
		playerBoard[rowIndex][colIndex] = 'B';
	}
	// return number of neighboring bombs
	else{
		playerBoard[rowIndex][colIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, colIndex);
	}
}


let playerBoard = generatePlayerBoard(3,4);
let bombBoard 	= generateBombBoard(3,4, 2);
console.log("Player board:");
printBoard(playerBoard);
console.log("Bomb board:");
printBoard(bombBoard);

// first player entry
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated player board: ');
printBoard(playerBoard);


