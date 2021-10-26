const readline = require('readline-sync');

var top = 10;
var bottom = 1;
var currentFloor = 5;
var targetFloor;

while(true) //無窮迴圈
{
targetFloor = readline.question('目前在'+currentFloor+'樓。請問要去哪一層樓？');
//輸入欲達樓層
targetFloor=parseInt(targetFloor);//轉成整數
if(isNaN(targetFloor)||targetFloor<bottom||targetFloor>top)
{
    console.log("請輸入介於"+bottom+"到"+top+"之間的整數！");
    continue; //不繼續執行下面程式碼跳回前面重頭來
}
if(targetFloor==currentFloor)
{
    console.log("離開電梯");
    break; //強迫中斷
}//判斷樓層是否合理
else
{
//移動電梯至欲達樓層
//currentFloor移到targetFloor
console.log("to be countinue...");
if(targetFloor<currentFloor)
{ //down
console.log("電梯往下...");
//改用for(初始值;條件判斷;累加減){}
while(targetFloor<currentFloor)
{
    currentFloor=currentFloor-1;
    //currentFloor-=1;
    //currentFloor--;
    console.log("電梯在"+currentFloor+"樓");
}

}
else
{ //up
    console.log("電梯往上...");
    while(targetFloor>currentFloor)
    {
        currentFloor=currentFloor+1;
        //currentFloor+=1;
        //currentFloor++;
        console.log("電梯在"+currentFloor+"樓");
    }
    
}

}



//移動電梯至欲達樓層
}