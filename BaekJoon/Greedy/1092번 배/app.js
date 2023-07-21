/*

  1. 크레인의 무게 제한 값이 담긴 배열, 박스의 무게가 담긴 배열, cnt 변수 생성
  2. 내림차순 정렬
  3. 박스배열이 아무것도 없어질 때까지 while문 반복
  4. 크레인과 박스 순차적으로 비교 후, 크레인이 박스보다 크거나 같으면 박스 요소 삭제
  5. for문 끝나면 cnt + 1

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// 크레인의 무게제한 값이 담긴 배열, 박스의 무게가 담긴 배열, cnt 변수 생성
let crane = input[1].split(' ').map((item) => +item)
let box = input[3].split(' ').map((item) => +item)
let cnt = 0

// 내림차순 정렬
crane.sort((a, b) => b - a)
box.sort((a, b) => b - a)

// 모든 박스를 배로 옮길 수 없는 경우 - 크레인의 가장 큰 값이 박스의 가장 큰 값보다 작을 때 (가장 무게가 큰 박스를 옮길 방법이 없음)
if (crane[0] < box[0]) return console.log(-1)

// 박스 배열의 요소가 아무것도 없어질 때까지 while문 반복
while (box.length > 0) {
  // 크레인 배열 길이만큼 반복
  for (let i = 0; i < crane.length; i++) {
    // 박스 배열 길이만큼 반복
    for (let j = 0; j < box.length; j++) {
      // 크레인과 박스 비교, 크레인이 박스보다 작다면 continue, 크레인이 박스보다 크거나 같다면 박스 요소 삭제 후 break
      if (crane[i] < box[j]) continue
      if (crane[i] >= box[j]) {
        box.splice(j, 1)
        break
      }
    }
  }
  cnt += 1
}

console.log(cnt)
