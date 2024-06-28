/** === 임의의 배열 생성 ===  */

// 길이가 50이고 모든 요소가 0인 1차원 배열 생성
let array1D = Array(50).fill(0);
console.log("== 1차원 배열 생성==", array1D);

// 5x5 크기의 2차원 배열 생성, 모든 요소가 0
let array2D = Array(5)
  .fill(0)
  .map(() => Array(5).fill(0));
console.log("== 2차원 배열 생성==", array2D);

/** === swap === */

const array = [1, 2, 3, 4, 5];
// 배열의 요소 2와 4의 위치를 변경
[array[1], array[3]] = [array[3], array[1]];
console.log(array);
