"use strict";
// 컨트롤러 분리

const hello = (req,res) => {
    // view로 설정해놓은 views에서 경로시작. 
    res.render("home/index"); // views의 home에 들어가서 index 파일
}

const login = (req,res) =>{ 
    res.render("home/login"); 
};

// 라우터에서 불러올 수 있도록 추출
module.exports = { 
    hello, // hello:hello
    login, // login:login
};