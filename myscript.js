//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript 變數的使用

var weight=50.5;
var height=160;
var bmi = weight/((height/100)**2);// 除100是將公分變公尺

console.log("Hello! Your BMI value is "+ bmi);

//使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行) 
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件

const readline = require('readline-sync');
weight = readline.question('請輸入您的體重(kg)?');//使用者輸入的是字串
height = readline.question('請輸入您的身高(cm)?');//使用者輸入的是字串
weight=Number(weight)// 將字串轉成數字
height=Number(height)// 將字串轉成數字
//下列判斷是否合理（process)
if(isNaN(weight)||weight<=0||weight>630)//isNaN判斷是否為數值//NaN輸入不正確語言
{
    console.log("您輸入的資料有誤！請輸入介於1~630之間的數字")
}
else if(isNaN(height)||height<=0||weight>220)//延續if的屬性，倘若if內陳述式的程式碼與判斷式不相符，就會直接執行else if的陳述式，結尾要用else
{
    console.log("您輸入的資料有誤！請輸入介於1~220之間的數字")
}
else
{
//下列計算bmi值
var bmi = weight/((height/100)**2);

console.log("Hello! Your BMI value is "+ bmi);
}
if(weight>=10 && weight<=200)
{
    if(height>=50&&height<=220)
    {
        var bmi = weight/((height/100)**2);
        
        console.log("Hello! Your BMI value is "+ bmi);
    }
    else
    {
        console.log("身高數值不在範圍內");
    }
}
else
{
    if(height>=50&&height<=220)
    {
        console.log("體重數值不在範圍內");
    }
    else
    {
        console.log("身高&體重數值不在範圍內");
    }
    
}








//not only bmi value, but also judgement
//Ask user to input height only, is it workable?