"use strict";
// 컨트롤러 분리



const output = {
    hello: (req,res) => {
        // view로 설정해놓은 views에서 경로시작. 
        res.render("home/index"); // views의 home에 들어가서 index 파일
    },

    login: (req,res) =>{ 
        res.render("home/login"); 
    },
};

const users = {
    id: ["woorimIT", "이창규", "김팀장"],
    psword: ["1234", "1234", "123456"]
};
const process = {
    login:(req,res) =>{
        console.log(req.body);
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: " 로그인에 실패하셨습니다.",
        });
    },
    
}




// 라우터에서 불러올 수 있도록 추출
module.exports = { 
    // hello, // hello:hello
    // login, // login:login
    output,
    process,
};