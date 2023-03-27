/* factorial

문제
수를 입력받아 n-factorial(n!) 값을 리턴해야 합니다.

출력
number 타입을 리턴해야 합니다.
1 * 2 * ... * num

주의 사항
반복문(for)문을 사용해야 합니다.
factorial(0)은 1로 정의됩니다.
음수 입력은 들어오지 않습니다.

factorial(1) = 1
factorial(2) = 1 * 2 = 2
factorial(3) = 1 * 2 * 3 = 6
factorial(4) = 1 * 2 * 3 * 4 = 24
 */

// for문
function factorial(num) {
    if(num === 0 || num === 1){
        return 1;
    }
    for( let i = num -1; i > 1; i --){
        num *= i;
    }     
    return num;
}

// 재귀함수 
function factorial(num) {
    if (num < 0)
      return -1;
    else if (num == 0)
      return 1;
    else {
      return (num * factorial(num - 1));
    }
  }

// while문
function factorial(num) {
    let result = num;
  
    if (num === 0 || num === 1)
      return 1;
  
    while (num > 1) {
      num--;
      result *= num;
    }
  
    return result;
  }