/*

  문제: 최솟값과 최댓값을 구하라

  1. 배열 생성 후 최솟값과 최댓값 구하기

*/

// fs 모듈 생성
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// 배열 생성
const arr = input[1].split(' ').map((item) => +item)

console.log(Math.min(...arr), Math.max(...arr))
