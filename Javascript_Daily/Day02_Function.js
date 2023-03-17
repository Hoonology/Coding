/* 문제 2-1. 함수
속력 `speed` , 시간 `time` 이 숫자로 주어졌을 때, 
이동한 거리를 변수 `distance`에 할당하여 리턴하는 `getRunCatDistance` 함수를 작성하세요
 */

function getRunCatDistance(speed, time) {
  let distance;
  distance = speed * time;
  return distance;
}

// ================================================================================ //
/* 문제 2-2 declareFunction

첫 번째 인자에 2를 곱하는 함수 multiplyBy2와 비슷하게 첫 번째 인자를 2로 나누는 함수 divideBy2를 선언하세요.
 */
function multiplyBy2(input) {
  input = input * 2;
  return input;
}
let divideBy2 = function(input2) {
  input2 = input2 / 2;
  return input2;
};



// ================================================================================ //
/* 문제 2-3 callFunction

문자열을 인자로 받아서 느낌표를 붙여서 리턴해주는 함수 returnWordWithJoy가 있습니다.
함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love DevOps"를 넣어서 호출하고,
그 결과값을 변수 word에 할당하세요.

문자열을 인자로 받아서 느낌표를 붙여서 리턴 해주는 함수 returnWordWithJoy가 있습니다.
함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love DevOps"를 넣어서 호출하고, 그 결과값을 변수 word에 할당하세요. */

let word; // TODO
word = returnWordWithJoy("I love DevOps");

// 아래 코드는 변경하지 마세요
function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type';
  } else {
    return word + '!';
  }
}