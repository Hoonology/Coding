/* 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

입력
인자 1 : str

출력
string 타입을 리턴해야 합니다.

주의 사항
반복문(for)문을 사용해야 합니다.
str.split 사용은 금지됩니다.
빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.


입출력 예시
let output = test6('53862');
console.log(output); // --> '8'
output = test6('4321');
console.log(output); // --> '4'
 */

function test5(base, exponent) {
    let result = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
      result *= base;
    }
    if (exponent === 0) {
      return 1;
    } else if (exponent > 0) {
      return result;
    } else {
      return 1 / result;
    }
  }
  
  // Test cases
  console.log(test5(-2, 0)); // Output: 1
  console.log(test5(2, 4)); // Output: 16
  console.log(test5(-2, 4)); // Output: 16
  