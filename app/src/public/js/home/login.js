"use strict";

// DOM -> Document Object Model
// document.querySelector("특정 #id값 또는 태그")
const  id = document.querySelector("#id"),
    psword= document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click", login);

    function login (){
        const req = {
            id : id.value,
            psword: psword.value,
        };
        console.log(req);

    }