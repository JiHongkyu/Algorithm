/*

  문제: 두 생명체 A와 B가 주어질 때, A가 B보다 큰 쌍의 개수를 구하라

  문제풀이
  1. A와 B 변수 생성 후 A = 2, B = 3 할당
  2. 테스트케이스가 0이 될 때까지 반복
  3. A배열과 B 배열 생성 후 내림차순 정렬
  4. 이중 for문 반복하면서 A와 B 비교
  5. A가 B보다 크다면 cnt 증가
  6. 이중 for문 끝나면 배열에 cnt 추가 후, A와 B에 3씩 더하기, 테스트케이스는 1 감소

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// A와 B 변수 생성 후 A = 2 B = 3 할당, 테스트케이스 변수 생성, answer배열 생성
let A = 2
let B = 3
let testCaseNum = +input[0]
const answer = []

// 테스트케이스가 0이 될 때까지 반복
while (testCaseNum > 0) {
  // A배열과 B배열 생성 후 내림차순 정렬
  const arrA = input[A].split(' ')
    .map((item) => +item)
    .sort((a, b) => b - a)
  const arrB = input[B].split(' ')
    .map((item) => +item)
    .sort((a, b) => b - a)
  let cnt = 0
  // 이중 for문
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      // A와 B 비교, A가 B보다 크다면 cnt 증가
      if (arrA[i] > arrB[j]) cnt += 1
    }
  }

  answer.push(cnt)
  A += 3
  B += 3
  testCaseNum -= 1
}

console.log(answer.join('\n'))
