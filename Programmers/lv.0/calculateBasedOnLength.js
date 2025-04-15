/**
 * 배열의 길이에 따라 다른 연산하기 (lv.0)
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
function solution(arr, n) {
  return arr.length % 2 === 1
    ? arr.map((num, index) => (index % 2 === 0 ? num + n : num))
    : arr.map((num, index) => (index % 2 === 1 ? num + n : num));
}
console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
