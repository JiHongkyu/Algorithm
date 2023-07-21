/*
  1. 입력 값을 모두 더한 후 100을 빼주기
  2. 2개의 값을 더한 값과 나머지 값이 같은 것을 찾기
*/

// 입력 값
// 7
// 8
// 10
// 13
// 15
// 19
// 20
// 23
// 25

// fs 모듈 생성
const fs = require('fs')
let input = fs
  .readFileSync('./smurfs.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item)

// 입력 값을 모두 더한 후 100 빼주기
const remainder = input.reduce((acc, cur) => acc + cur, 0) - 100

// input의 길이만큼 이중 for문 돌리기
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    // 2개의 값을 더하기
    const sum = input[i] + input[j]

    // sum과 remainder가 같은지 비교, 같다면 2개의 값에 0 넣어주기
    if (sum === remainder) {
      input.splice(j, 1)
      input.splice(i, 1)
      // input의 값 중 0인 것을 제외하고 콘솔 출력
      input.map((item) => console.log(item))
      return
    }
  }
}

// 출력 값
// 7
// 8
// 10
// 13
// 19
// 20
// 23
