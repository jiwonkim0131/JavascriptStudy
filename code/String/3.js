// 3. A를 #으로

const replaceAtoSharp = str => {
  return str.replace(/A/g, '#');
};

console.log(replaceAtoSharp('BANANA'));
