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
    
        console.log("req:",req); //{id: 'qwe', psword: 'asdasd'}
        console.log("json",JSON.stringify(req)); //json {"id":"qwe","psword":"asdasd"}
        fetch("/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(req), // stringify는 오브젝트 파일을 문자열로 바꿔주는 메서드
        })
        .then((res) => res.json())
        .then((res) => {
            
        });

    }