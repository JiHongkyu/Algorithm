/*

  문제: 동전을 적절히 사용해서 K와 똑같아지게 만들 때, 필요한 동전의 개수를 구하라

  문제풀이
  1. 동전이 담긴 배열 생성
  2. 동전 배열의 길이만큼 for문 돌리기
  3. 동전과 K 비교, 동전이 K보다 작거나 같을 때, K를 동전으로 나누고 몫 저장, 나머지는 K에 저장


*/

// fs 모듈 생성
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [str, ...arr] = input

// K, 동전이 담긴 배열 생성, cnt 변수생성
let [_, K] = str.split(' ').map((item) => +item)
const coin = arr.map((item) => +item)
let cnt = 0

// 동전 배열 길이만큼 for문
for (let i = coin.length - 1; i >= 0; i--) {
  // 동전과 K 비교, 동전이 K보다 작거나 같을 때, K를 동전으로 나누고 몫 저장, 나머지는 K에 다시 저장
  if (coin[i] <= K) {
    cnt += Math.floor(K / coin[i])
    K = K % coin[i]
  }
}

console.log(cnt)
