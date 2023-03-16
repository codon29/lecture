"use strict";
// 라우팅 분리

//해당 도메인으로 들어왔을 때 요청을 받는게 라우터
// 실제 요청을 수행하는 것은 컨트롤러

const express = require("express"); // express 모듈 불러오기
const router = express.Router();    // 앱이라고 하지않고 라우터라고 정의하고 express의 라우터를 불러옴
const ctrl = require("./home.ctrl"); // 콘터롤러와 연결하는 코드
router.get("/", ctrl.output.hello);

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router; //app.js에 연결할수있도록 외부로 내보내기