/* countCharacter
문제
문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다 

반복문(for)문을 사용해야 합니다.
빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

string 타입의 문자
letter.length는 1

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

*/

function countCharacter(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter){
            count++;
        }
    }
    return count;
}
