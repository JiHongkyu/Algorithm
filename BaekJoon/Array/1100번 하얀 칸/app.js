/*

  문제: 하얀 칸 위에 말이 몇개있는지 구하라

  홀수행 홀수열은 하얀칸
  짝수행 짝수열은 하얀칸

  1. i가 홀수이면서 j도 홀수이면서 F면 cnt 증가
  2. i가 짝수이면서 j도 짝수이면서 F면 cnt 증가

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.replaceAll('\r', ''))

let cnt = 0

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    // i와 j가 홀수이면서 input[i][j]가 F면 cnt 증가
    if (i % 2 === 1 && j % 2 === 1 && input[i][j] === 'F') cnt++
    // i와 j가 짝수이면서 input[i][j]가 F면 cnt 증가
    if (i % 2 === 0 && j % 2 === 0 && input[i][j] === 'F') cnt++
  }
}

console.log(cnt)
