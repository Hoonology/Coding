/* 수를 입력받아 3 그리고 5로 각각 나눈 뒤 나머지 값에 따라 알맞은 메시지를 리턴해야 합니다.

string 타입을 리턴해야 합니다.
3으로 나누어 떨어지는 경우, 'Fizz'를 리턴해야 합니다.
5으로 나누어 떨어지는 경우, 'Buzz'를 리턴해야 합니다.
3과 5로 모두 나누어 떨어지는 경우, 'FizzBuzz'를 리턴해야 합니다.
3이나 5로 나누어 떨어지지 않는 경우, 'No FizzBuzz'를 리턴해야 합니다.


입출력 예시

let output = test2(3);
console.log(output); // --> 'Fizz'

output = test2(5);
console.log(output); // --> 'Buzz'

output = test2(15);
console.log(output); // --> 'FizzBuzz'

output = test2(7);
console.log(output); // --> 'No FizzBuzz' */


function test2(num) {
    if(num % 3 ===0 && num %5 ===0){
        return 'FizzBuzz'
    } else if(num % 3 === 0){
        return 'Fizz';
    } else if(num % 5 === 0){
        return 'Buzz';
    } else{
        return 'No FizzBuzz'
    }
  }
  