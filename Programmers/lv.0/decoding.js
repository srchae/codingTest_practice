/**
 * 암호 해독 (lv.0)
 * 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

    암호화된 문자열 cipher를 주고받습니다.
    그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
    문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
    @param {string} cipher
    @param {number} code
    @returns {string}
 */

function solution(cipher, code) {
  let answer = "";
  for (i = 0; i < cipher.length; i++) {
    if ((i + 1) % code == 0) {
      answer += cipher[i];
    }
  }
  console.log(answer);
  return answer;
}

solution("dfjardstddetckdaccccdegk", 4);

/** 더 간결한 코드 만들기 */
function solution(cipher, code) {
  let answer = "";
  answer += cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
  console.log("hahaha", answer);
  return answer;
}
