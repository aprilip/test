const readline = require('readline-sync');

var top = 101;//index value
var bottom = 0;
var floorName = ['B3','B2','B1','1','2','2M','3','5','6','7','8'];
//1.若使用者輸入錯誤樓層，如何秀出所有樓層名稱 sol->呼叫陣列提供的toString()
//2.用程式建立(陣列內容)floorName樓層名稱（若太多時）HW迴圈,push(),pop(),unshift(),shift()
//3.讓JS暫停一段時間後繼續執行（google）
var currentFloor = 5;//index value of floorName
var targetFloor;//B2->index:1
for(i=9;i<=101;i++)
{
    floorName.push(i.toString())//轉字串
}
console.log(floorName);

while(true) //無窮迴圈
{
    targetFloor = readline.question('目前在'+floorName[currentFloor]+'樓。請問要去哪一層樓？');
//輸入欲達樓層
//判斷樓層是否合理，從floorName.indexOf()取出索引值，若為-1代表無此樓
targetFloor=targetFloor.toUpperCase();
targetFloor=floorName.indexOf(targetFloor);//轉成整數,字串
//if(isNaN(targetFloor)||targetFloor<bottom||targetFloor>top)
if(targetFloor<0)
{
    //console.log("請輸入介於"+floorName[bottom]+"到"+floorName[top]+"之間的樓層名稱！");
    console.log("請輸入介於"+floorName.toString()+"之間的樓層名稱");
    continue; //不繼續執行下面程式碼跳回前面重頭來
}
if(targetFloor==currentFloor)
{
    console.log("謝謝您的搭乘");
    setTimeout(function()
    {
        //要延遲執行的代碼塊
        console.log("離開電梯");
    }, 5000);
    break; //強迫中斷
}//判斷樓層是否合理
else
{
//移動電梯至欲達樓層
//currentFloor移到targetFloor
if(targetFloor<currentFloor)
{ //down
console.log("電梯往下...");
//改用for(初始值;條件判斷;累加減){}
//for(var i=currentFloor; i>targetFloor;i--)
//for(;targetFloor<currentFloor;currentFloor--)//{下方無需再減一}
while(targetFloor<currentFloor)
{
    currentFloor=currentFloor-1;
    //currentFloor-=1;
    //currentFloor--;
    console.log("電梯在"+floorName[currentFloor]+"樓");
}

}
else
{ //up
    console.log("電梯往上...");

        do
        {
            currentFloor=currentFloor+1;
            //currentFloor+=1;
            //currentFloor++;
            console.log("電梯在"+floorName[currentFloor]+"樓");
    
        }
        while(targetFloor>currentFloor); 
   
}

}



//移動電梯至欲達樓層
}
