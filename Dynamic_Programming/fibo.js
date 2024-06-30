/**
 * 피보나치 수열 
 *  - 두 개의 초기값(0과 1)을 제외하고는, 그 이후의 모든 항은 바로 앞의 두 항의 합을 계산하는 방식을 의미
 *    피보나치 수열의 예시
        F(0) = 0
        F(1) = 1
        F(2) = 1 (0 + 1)
        F(3) = 2 (1 + 1)
        F(4) = 3 (1 + 2)
        F(5) = 5 (2 + 3)
        F(6) = 8 (3 + 5)
        ...
 * @param {number} idx
 * @param {object} memo
 * @returns {number}
 */
function fibo(idx, memo = {}) {
  if (idx < 2) return idx;
  if (idx in memo) return memo[idx];
  // n번째의 값은 n-1번째와 n-2번째의 값의 합과 같다.
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  return memo[idx];
}

console.log(fibo(10));

/** 다른 버전의 풀이 */
function typeTwo(idx, memo = {}) {
  if (idx < 2) return idx;
  else return typeTwo(idx - 1, memo) + typeTwo(idx - 2, memo);
}

console.log("typeTwo", typeTwo(10));
