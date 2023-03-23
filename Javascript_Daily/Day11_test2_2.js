/*
makeMultiplesOfDigit

문제
두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 
2의 배수의 개수를 리턴해야 합니다.

반복문(for)문을 사용해야 합니다.
num1이 num2보다 작지 않을 수도 있습니다.
0은 2의 배수가 아니라고 가정합니다.

let output = makeMultiplesOfDigit2(8, 12);
console.log(output); // --> 3

*/


function makeMultiplesOfDigit2(num1, num2) {
    let first;
    let end;
    if (num1 > num2) {
      first = num2;
      end = num1;
    } else {
      first = num1;
      end = num2;
    }
    let count = 0;
    for (let i = first; i <= end; i++) {
      if (i % 2 === 0 && i !== 0) {
        count++;
      }
    }
    return count;
  }
  
  