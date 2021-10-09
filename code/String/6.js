// 6. 대소문자 변환

const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
    lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
  );

console.log(toggleCase('StuDY')); //sTUdy
