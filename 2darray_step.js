const readline=require("readline-sync");
var row =6,col=6;
//var aryBox=[[0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0]];
var aryBox=[];
var aryVisited=[];
for(let r=0;r<row;r++)
{
    aryBox.push([]);
    aryVisited.push([]);
    for(let c=0;c<col;c++)
    {
        aryBox[r][c]=Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col)//"r,c" 字串 //將陣列做隨機的組合排序
        aryVisited[r][c]=0;
    }
}

do{
    var startR= parseInt(readline.question('Row start?'));
    var startC= parseInt(readline.question('Col start?'));
    if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){
        console.log("Input error! ");
        continue;
    }
    var step=0;
    var idx= aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col(自己設定的存取順序)索引值0會在1的前面
    aryVisited[startR][startC]=1;
    step++;
    console.log("Visit:"+ startR+", "+startC);
    //loop
    while(true){
        var nextR = parseInt(idx[0]);
        var nextC = parseInt(idx[1]);
        if(aryVisited[nextR][nextC]==1){
            console.log("Game over!");
            console.log("total" +step+ "steps");
            break;
        }{
          var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col
          aryVisited[nextR][nextC]=1;
          step++;
          console.log("Visit:"+ nextR+", "+nextC);
        }
    }
 
 
 }while(true) 