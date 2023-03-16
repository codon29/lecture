"use strict";

const express = require("express");
// npm i body-parser -s로 설치
const bodyParser = require("body-parser"); // req.body로 받을 때 body를 파싱해서 undefined로 나오는 것을 방지
const app = express();

// 라우팅
const home = require("./src/routes/home"); //routes폴더의 home폴더 안에있는 자바스크립트를 읽어와줘.

// 앱 세팅
app.set("views", "./src/views"); //views로 보여줌, views를 저장할 폴더
app.set("view engine","ejs"); // view engine을 ejs로 사용한다.
app.use(express.static(`${__dirname}/src/public`)) // app.js 파일이 있는 위치에 있는 src안의 public을 정적 경로로 추가하겠다.(프런트를 위한 js만들기 강의)
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));

app.use("/", home);   // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

