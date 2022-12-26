
const express = require("express");
const app = express();  //express framework 사용
app.get("/", (req, res)=>{
res.send("여기는 루트입니다.");
}); //라우팅 기능

app.get("/login",(req,res)=>{
res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text" placeholder="아이디"><br>
        <input type="text" placeholder="비밀번호"><br>
        <button>로그인<button>
    </body>
    </html>`);
});
app.listen(3000, ()=>{
    console.log("서버가동");
}); //3000번 서버 연결