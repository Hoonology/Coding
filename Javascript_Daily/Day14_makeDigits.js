/* makeDigits
문제
ㅊ

let output = makeDigits(5);
console.log(output); // --> "12345"

*/

function makeDigits(num) {
  let result = ""; // initialize an empty string to hold the concatenated digits
  for (let i = 1; i <= num; i++) {
    result += i.toString(); // concatenate the current index to the result string
  }
  return result; // return the concatenated string
}

  