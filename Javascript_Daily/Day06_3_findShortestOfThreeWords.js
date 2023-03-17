/* 문제 6-3. findShortestOfThreeWords

차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다. */

function findShortestOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    if(word1.length <= word2.length && word1.length <= word3.length){
      return word1;
    }else if (word2.length <= word1.length && word2.length <= word3.length){
      return word2;
    }else{
      return word3;
    }
  
  }