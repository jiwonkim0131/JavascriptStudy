// 5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.

// 말일 = 다음달 1일의 전 날
const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 1).getDay() - 1;

// 2021년 1월 말일은 일요일
console.log(getLastDayOfMonth(2021, 0)); // => 0

// 2021년 12월 말일은 금요일
console.log(getLastDayOfMonth(2021, 11)); // => 5
