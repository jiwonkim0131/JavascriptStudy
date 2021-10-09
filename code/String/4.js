// 4. 대문자 찾기

// 1st sol
// const countUpperCase = str => {
//   let answer = 0;
//   for (const x of str) {
//     const num = x.charCodeAt();
//     if (num >= 65 && num <= 90) answer++;
//   }

//   return answer;
// };

// 2nd sol
// const countUpperCase = str => {
//   const regExp = '^[A-Z]*$';
//   let answer = 0;
//   for (const x of str) {
//     if (x.match(regExp)) answer += 1;
//   }
//   return answer;
// };

// 3rd sol
const countUpperCase = str => str.match(/[A-Z]/g).length;

console.log(countUpperCase('KoreaTimeGood')); // => 3
