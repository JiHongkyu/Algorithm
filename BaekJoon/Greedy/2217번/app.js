/*

  N: 로프의 개수

  1. 로프가 담긴 배열을 오름차순으로 정렬
  2. 로프의 개수만큼 반복문 돌리기
  3. 로프가 담긴 배열의 값에 N부터 1까지 순차적으로 곱해서 새 배열에 추가
  4. 새 배열에서 가장 큰 값 출력

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item)

/********** 문제풀이 **********/
// N과 로프가 담긴 배열, answer 배열 생성
let [N, ...arr] = input
const answer = []
// 오름차순
arr.sort((a, b) => a - b)

// 로프의 개수만큼 반복
for (let i = 0; i < arr.length; i++) {
  // 로프와 N을 곱하기 (로프는 작은 값부터, N은 큰 값부터)
  answer.push(arr[i] * N)
  --N
}

console.log(Math.max(...answer))
