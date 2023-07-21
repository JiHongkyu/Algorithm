/*

  문제: 정수 A를 B로 바꾸어라

  1. A와 B 생성, cnt 변수 생성
  2. A가 B보다 크거나 같아질 때까지 while문 반복
  3. B를 2로 나누었을 때 나머지가 1이면 맨 뒤에 1삭제, 나머지가 0이면 B = B / 2
  4. A가 B보다 크다면 -1 출력, A와 B가 같다면 cnt + 1 출력

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((item) => +item)

// A와 B 생성, cnt 변수 생성
let [A, B] = input
let cnt = 0

// A가 B보다 크거나 같아질때까지 반복
while (A < B) {
  // B를 2로 나누었을 때 나머지가 0이면 B에 B를 2로 나눈 몫 넣어주기, 나머지가 1이면 B 맨 뒤에 1 삭제
  if (B % 2 === 0) B /= 2
  else if (B % 2 === 1) {
    const last = B.toString().slice(-1)
    // B의 마지막 숫자가 1인지 확인
    if (last === '1') B = Number(B.toString().slice(0, -1))
    else return console.log(-1)
  }

  cnt += 1
}

console.log(A === B ? cnt + 1 : -1)
