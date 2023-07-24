/*

  문제: 준규가 가지고 있는 카드 중 가장 많이 가지고 있는 카드의 정수를 구하라

  문제풀이
  1. 준규가 가지고 있는 카드 배열 생성 후 오름차순 정렬
  2. cnt, maxCnt, largeNum 변수 생성
  3. 카드 배열의 길이만큼 반복문
  4. 카드 비교 후 같으면 cnt 증가, 다르면 cnt = 1
  5. cnt와 maxCnt를 비교, cnt가 더 크다면 maxCnt = cnt와 largeNum = card값 넣어주기

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => BigInt(item))

// 카드 배열 생성
const [, ...card] = input

// 오름차순 정렬 => BigInt를 a - b식으로 정렬하면 에러 발생. sort메소드 내에서 조건문으로 정렬
card.sort((a, b) => {
  if (a > b) return 1
  else if (a < b) return -1
  return 0
})

// cnt, maxCnt, largeNum 변수 생성
let cnt = 1
let maxCnt = 0
let largeNum = 0

for (let i = 0; i < card.length; i++) {
  if (card[i] === card[i + 1]) cnt++
  else cnt = 1

  if (cnt > maxCnt) {
    maxCnt = cnt
    largeNum = card[i]
  }
}

console.log(String(largeNum))
