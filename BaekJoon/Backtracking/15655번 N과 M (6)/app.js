// fs 모듈 생성
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// N과 M 생성
const [N, M] = input[0].split(' ').map((item) => +item);
const nArr = input[1]
  .split(' ')
  .map((item) => +item)
  .sort((a, b) => a - b);
const step = new Array(N).fill(0);
const visited = new Array(M).fill(false);
let result = '';

function dfs(index, count) {
  const arr = [];
  if (count === M) {
    for (let i = 0; i < M; i++) {
      arr.push(step[i]);
    }

    return (result += `${arr.join(' ')} \n`);
  }

  for (let i = index; i < N; i++) {
    if (!visited[i]) {
      step[count] = nArr[i];
      visited[i] = true;
      dfs(i + 1, count + 1);
      visited[i] = false;
    }
  }
}

dfs(0, 0);

console.log(result);
