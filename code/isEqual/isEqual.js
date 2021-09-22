// 인수가 object{} / array[] 인지 확인
function isObject(obj) {
  return obj && (obj.constructor === Array || obj.constructor === Object);
}

function isEqual(...arg) {
  // 인수 미전달 혹은 2개 미만으로 전달된 경우
  if (arg.length < 2)
    throw new Error(`isEqual requires at least 2 argument, but only ${arg.length} were passed`);

  const op1 = arg[0];
  const op2 = arg[1];

  // 객체거나 배열인 경우
  if (isObject(op1) && isObject(op2)) {
    // 둘 중 하나만 배열인 경우
    if (Array.isArray(op1) !== Array.isArray(op2)) {
      return false;
    }

    const op1Keys = Object.keys(op1);
    const op2Keys = Object.keys(op2);

    // 비교 대상의 길이가 다른 경우
    if (op1Keys.length !== op2Keys.length) {
      return false;
    }

    for (const key of op1Keys) {
      if (!isEqual(op1[key], op2[key])) return false;
    }

    return true;
  }

  // 그 외
  return Object.is(op1, op2);
}

export default isEqual;
