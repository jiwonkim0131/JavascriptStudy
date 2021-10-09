// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

const formatDate = date => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return year + '-' + month + '-' + day;
};

console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // => "1900-01-04"
console.log(formatDate(new Date('2021/10/4'))); // => "2021-10-04"
