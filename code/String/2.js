// 2. 신규 아이디 추천

const solution = new_id => {
  const result = new_id
    .toLowerCase() // 1단계 : 소문자 변환
    .replace(/[^\w-_.]+/g, '') // 2단계 : 특수문자 제거
    .replace(/\.{2,}/g, '.') // 3단계 : 마침표 두개 이상이면 하나로 치환
    .replace(/^\.|\.$/g, '') // 4단계 : 처음과 끝에 마침표가 있다면 제거
    .replace(/^$/g, 'a') // 5단계 : new_id가 빈문자열이라면 id에 a 대입
    .slice(0, 15) // 6단계 : 길이가 16자 이상이면, 첫 15개의 문자를 제외 모두 제거, 제거후 마지막이 마침표일 경우 마침표 제거
    .replace(/^\.|\.$/g, '');
  return result + result.slice(-1).repeat(Math.max(0, 3 - result.length)); // 7단계 : 길이가 2자 이하라면, 마지막 문자를 new_id 길이가 3이 될 때까지 반복해서 끝에 연결
};

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // bat.y.abcdefghi
console.log(solution('z-+.^.')); // z--
console.log(solution('abcdefghijklmn.p')); // abcdefghijklmn
