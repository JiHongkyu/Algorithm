// fs 모듈 생성
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((item) => +item);

const [N, M] = input;
// 백트래킹 배열
const step = new Array(M).fill(0);
// 이미 넣었던 숫자인지 확인
const visited = new Array(N).fill(false);

// 최종 출력 문자열
let result = '';

function dfs(count) {
  const arr = [];
  if (count === M) {
    for (let i = 0; i < M; i++) {
      arr.push(step[i]);
    }

    return (result += `${arr.join(' ')} \n`);
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      step[count] = i + 1;
      visited[i] = true;
      dfs(count + 1);
      visited[i] = false;
    }
  }
}

dfs(0);

console.log(result);
