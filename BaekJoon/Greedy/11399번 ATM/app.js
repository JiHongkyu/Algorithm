/*

  문제: 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하라
  N: 사람의 수

  문제풀이
  1. 돈을 인출하는데 필요한 시간이 담긴 배열 생성 후 오름차순 정렬
  2. 이중 for문으로 0부터 i까지 sum에 더하기

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
input[1] = input[1].split(' ').map((item) => +item)

/********** 문제풀이 **********/
// N과 돈을 인출하는데 필요한 시간이 담긴 배열, sum 변수 생성
const [N, times] = input
let sum = 0
// 오름차순 정렬
times.sort((a, b) => a - b)

// 사람의 수만큼 반복
for (let i = 0; i < N; i++) {
  // i와 같아질때까지 반복 -> 0부터 i까지 계속 더하기
  for (let j = 0; j <= i; j++) {
    sum += times[j]
  }
}

console.log(sum)
