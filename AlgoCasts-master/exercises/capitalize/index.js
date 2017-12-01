// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let resultArr = [];
  for(let word of str.split(" ")) {
    resultArr.push(word[0].toUpperCase() + word.slice(1))
  }
  return resultArr.join(" ");
}

module.exports = capitalize;

// ------------------------
// Alternate solution
// function capitalize(str) {
//   let resultArr = [];
//   for(let el of str.split(" ")) {
//     let char = el[0].toUpperCase();
//     let newEl = el.replace(el[0], char);
//     resultArr.push(newEl)
//   }
//   return resultArr.join(" ");
// }
