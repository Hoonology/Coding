/* isOdd
문제
수를 입력받아 홀수인지 여부를 리턴해야 합니다. */

function isOdd(num) {
    let i = 1;
    while (i < Math.abs(num)) {
        i += 2;
    }
    return (i === Math.abs(num)) ? true : false;
}
