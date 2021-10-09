// 5. 문자 찾기
// 한 개의 문자열을 입력받고
// 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램.

// 1st sol
// const count = (str, char) => {
//   let answer = 0;
//   const sh = new Map();
//   for (const x of str) {
//     sh.set(x, sh.get(x) + 1 || 1); // 문자열의 각 알파벳의 개수를 count
//   }

//   answer = sh.get(char);
//   return answer;
// };

// 2nd sol
const count = (str, char) => str.match(new RegExp(char, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R')); // => 3
