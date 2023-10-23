


function textboxAA(A){
  return `display: inline-block; 
          width: ${A}; 
          color: black; 
          text-align : left; `;
}

textBoxA = textboxAA;

function loginView(){
  return `
  <form class="logInbox" action="./Login_Site.html" method="get">
    <fieldset>
      <br>
        <div style="text-align: center;">
          <div>
            <label for="id" style="${textBoxA('10%')}" >아이디</label>
            <input type="text" id="id" placeholder="아이디를 입력하세요" required />
          </div><br/>
          <div>
            <label for="pw" style="${textbox('10%')}">비밀번호</label>
            <input type="password" id="pw" placeholder="비밀번호를 입력하세요" required />
          </div><br/><br/>
          <input type="submit"  value="비회원"/>
          <input type="button"  value="로그인"/><br/><br/>
          <input type="button"  value="회원가입" style="	width: 40%"/>
        </div>
    </fieldset>
  </form>
  `;
  }

