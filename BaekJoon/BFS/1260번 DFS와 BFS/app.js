// fs 모듈 생성
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// N: 정점의 개수, M: 간선의 개수, V: 탐색을 시작할 정점의 번호
const [N, M, V] = input
  .shift()
  .split(' ')
  .map((item) => +item);

// 그래프 생성
const graph = [...Array(N + 1)].map(() => []);
// 방문확인 배열 생성
const visited = [...Array(N + 1)].fill(false);
// 방문한 배열 생성
const answer_DFS = [V];
const answer_BFS = [];
visited[V] = true;

// 그래프 채우기
for (let i = 0; i < M; i++) {
  const [first, second] = input[i].split(' ').map((item) => +item);
  graph[first].push(second);
  graph[second].push(first);
}

// 그래프 오름차순 정렬
for (let i = 1; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}
// [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]

//DFS
function dfs(count) {
  for (let i of graph[count]) {
    if (visited[i] === false) {
      visited[i] = true;
      answer_DFS.push(i);
      dfs(i);
    }
  }
}

dfs(V);
console.log(answer_DFS.join(' '));

visited.fill(false);

//BFS
function bfs(count) {
  let queue = [count];

  while (queue.length) {
    let num = queue.shift();

    if (visited[num] === false) {
      visited[num] = true;
      answer_BFS.push(num);

      for (let i of graph[num]) {
        if (visited[i] === false) queue.push(i);
      }
    }
  }
}

bfs(V);
console.log(answer_BFS.join(' '));
