/** 간단한 함수 사용을 연습할 때 사용하는 Note.js 입니다. 🎮 */

// 길이가 50이고 모든 요소가 0인 1차원 임의의 배열 생성
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

/** === flat === */
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(Infinity));
const arr3 = [2, 200, 3000, 40, 5];
console.log(arr3.sort((a, b) => a - b));
// 무한히 깊이까지 평탄화(flatten), 배열이 어떤 깊이로 중첩되어 있든지 상관없이 모든 중첩된 배열을 평탄화된 배열로 만듦

const str1 = "1, 2, 3";

console.log(str1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

let str = "hello world";
let newStr = str.replace("world", "JavaScript"); // newStr은 "hello JavaScript"
console.log(newStr);

let str2 = "abc abc de de abcde defg";
console.log(str2.replace(/abc/g, "!"));
// Expected output: ! ! de de !de defg
console.log(str2.replace(/ /g, "-"));
// Expected output: abc-abc-de-de-abcde-defg

let str3 = "abc abc de de abcde defg ABC";
let re = /abc/i; // 대 소문자 구분없이 abc를 찾아라
console.log(str3.match(re));

let reg2 = /abc/gi;
console.log(str3.match(reg2));
