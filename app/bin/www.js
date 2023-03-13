"use strict";

// app.listen()모듈화

const PORT =3000;

const app = require("../app")

app.listen(PORT, () => {
    console.log("서버가동")
});