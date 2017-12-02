// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, str='') {
  if(row === n) {
    return;
  }

  if(str.length === 2*n-1) {
    console.log(str);
    return pyramid(n, row+1);
  }
  const midPoint = Math.floor((n*2-1)/2);
  let add;
  if(midPoint-row <= str.length && midPoint+row >= str.length) {
    add = '#';
  } else {
    add = ' ';
  }
  return pyramid(n, row, str+add);
}

module.exports = pyramid;

// ----------------------
// Alternate solution
// function pyramid(n) {
//   for(let row=0; row<n; row++) {
//     let str = '';
//     for(let col=0; col<(n*2-1); col++) {
//       const midPoint = Math.floor((n*2-1)/2);
//       if(midPoint-row <= col && midPoint+row >= col) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// }
