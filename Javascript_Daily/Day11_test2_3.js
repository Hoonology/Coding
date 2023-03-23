/* eplaceAll
문제
문자열과 두 개의 문자(from, to)를 입력받아,
문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.

입력

인자 1 : str
- string 타입의 문자열

인자 2 : from
- string 타입의 문자
- from.length는 1

인자 3 : to
- string 타입의 문자
- to.length는 1

출력
- string 타입을 리턴해야 합니다.

입출력 예시

let output = replaceAll('loop', 'o', 'e');
console.log(output); // --> 'leep' 

*/
function replaceAll(str, from, to) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === from) {
        newStr += to;
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  }

  
 /*
먼저 수정된 문자열을 저장하기 위해 빈 문자열 newStr을 초기화합니다.
그런 다음 for 루프를 사용하여 입력 str 문자열의 각 문자를 반복합니다.
루프 내에서 현재 문자가 from 문자와 같은지 확인합니다.
그렇다면 to 문자를 newStr 문자열에 추가합니다. 
그렇지 않은 경우 str 문자열에서 현재 문자를 추가합니다.
마지막으로 수정된 newStr 문자열을 반환합니다.

이 코드는 이전 replaceAll 함수와 동일한 결과를 달성하지만 
문자열 개체의 replace 메서드 대신
for 루프를 사용하여 from 문자의 모든 항목을 to 문자로 바꿉니다.

*/