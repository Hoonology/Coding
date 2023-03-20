/* 문제 8-2. findMinLengthOfThreeWords
세 개의 단어를 입력받아 그 중 가장 짧은 단어의 길이를 리턴해야 합니다.

number 타입을 리턴해야 합니다.
단어들의 길이가 모두 같은 경우, 그 길이를 리턴해야 합니다.

 */

function findMinLengthOfThreeWords(word1, word2, word3) {
    if(word1.length < word2.length && word1 .length < word3.length){
        return word1.length;
    } else if(word2.length < word1.length && word2.length < word3.length){
        return word2.length;
    } else if(word3.length < word1.length && word3.length < word2.length){
        return word3.length;
    } else if(word1.length=word2.length=word3.length){
        return word1.length
    }
}
  
  