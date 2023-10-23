
class regexType{
  /*
    자바스크립트 정규식 :   /[]/플러그인
    [^] : [] 안의 ^는 부정의 의미
    ^[] : [] 앞의 ^는 '처음(시작)'의 의미
    []+ : [] 뒤의 +는 1개 이상,  *은 0개 이상, ? 0개나 1개
    []+$: [] +$ []안의 문자가 1개 이상으로, 또 끝날수도 있다는것.
    ( ) : 그룹
    ?=.*  : 앞쪽 모두(.)일치를 반복(*) 한다.
    w  : 알파벳(대/소문자), 숫자, 밑줄(_) 의 포함유무
    자바스크립트에서의 한글은 유니코드에 완성된 코드로 등록되어 있기에 특수코드로 취급되지 않는다.
  */

    
    #regex0_1 = /\w/;  // 영문자/숫자/_ 포함 -> true 
    get regex0_1(){return this.#regex0_1;};
    set regex0_1(A){console.log("regex0_1 수정불가");};
    
    //함수만 만든다?
    regex0_1(content){
      // 영문자/숫자/_ 포함 -> true 
      regex = /\w/;  
      return regex.test(content);
    }
    regex0_2(content){
      regex = /\W/ ; // 영문자/숫자/_ 포함 -> false
      return regex.test(content);
    }
    regex1_1(content){
      regex = /[a-z]/;   // 영문 소문자 포함 -> true
      return regex.test(content);
    }
    regex1_2(content){
      regex = /[^a-z]/;   // 영문 소문자만 포함 -> false , 다른 문자 포함시, true
      return regex.test(content);
    }

    regex2_1(content){
      regex = /[A-Z]/;    // 영문 대문자 포함 -> true
      return regex.test(content);
    }
    regex2_2(content){
      regex = /[^A-Z]/;   // 영문 대문자만 포함 ->false , 다른 문자 포함시, true
      return regex.test(content);
    }

    regex3_1(content){
      regex = /[0-9]/;    // 숫자를 포함 -> true
      return regex.test(content);
    }
    regex3_1_1(content){
      regex = /[0-9]+$/;    // 숫자만 포함 -> true
      return regex.test(content);
    }    
    regex3_2(content){
      regex = /[^0-9]/;   // 숫자만 포함 -> false
      return regex.test(content);
    }
    regex3_3(content){
      regex = /\d/ ; // 숫자을 포함 -> true
      return regex.test(content);
    }
    regex3_4(content){
      regex = /\D/ ; // 숫자만 포함 -> false 
      return regex.test(content);
    }

    regex4_1(content){
      regex = /[ㄱ-힣]/; // 한글을 포함 -> true
      return regex.test(content);
    }
    regex4_2(content){
      regex = /[^ㄱ-힣]/;// 한글만 포함 -> false
      return regex.test(content);
    }   

    regexA1_1(content){
      regex  = /[a-zA-Z0-9]/;  // 영문자와 숫자를 포함하고 있느냐?
      return regex.test(content);
    }
    regexA1_2(content){
      regex = /[^a-zA-Z0-9]/;  // 영문자와 숫자만 포함하고 있느냐?
      return regex.test(content);
    }   
    regexA1_3(content){
      regex = /[^a-zA-Z0-9_]/;  // 아이디는 영문자 숫자 밑줄만 포함하느냐?
      return regex.test(content);
    }   


}

class DataChange{
  // 콤마 변환함수
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }
}