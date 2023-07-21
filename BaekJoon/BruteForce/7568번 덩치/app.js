/*
  1. 사람 수, 키와 몸무게가 담긴 배열, 등수가 담긴 배열 생성
  2. 이중 for문으로 i번째와 j번째의 키와 몸무게 비교
  3. i번째보다 j번째가 더 작다면 i번째의 등수 증가
*/

// 입력 값
// 5
// 55 185
// 58 183
// 88 186
// 60 175
// 46 155

// fs 모듈 생성
const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// 키와 몸무게가 담긴 배열의 타입 숫자로 변환
input = input.map((item) => item.split(' ').map((item) => +item))

// 사람 수, 키와 몸무게가 담긴 배열 생성
const [testCaseNum, ...person] = input
// 등수가 담긴 배열 생성
const rank = new Array(testCaseNum[0]).fill(1)

// i번째와 j번째의 키와 몸무게 비교 후 i의 몸무게가 더 적으면 등수 증가
for (let i = 0; i < testCaseNum; i++) {
  for (let j = 0; j < testCaseNum; j++) {
    // i와 j가 다르면 조건문 실행
    // 남궁종민님 feedback
    if (i === j) continue

    if (person[i][0] < person[j][0] && person[i][1] < person[j][1]) ++rank[i]
  }
}

console.log(rank.join(' '))

// 출력 값
// 2 2 1 2 5
