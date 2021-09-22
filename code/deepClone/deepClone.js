function deepClone(target) {
  // 객체가 아닌 경우 다시 return
  if (!(target && (target.constructor === Array || target.constructor === Object))) return target;

  // 복사 대상이 객체인 경우와 배열인 경우로 분리
  const clonedResult = Array.isArray(target) ? [] : {};

  // 복사
  Object.keys(target).forEach(key => {
    clonedResult[key] = deepClone(target[key]);
  });

  return clonedResult;
}

export default deepClone;
