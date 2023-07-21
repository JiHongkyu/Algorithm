/*
3카드의 합이 M과 유사한 값 찾기
i와 j와 k 반복문 돌리면서 합이 M을 넘지않으면 max에 저장
반복문이 끝나면 max 출력
*/

// 입력 값
// 10 500
// 93 181 245 214 315 36 185 138 216 295

// fs 모듈 생성
const fs = require('fs')
let input = fs.readFileSync('./blackjack.txt').toString().trim().split('\n')

// input의 값 타입을 숫자로 변환
input = input.map((item) => item.split(' ').map((item) => +item))

/***** 문제풀이 *****/

// 입력 개수, M의 값, max 변수 생성
const [testCaseNum, M] = input[0]

// 카드배열 생성
const card = input[1]

// max: M과 같거나 가장 유사한 값이 담김
let max = 0

// 3장의 카드를 골라 더한 후 M과 비교하여 같거나 유사하면 max에 저장
for (let i = 0; i < testCaseNum; i++) {
  for (let j = i + 1; j < testCaseNum; j++) {
    for (let k = j + 1; k < testCaseNum; k++) {
      // 카드의 합 변수 생성
      const cardSum = card[i] + card[j] + card[k]

      // 남궁종민님의 피드백 - early return
      if (cardSum > M) continue

      if (cardSum > max) max = cardSum
    }
  }
}

console.log(max)

// 출력 값
// 497
