var row = 0;
var col = 0;
var path = [];
var letters = [];
var grid = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
    ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+'],
];
grid.forEach(function (row) {
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
    var currentEl = grid[row][col];
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
