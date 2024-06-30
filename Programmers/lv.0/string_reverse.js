/**
 * 문자열 뒤집기 (lv.0)
 * 
    문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return 하도록 solution 함수를 완성해주세요.
 */
function solution(my_string) {
  var answer = "";
  answer = [...my_string].reverse("").join("");
  console.log(answer);
  return answer;
}

solution("jaron");
