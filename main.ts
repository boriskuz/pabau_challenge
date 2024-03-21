const path: string[] = [];
const letters: string[] = [];

const grid = [
  ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
  ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
  ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+'],
];

let row = 0;
let col = 0;

grid.forEach((arr, index) => {
  const startPosition = arr.indexOf('>');
  if (startPosition !== -1) {
    row = index;
    col = startPosition;
  }
});

console.log(row, col);

let previousCharacter: number[] = [row, col];

grid.forEach((row) => {
  console.log(row.join(''));
});

while (grid[row][col] !== 's') {
  const currentCharacter = grid[row][col];

  path.push(currentCharacter);

  if (/[A-Z]/.test(currentCharacter)) {
    letters.push(currentCharacter);
  }

  debugger;

  if (currentCharacter === '+') {
    row++;
  }

  if (grid[row][col + 1] !== ' ' && col !== grid[row].length - 1) {
    col++;
  }

  if (col === grid[row].length - 1 && row !== grid.length - 1) {
    row++;
  }

  // if (grid[row + 1] !== undefined && grid[row + 1][col] !== ' ' && previousCharacter[0] == row && previousCharacter[1] !== col + 1) {
  //   previousCharacter = [row, col];
  //   row++;
  // } else if (grid[row][col + 1] !== undefined && grid[row][col + 1] !== ' ' && previousCharacter[0] == row && previousCharacter[1] !== col + 1) {
  //   previousCharacter = [row, col];
  //   col++;
  // } else if (grid[row - 1] !== undefined && grid[row - 1][col] !== ' ' && previousCharacter[0] !== row - 1 && previousCharacter[1] == col) {
  //   previousCharacter = [row, col];
  //   row--;
  // } else if (grid[row][col - 1] !== undefined && grid[row][col - 1] !== ' ' && previousCharacter[0] == row && previousCharacter[1] !== col - 1) {
  //   previousCharacter = [row, col];
  //   col--;
  // }
}

// if (currentCharacter === '+') {
//   if (grid[row + 1] !== undefined && grid[row + 1][col] !== ' ' && previousCharacter !== grid[row + 1][col]) {
//     previousCharacter = grid[row][col];
//     row++;
//   } else if (grid[row][col + 1] !== undefined && grid[row][col + 1] !== ' ' && previousCharacter !== grid[row][col + 1]) {
//     previousCharacter = grid[row][col];
//     col++;
//   } else if (grid[row - 1] !== undefined && grid[row - 1][col] !== ' ' && previousCharacter !== grid[row - 1][col]) {
//     previousCharacter = grid[row][col];
//     row--;
//   } else if (grid[row][col - 1] !== undefined && grid[row][col - 1] !== ' ' && previousCharacter !== grid[row][col - 1]) {
//     previousCharacter = grid[row][col];
//     col--;
//   }
// }

// if (currentCharacter !== '+' && col !== grid[0].length - 1) {
//   previousCharacter = grid[row][col];
//   col++;
// }

// if (currentCharacter !== '+' && row !== grid.length - 1 && col === grid[0].length - 1 && grid[row][col] !== '+') {
//   previousCharacter = grid[row][col];
//   row++;
// }
