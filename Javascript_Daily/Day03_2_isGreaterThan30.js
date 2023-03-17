/* 문제 3-2. isGreaterThan30

수를 입력받아 30 보다 크면 리턴되는 값 
 */

function isGreaterThan30(temp) {
    // TODO: 여기에 코드를 작성합니다.
    if (temp >=30){
      return "에어컨을 켜야겠다!"
    }else{
      return "여름이 매우 덥네요"
    }
    }
  
  
  // 삼항연산으로 풀 경우
  function isGreaterThan30(temp) {
    return (temp >= 30 ? '에어컨을 켜야겠다!' : '여름이 매우 덥네요');
  }