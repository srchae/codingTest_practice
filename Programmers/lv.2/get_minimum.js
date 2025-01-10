// 각 배열의 길이가 같음
// A, B 배열의 원소들의 각각 곱한 값의 합이 최소로 만들기
// 곱했을 때 최대한 작은 수를 만들기 위해서는 가장 작은 수랑 가장 큰 수를 곱하게 해야됨

// 각 배열을 오름 및 내림차순으로 정렬한 후, 각 인덱스별로 하나씩 뽑아서 계산
const solution = (A, B) => {
    var answer = 0;
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)

    for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
    }
    return answer;
}
    

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
