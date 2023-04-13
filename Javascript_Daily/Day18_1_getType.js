/* getType
문제
임의의 값을 입력받아 타입을 리턴해야 합니다.

입력
인자 1 : anything
임의의 값
출력
string 타입을 리턴해야 합니다.
1
ex) 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'

let output = getType('hello');
console.log(output); // --> 'string'

output = getType(10);
console.log(output); // --> 'number'

output = getType(true);
console.log(output); // --> 'boolean'

output = getType({ name: 'Steve' });
console.log(output); // --> 'object'

output = getType([100, 200, 300]);
console.log(output); // --> 'array' */

/* 
1. 자바스크립트에서 타입을 확인하는 방법을 검색해 봅니다.
2. 배열의 타입을 확인하면 "object" 입니다. 배열을 따로 구분할 수 있는 방법을 검색해 봅니다.  */

function getType(value) {
    if (value === null) {
      return "null";
    } else if (Array.isArray(value)) {
      return "array";
    } else {
      return typeof value;
    }
  }
  
