/* makeOddDigits
문제
수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 1)

출력
string 타입을 리턴해야 합니다.

주의 사항

반복문(while)문을 사용해야 합니다.
숫자(number string) 사이의 구분은 없습니다. ('13579')

입출력 예시

let output = makeOddDigits(3);
console.log(output); // --> "135"

output = makeOddDigits(5);
console.log(output); // --> "13579" */


function makeOddDigits(num) {
    let output = "1"; // start with the first odd digit 1
    let count = 1; // initialize the counter to 1
    
    while (count < num) {
      output += (count * 2) + 1; // append the next odd digit to the output string
      count++; // increment the counter
    }
    
    return output;
  }

output = makeOddDigits(70);
console.log(output); 