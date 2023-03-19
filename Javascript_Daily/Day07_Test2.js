/* 문제 2.  computeDifference
두 수를 입력받아 두 수의 차이를 나타내는 메세지를 리턴해야 합니다.

- 문자열 간 덧셈 연산은 금지됩니다.
- Template string(template literal)을 사용해 풀어야 합니다.
- 점수 간 차이는 절대값(absolute)을 사용합니다. */

let a = 20;
let b = 8;
let c = "자바스크립트";
let str = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;
console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.

function computeDifference(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
      return `${num1}, ${num2}의 차이는 ${Math.abs(num1 - num2)}입니다.`;
    }

    