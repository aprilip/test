var poker=[];
for(var i=0;i<52;i++)
{
switch(parseInt(i/13))//switch...case判斷各種不同的程式碼，而決定要執行哪個部分的程式碼//parseInt解析字符串並返回整數
//switch-->case 必須要先設定好各種條件
{
    case 0://i/13商為0時
        poker.push("H"+(parseInt(i%13)+1));//%為餘數//i%13為i/13後的餘數
        break;
    case 1://i/13商為1時
        poker.push("S"+(parseInt(i%13)+1));
        break;
    case 2://i/13商為2時
        poker.push("C"+(parseInt(i%13)+1));
        break;
    case 3://i/13商為3時
        poker.push("D"+(parseInt(i%13)+1));
        break;
//每個case後面都加一個break，當符合該case時，執行完後，透過break跳出這個switch不再執行switch內的其他程式碼
}
}
console.log(poker.toString());//toString()用來將數字轉型成字串

var player1=[], player2=[], player3=[], player4=[];
for(let i =0;i< poker.length;)
{
var rand=Math.floor(Math.random()*poker.length);//Math.random隨機亂碼
//Math.floor用於將作為參數傳遞的數字沿向下取整方向(即朝較小的值)四舍五入到最接近的整數
console.log(poker[rand]);//rand為索引值
player1.push(poker[rand]);
poker.splice(rand,1);//___.splice(新增,刪除,加入的項目)

var rand=Math.floor(Math.random()*poker.length);
console.log(poker[rand]);
player2.push(poker[rand]);
poker.splice(rand,1);

var rand=Math.floor(Math.random()*poker.length);
console.log(poker[rand]);
player3.push(poker[rand]);
poker.splice(rand,1);

var rand=Math.floor(Math.random()*poker.length);
console.log(poker[rand]);
player4.push(poker[rand]);
poker.splice(rand,1);
}
console.log("Player1:"+player1)
console.log("Player2:"+player2)
console.log("Player3:"+player3)
console.log("Player4:"+player4)
//先印出隨機發出的牌，再將牌分給四個玩家