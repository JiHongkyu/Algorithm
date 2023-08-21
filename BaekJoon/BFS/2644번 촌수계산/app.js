// fs 모듈 생성
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// N: 사람의 수
const N = +input.shift();
// 촌수를 구해야하는 두 사람
const [person1, person2] = input
  .shift()
  .split(' ')
  .map((item) => +item);
// M: 관계의 개수
const M = +input.shift();
const visited = [...Array(N + 1)].fill(false);
const graph = [...Array(N + 1)].map(() => []);
let cnt = 0;

for (let i = 0; i < M; i++) {
  const [first, second] = input[i].split(' ').map((item) => +item);
  graph[first].push(second);
  graph[second].push(first);
}

// [], [2,3], [1,7,8,9], [1,4], [5,6], [4], [4], [2], [2], [2]

function bfs(count) {
  let queue = [count];

  while (queue.length) {
    // 촌수가 달라지면 cnt + 1
    cnt += 1;

    const queueLength = queue.length;
    // 같은 촌수이기때문에 cnt+1을 안해주기 위해서 for문 돌리기
    for (let i = 0; i < queueLength; i++) {
      let x = queue.shift();
      if (visited[x] === false) {
        visited[x] = true;

        for (let j of graph[x]) {
          if (visited[j] === false) {
            if (j === person2) return cnt;

            queue.push(j);
          }
        }
      }
    }
  }

  return -1;
}

console.log(bfs(person1));
