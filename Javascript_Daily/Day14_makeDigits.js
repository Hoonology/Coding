/* makeDigits
문제
수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

출력
string 타입을 리턴해야 합니다.

주의 사항
반복문(for)문을 사용해야 합니다.
숫자(number string) 사이의 구분은 없습니다. ('1234567')

let output = makeDigits(5);
console.log(output); // --> "12345"

*/

function makeDigits(num) {
  let result = ""; // initialize an empty string to hold the concatenated digits
  for (let i = 1; i <= num; i++) {
    result += i.toString(); // concatenate the current index to the result string
  }
  return result; // return the concatenated string
}

  