/* 문제
1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

입력
인자 1 : num
number 타입의 수

출력
boolean 타입을 리턴해야 합니다.

입출력 예시
let output = isPrime(2);
console.log(output); // --> true */

function isPrime(num) {
    for(i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
  }
  
  