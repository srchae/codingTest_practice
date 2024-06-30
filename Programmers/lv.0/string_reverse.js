/**
 * 문자열 뒤집기 (lv.0) : my_string을 거꾸로 뒤집은 문자열을 return합니다.
 * @param {string} my_string
 * @returns {string}
 */
function solution(my_string) {
  var answer = "";
  answer = [...my_string].reverse("").join("");
  console.log(answer);
  return answer;
}

solution("jaron");
