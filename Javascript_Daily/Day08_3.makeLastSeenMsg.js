/* 문제 8-3. makeLastSeenMsg
사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴해야 합니다.

string 타입을 리턴해야 합니다.
미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 내림처리하여 표기합니다.
미접속 시간이 24시간 보다 클 경우, 일 단위로 내림처리하여 표기합니다.

 */
function makeLastSeenMsg(name, period) {
    if(period < 60){
        return `${name}: ${period}분 전에 접속함`
    } else if(period<1440){
        return `${name}: ${Math.floor(period/60)}시간 전에 접속함`
    } else{
        return `${name}: ${Math.floor(period/1440)}일 전에 접속함`
    }
  }
  
output = makeLastSeenMsg('mike', 22);
console.log(output); // --> 'mike: 2일 전에 접속함'
