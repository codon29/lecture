"use strict";

const express = require("express");
const app = express();



// 앱 세팅
app.set("views", "./views"); //views로 보여줌, views를 저장할 폴더
app.set("view engine","ejs"); // view engine을 ejs로 사용한다.


const home = require("./routes/home"); //routes폴더의 home폴더 안에있는 자바스크립트를 읽어와줘.
app.use("/", home);   // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

