/**
 * 이진 탐색(Binary Search) : 탐색 범위를 이용한 검색으로, 배열이 오름차순으로 정렬 시 유효
 * @param {number[]} array
 * @param {number} target
 * @returns {string | number}
 */

function bs(array, target) {
  let lo = 0; // 탐색 범위의 시작 index
  let hi = array.length - 1; // 탐색 범위의 끝 index
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (array[mid] === target) {
      console.log(target);
      return "찾았다!!🤩";
    } else if (array[mid] > target) {
      // index(mid)의 값이 더 크면, 배열의 왼쪽 부분에 target이 있을 가능성이 충분하여 탐색 범위를 좁힘
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  console.log("찾을 수 없다..😅");
  return -1; // 찾지 못하는 경우 -1 반환
}

bs([1, 2, 3, 4, 5, 6, 7, 8], 4);
