

// 클래스 생성
class Member {
  // 필드명 
  //생략가능 (#이 있는 형태는 불가)
  fieldA; 

  //생성자 
  //class 생성시, 실행 
  //1. constructor의 속성을 다르게 중복 생성 X
  //2. class 생성시,  앞에서부터 매개변수 삽입
  // 변수 삽입이 많으면 : 매개변수 개수보다 많은 변수는 사라진다.
  // 변수 삽입이 적으면 : 변수가 삽입이 안된 매개변수는 undefined 처리 된다.
  // constructor() {   } 
  //1. 매개변수 적은 케이스 
  constructor(A1, A2 ) { 
    this.fieldA = A1; 
    this.functionA = A2;
  }

  //1. 매개변수 많은 케이스 
  // constructor(A1, A2 ,A3, A4 ) { 
  //   this.fieldA = A1; 
  //   this.functionA = A2;
  //   this.getTestA = A3; 
  //   this.getTestB = A4;
  // }

  //get , set 조건 (get과 set은 무조건 함께 써야된다.)
  //get,set은 _A ,#A 처럼 같은 변수로 사용해야된다.
  //         A 직접 삽입시, 자신이 자신을 호출하여 무한 반복이 발생한다. 
  // ES2019 버전 이후 #( private 필드 선언 ) 기능 추가
  //1. #A형태 : 외부에서 #A 접근 불가, private가 된다.
  #TestA; //외부 사용 : TestA
  get TestA() {
    console.log("  get TestA()");
    return this.#TestA;
  }
  // setter 생성
  set TestA(A) {
    console.log("  set TestA(A) " + A );
    if(A < 1) A = 1;
    this.#TestA = A;
  }
  //1-1. define처럼 사용 
  #DefineA = "정의";  
  get DefineA(){return this.#DefineA;};
  set DefineA(A){console.log("DefineA 수정불가");};
  //
  
  //2. _A형태 : 외부에서 _A 접근 후 수정가능
  //외부 사용 : getTestB
  get TestB() {
    console.log("  get TestB()");
    return this._TestB;
  }
  set TestB(A) {
    console.log("  set TestB(A) " + A );
    if(A < 1) A = 1;
    this._TestB = A;
  }

  //Error A형태 , 무한 반복 -------------
  get getError() {
    console.log("  get getError()");
    return this.getError;
  }
  // setter 생성
  set getError(A) {
    console.log("  set getError(A) " + A );
    if(A < 1) A = 1;
    this.getError = A;
  }
  //----------------------------------------
  
  // 메소드
  // function Print(){ , function미사용
  Print() {
    console.log("class Member 메소드-------------------------");
    console.log(" fieldA :", this.fieldA);
    console.log(" functionA :", this.functionA);
    console.log(" TestA :", this.TestA);
    console.log(" TestB :", this.TestB);
  }
}