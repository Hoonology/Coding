/* 문제 8-2. forSum

문제
수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다.

*/

function sumTo(num) {
    let sum = 0;
   for(i = 0; i <= num; i++){
       sum = sum + i;
   }
   return sum;
  }