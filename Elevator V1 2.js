const readline = require('readline-sync');

var top = 10;
var bottom = 1;
var currentFloor = 5;
var targetFloor;

while(true) //無窮迴圈
//while是一種迴圈語法，用來重覆執行while區塊內的語句。while(condition)當 condition 為 true 時，則重覆執行 while 區塊內的語句， 直至 condition 變 false
{
targetFloor = readline.question('目前在'+currentFloor+'樓。請問要去哪一層樓？');
//輸入欲達樓層
targetFloor=parseInt(targetFloor);//轉成整數
if(isNaN(targetFloor)||targetFloor<bottom||targetFloor>top)
{
    console.log("請輸入介於"+bottom+"到"+top+"之間的整數！");
    continue; //不繼續執行下面程式碼跳回前面重頭來
    //while 區塊內一樣可以使用 break 和 continue 關鍵字，來讓你可以跳出 while 或直接執行下一次迴圈
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