
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

	let numberOfBombsPlaced=0;
	let randomRowIndex;
	let randomColIndex;
	
	// place bombs
	while (numberOfBombsPlaced < numberOfBombs){
		randomRowIndex = Math.floor(Math.random()*numberOfRows);
		randomColIndex = Math.floor(Math.random()*numberOfColumns);
		// prevent duplicate
		while(board[randomRowIndex][randomColIndex] == 'B'){
			randomRowIndex = Math.floor(Math.random()*numberOfRows);
			randomColIndex = Math.floor(Math.random()*numberOfColumns);			
		}
		board[randomRowIndex][randomColIndex] = 'B';
		numberOfBombsPlaced++;
	}

	return board;	
};


let playerBoard = generatePlayerBoard(3,4);
let bombBoard 	= generateBombBoard(3,4, 8);
console.log("Player board:");
printBoard(playerBoard);
console.log("Bomb board:");
printBoard(bombBoard);

