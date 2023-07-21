/*
  1. 665가 담긴 변수 생성하기
  2. input의 값이 0이 될 때까지 while문 돌리기
  3. 665가 담긴 변수에 1씩 더해주면서 666이 포함돼 있는지 확인하기
  4. 666이 포함된다면 input의 값을 -1해주기
*/

// 입력 값
// 500

// fs모듈 생성
const fs = require('fs')
let input = +fs.readFileSync('./shhom.txt') - 1

/******* 레거시 코드 *******/
// 665가 담긴 변수 생성
// let num = 665
// // input의 값이 0이 될 때까지 while문 반복
// while (input > 0) {
//   // num에 계속 1씩 더해주기
//   num++
//   // 666이 포함되는지 확인하기
//   num.toString().includes('666') ? --input : null
// }

/***** 리팩토링 코드 *****/

// 666이 담긴 변수 생성
let num = 666

// input의 값이 0이 될 때까지 while문 반복
while (input > 0) {
  num += 1
  if (num.toString().includes('666')) --input
}

console.log(num)

// 출력 값
// 166699
