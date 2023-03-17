/* 문제 6-2. computeAverageLengthOfWords2

두 단어를 입력받아 두 단어의 평균 길이를 **내림하여** 리턴해야 합니다. */

function computeAverageLengthOfWords2(word1, word2) {
    // TODO: 여기에 코드를 작성합니다.
    let length_total = word1.length + word2.length
    let length_avg = length_total/2
    return Math.floor(length_avg)
    
  }