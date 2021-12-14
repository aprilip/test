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
var aryVisitedBox=[];
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

//do{
//    var startR= parseInt(readline.question('Row start?'));
    //var startC= parseInt(readline.question('Col start?'));
    //if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){
      //  console.log("Input error! ");
       // continue;
   // }
    var step=0
    var stepmax=0
    var stepN=0;//記錄部數最多的索引值(如果最多有2個以上同樣步數的也會記錄)
    var d=0;//目前無用到
    var VisitString="";//記錄所有走過的位置用的
    for(let m=0;m<row;m++)
    {
    for(let n=0;n<col;n++)
    {
        for(let r=0;r<row;r++)
        {
        aryVisited.push([]);
        for(let c=0;c<col;c++)
        {
            aryVisited[r][c]=0;
        }
    }//清除陣列
    var startR=m;
    var startC=n;

    var idx= aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col(自己設定的存取順序)索引值0會在1的前面
    aryVisited[startR][startC]=1;
    step++;
    d++;
    VisitString=startR+","+startC;
    //console.log("Visit:"+ startR+", "+startC);
    //loop
    
  for(let stepover=0;stepover<row*col;stepover++)//row*col=6*6=36、stepover為變數，指計算全部試完後，當找到1(表示已經走過)的時候，表示走完了，就直接設為最大，讓他跳出回圈
{
    
        var nextR = parseInt(idx[0]);
        var nextC = parseInt(idx[1]);
        if(aryVisited[nextR][nextC]==1)
        {
            //console.log("Game over!");
            //console.log("total" +step+ "steps");
            console.log(m+","+n+"共"+step+"步:"+VisitString);
            if(step==stepmax)
            {
                stepN=stepN+"&"+m+","+n;
            }
            if(step>stepmax)
            {
                stepmax=step;
                stepN=m+","+n;
            }
            step=0;
            //aryVisited=[];//aryVisited=[];
            //aryVisitedBox[d]=VisitString;
            //break;
            stepover=row*col;
    }else
    {
          var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col
          aryVisited[nextR][nextC]=1;
          step++;
          //console.log("Visit:"+ nextR+", "+nextC);
          VisitString=VisitString+"-"+nextR+","+nextC;
    }
    } //從0.0->0.1->0.2一格一格開始走看看
}//n
}//m
console.log("最長路徑起點"+stepN);
//1.算步數 count item /total steps 2.拜訪過的要歸零 3.最長的起點 //不重複