// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((res, char) => char + res, '');
}

module.exports = reverse;

//Alternate solution
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// ------------------
//Alternate solution
// function reverse(str) {
//   let strArr = str.split('');
//   let result = [];
//   for(let i = strArr.length - 1; i>=0; i--) {
//     result.push(strArr[i]);
//   }
//   result = result.join('');
//   return result
// }

// ----------------------
// Alternate solution
// function reverse(str) {
//   let reversed = '';
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
