let row = 0;
let col = 0;

const path: string[] = [];
const letters: string[] = [];

const grid = [
  ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
  ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
  ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+'],
];

grid.forEach((row) => {
  console.log(row.join(''));

  // row.forEach((el) => {
  //   if (el !== ' ') {
  //     path.push(el);
  //     if (/[A-Z]/.test(el)) {
  //       letters.push(el);
  //     }
  //   }
  // });
});

while (grid[row][col] !== 's') {
  const currentEl = grid[row][col];
  path.push(currentEl);
  if (/[A-Z]/.test(currentEl)) {
    letters.push(currentEl);
  }

  // if(currentEl === '+'){
  //   if(row >=)
  // }
}

// console.log('PATH:', path.join(''));

// console.log('LETTERS:', letters.join(''));
