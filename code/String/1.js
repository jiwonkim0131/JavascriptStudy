// 1. 유효한 팰린드롬

// 1st sol
// const isPalindrome = str => {
//   return (
//     str.replace(/[\W_]/g, '').toLowerCase() ===
//     str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')
//   );
// };

// 2nd sol
const isPalindrome = str => {
  const test = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  return test === [...test].reverse().join('');
};
console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false
console.log(isPalindrome('race ecar')); // => true
