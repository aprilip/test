const readline = require("readline-sync");

var Row=6, Col=6;
// var aryBox=[[0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0]];
var aryBox=[];
var aryVisited=[]

//define a new object
class Index//要宣告一個類別，你要使用關鍵字class搭配類別名稱//你需要先宣告你的類別，然後存取它
{
    constructor(_row, _col)//constructor為建構元函數 //_row、 _col前方底線為好辨認
    //constructor為建構元函數，用來建立和初始化一個類別的物件。一個類別只能有一個名為建構子(constructor)的特別方法 
    //是個隨著class一同建立並初始化物件的特殊方法
    {
       if(_row>=0 && _row<Row && _col>=0 && _col <Col)
       {
            this.row = _row; //attribute屬性
            this.col = _col; //this
       }else
       {
            this.row = null;//null表示空值，即該處的值現在為空。 調用函數時，某個参數未設置任何值，这时就可以传入null，表示該参數為空
            this.col = null;
       }
    }
    print()
    { //method
        return ("["+this.row+", "+this.col+"]");
    }
}

//unit test
// var i1 = new Index(0, 2)
// var i2 = new Index(3, 3)
// console.log(i1.print());
// console.log(i2.print());



for (let r = 0; r <Row; r++) 
{
    aryBox.push([]);
    aryVisited.push([]);
    for (let c = 0; c < Col; c++) 
    {
        //aryBox[r][c]=Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col); //"r,c"
        aryBox[r][c] = new Index(Math.floor(Math.random()*Row), Math.floor(Math.random()*Col));
        aryVisited[r][c]=0;
    }
}


   do
   {
   var startR= parseInt(readline.question('Row start?'));
   var startC= parseInt(readline.question('Col start?'));
   if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=Row || startC<0 || startC>=Col){
       console.log("Input error! ");
       continue;
   }
   var steps=1;
  // var idx= aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col
   var idx= aryBox[startR][startC];
   aryVisited[startR][startC]=1;
   console.log("Visit:"+ startR+", "+startC);
   //loop
   while(true)
   {
       var nextR = idx.row;
       var nextC = idx.col;
       if(aryVisited[nextR][nextC]==1){
           console.log("Game over! total steps:"+steps);
           break;
       }{
         //var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col
         idx = aryBox[nextR][nextC];
         aryVisited[nextR][nextC]=1;
         steps++;
         console.log("Visit:"+ nextR+", "+nextC);
       }
   }


}while(true) 