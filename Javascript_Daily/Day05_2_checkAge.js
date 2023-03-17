/* 문제 5-2. checkAge

이름과 나이를 입력받아 나이별로 다른 메시지를 리턴해야 합니다. */

function checkAge(name, age) {
    // TODO: 여기에 코드를 작성합니다.
    if(age>=21){
      return "Welcome, " + name + "!"
    }else{
      return "Go home, " + name + "!"
    }
  }