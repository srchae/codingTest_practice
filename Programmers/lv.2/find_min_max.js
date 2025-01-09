const FindMinMax = (str) => {
  // 1. 공백을 기준으로 나눠 배열에 담김
  // 2. numbers에는 문자열의 형태인 숫자의 나열인 배열이 담김
  // 3. 해당 배열을 스프레드하여 비교 (이때, 문자열의 형태여도 숫자로 자동으로 변환되어서 비교 가능)
  // 참고 : boolean의 형태는 1 또는 0으로 변환되어 비교 가능
  // 4. 템플릿 리터럴 ${}을 통한 표현식으로 return
  const numbers = str.split(" ");
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return `${min} ${max}`;
};

console.log(FindMinMax("1 2 3 4"));
console.log(FindMinMax("-1 -2 -3 -4"));
console.log(FindMinMax("-1 -1"));
