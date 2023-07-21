/*

  1. N을 1씩 증가시키면서 M과 같아질 때까지 반복문 돌리기
  2. N에 중복 숫자가 없다면 cnt 증가시키기

*/

// -----입력 값------
// 87 104
// 989 1022
// 22 25
// 1234 1234

// fs 모듈 생성
const fs = require('fs')
let input = fs.readFileSync('./hotel.txt').toString().trim().split('\n')

// input 값의 타입을 숫자로 변환
input = input.map((item) => item.split(' ').map((item) => +item))

// input의 길이만큼 반복문 돌리기
for (let i = 0; i < input.length; i++) {
  // N과 M 변수 생성
  let [N, M] = input[i]
  // cnt 변수 생성
  let cnt = 0

  // N이 M과 같아질 때까지 반복문 돌리기
  while (N <= M) {
    // N을 배열로 변환
    const arr = N.toString().split('')
    // N에서 중복 숫자 제거
    const set = new Set(arr)
    // N에서 중복 숫자가 제거 됐는지 확인 후 없으면 cnt 증가
    if (arr.length === set.size) ++cnt
    ++N
  }

  console.log(cnt)

  // 출력 값
  //   14
  // 0
  // 3
  // 1
}
