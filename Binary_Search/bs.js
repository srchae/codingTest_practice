/** 이진 탐색(Binary Search)
 *
 *  이진 탐색의 전제 조건
 *      - 정렬된 배열 : 배열이 오름차순으로 정렬이 되어있을 때만 유효
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 4; // 찾고자 하는 값
function bs() {
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

bs();
