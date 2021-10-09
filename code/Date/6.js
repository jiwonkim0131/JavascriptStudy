// 6. 두 날짜 사이의 일수 구하기
// getTime() 메소드는 '1970년 1월1 일 00:00:00 UTC'로부터 주어진 시간 사이의 경과시간(밀리초)를 리턴
// 1초 1000밀리초, 1분 60초, 1시간 60분, 1일 24시간

const diffDays = (date1, date2) =>
  Math.abs((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364
console.log(diffDays(new Date('2021/12/31'), new Date('2021/12/31'))); // => 0  같은 날짜인 경우
console.log(diffDays(new Date('2021/12/31'), new Date('2021/01/01'))); // => 364  첫번째 매개변수가 더 큰 경우
