/* 문제 9 findTheBug
문자열을 입력받아 버그('#')의 인덱스를 리턴해야 합니다. 

반복문(for)문을 사용해야 합니다.
'#' 기호가 없는 경우 undefined를 리턴해야 합니다.

*/


function findTheBug(word) {
    for(let i = 0; i < word.length; i++){
        if(word[i] === '#'){
            return i;
        }
    }
    return undefined;
}
  