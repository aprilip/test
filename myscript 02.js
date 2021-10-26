//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript 變數的使用


//使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行) 
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件

const readline = require('readline-sync');
height = readline.question('請輸入您的身高(cm)?'); 
height=Number(height)// 將字串轉成數字
//判斷是否合理（process)
if(isNaN(height)||height<=0||height>220)
{
    console.log("您輸入的資料有誤！請輸入介於1~220之間的數字")
}
else{
//計算合理體重範圍
height=(height/100);
//當bmi=18.5時的體重?
var idaelLow =18.5*(height**2);
//bmi=24時的體重?
var idaelHi =24*height**2;
console.log("你的理想體重範圍為： "+ idaelLow+"~"+idaelHi+"kg");
}











//not only bmi value, but also judgement
//Ask user to input height only, is it workable?