const gridPathFinder = (grid: string[][]) => {
  const path: string[] = [];
  const letters: string[] = [];

  let row = 0;
  let col = 0;

  grid.forEach((arr, index) => {
    const startPosition = arr.indexOf('>');
    if (startPosition !== -1) {
      row = index;
      col = startPosition;
    }
  });

  let prevCharPosition: number[] = [row, col];

  while (grid[row][col] !== 's') {
    const currentCharacter = grid[row][col];
    path.push(currentCharacter);

    if (/[A-Z]/.test(currentCharacter)) {
      letters.push(currentCharacter);
    }

    if (currentCharacter !== '+') {
      if (grid[row][col + 1] !== ' ' && col !== grid[row].length - 1 && col + 1 !== prevCharPosition[1]) {
        prevCharPosition = [row, col];
        col++;
      } else if (grid[row][col - 1] !== ' ' && col !== 0 && col - 1 !== prevCharPosition[1]) {
        prevCharPosition = [row, col];
        col--;
      } else if (grid[row + 1] != undefined && grid[row + 1][col] !== ' ' && row + 1 !== prevCharPosition[0] && row !== grid.length - 1) {
        prevCharPosition = [row, col];
        row++;
      } else if (grid[row - 1] != undefined && grid[row - 1][col] !== ' ' && row - 1 !== prevCharPosition[0]) {
        prevCharPosition = [row, col];
        row--;
      }
    } else if (currentCharacter === '+') {
      if (grid[row + 1] != undefined && grid[row + 1][col] !== ' ' && row + 1 !== prevCharPosition[0] && row !== grid.length - 1) {
        prevCharPosition = [row, col];
        row++;
      } else if (grid[row - 1] != undefined && grid[row - 1][col] !== ' ' && row > 0 && row - 1 !== prevCharPosition[0]) {
        prevCharPosition = [row, col];
        row--;
      } else if (grid[row][col - 1] !== ' ' && col !== 0 && col - 1 !== prevCharPosition[1]) {
        prevCharPosition = [row, col];
        col--;
      }
    }
  }

  path.push('s');

  return {
    path: path.join(''),
    letters: letters.join(''),
  };
};

const grid = [
  ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
  ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
  ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+'],
];

grid.forEach((row) => {
  console.log(row.join(''));
});

console.log(' ');

console.log('Path: ', gridPathFinder(grid).path);

console.log(' ');

console.log('Letters: ', gridPathFinder(grid).letters);
