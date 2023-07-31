/*

  문제: 최댓값을 찾아서 최댓값과 최댓값의 행과 열의 번호를 구하라

  1. 이중배열 생성 후 최댓값 찾기
  2. 최댓값과 같은 것을 찾으면 최댓값과 최댓값의 위치 출력

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// 이중배열 생성
const arr = input.map((item) => item.split(' ').map((item) => +item))
// 최댓값
const max = Math.max(...arr.flat())

// 행 for문
for (let i = 0; i < arr.length; i++) {
  // 열 for문
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === max) return console.log(`${max} \n${i + 1} ${j + 1}`)
  }
}
