const solution = (s) => {
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
