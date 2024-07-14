function solution(nums) {
  // Set 객체의 size 속성을 통해 중복을 제거한 후 남은 고유한 폰켓몬의 종류 수 구하기
  const unique = new Set(nums).size;

  // 가져갈 수 있는 폰켓몬의 갯수
  const maxPonkemon = Math.floor(nums.length) / 2;

  // 중복을 제거한 고유한 폰켓몬의 종류 수와 최대 선택 가능한 폰켓몬의 개수 중 더 작은 값이 최종적으로 선택할 수 있는 폰켓몬의 종류 수가 됨
  return Math.min(unique, maxPonkemon);
}

nums = [3, 1, 2, 3];
solution(nums);
