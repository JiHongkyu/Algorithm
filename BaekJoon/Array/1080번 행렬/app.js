/*

  문제: 행렬 A를 행렬 B로 만드는데 걸리는 횟수의 최솟값을 구하라

  1. A배열, B배열 생성 후 이중 for문
  2. A배열과 B배열 비교 후 다르면 3x3 변환 후 cnt 증가

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.replace('\r', ''))

// N과 M 생성
const [N, M] = input[0].split(' ')

// A배열과 B배열 생성
const arrA = input
  .slice(1, +N + 1)
  .map((item) => item.split('').map((item) => +item))
const arrB = input
  .slice(+N + 1)
  .map((item) => item.split('').map((item) => +item))

let cnt = 0

// 행 for문 -> 3x3 영역을 바꿔야하기때문에 -2를 함으로써 런타임 에러 방지(-2를 안하면 아래 이중for문에서 없는 배열의 위치를 참조하여 에러 발생)
for (let i = 0; i < N - 2; i++) {
  // 열 for문
  for (let j = 0; j < M - 2; j++) {
    // 배열 A와 배열 B가 같은지 비교, 다르면 3x3 영역 모두 변환
    if (arrA[i][j] !== arrB[i][j]) {
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          // 0은 1로, 1은 0으로 변환
          arrA[k][l] = Number(!arrA[k][l])
        }
      }
      // 카운트 증가
      ++cnt
    }
  }
}

// 모든 부분을 순회하면서 다른 곳이 있으면 -1출력, 없으면 cnt 출력
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arrA[i][j] !== arrB[i][j]) {
      return console.log(-1)
    }
  }
}

console.log(cnt)
