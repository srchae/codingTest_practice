// 1. 문자열을 공백을 기준으로 나눠서 배열에 담음
// 2. 배열에 담긴 각 문자열을 순회하며, 문자열의 첫 글자는 대문자로 변환, 문자열의 두 번째부터 끝까지는 소문자로 변환
// 3. 변환된 문자열이 담긴 배열을 공백을 기준으로 join

// JadenCase와 PascalCase의 차이점
// 모든 단어의 첫 글자를 대문자로 바꾸는 것은 같지만 달리 단어 사이의 공백의 유무 차이이다.

const solution = (s) => {
  var answer = "";
  answer = s
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");
  return answer;
};

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
