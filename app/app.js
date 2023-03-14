"use strict";

const express = require("express");
const app = express();



// 앱 세팅
app.set("views", "./src/views"); //views로 보여줌, views를 저장할 폴더
app.set("view engine","ejs"); // view engine을 ejs로 사용한다.
app.use(express.static(`${__dirname}/src/public`)) // app.js 파일이 있는 위치에 있는 src안의 public을 정적 경로로 추가하겠다.(프런트를 위한 js만들기 강의)

const home = require("./src/routes/home"); //routes폴더의 home폴더 안에있는 자바스크립트를 읽어와줘.
app.use("/", home);   // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

