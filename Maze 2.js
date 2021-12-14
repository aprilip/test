var  MAZE= [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,1,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
   ]; //減少檢查邊界 //0可走 1不可走


var currentRow=1, currentCol=1;//start point
var exitRow=8, exitCol=10;//end point

class Point//要宣告一個類別，你要使用關鍵字class搭配類別名稱//你需要先宣告你的類別，然後存取它
{
    constructor(_row, _col)
    //constructor為建構元函數，用來建立和初始化一個類別的物件。一個類別只能有一個名為建構子(constructor)的特別方法 
    //是個隨著class一同建立並初始化物件的特殊方法
    //_row、 _col前方底線為好辨認
    {
        this.row = _row;//this代表本身
        this.col = _col;
    }
    print()
    {
        return "("+this.row+", "+this.col+")";
    }
}

//Stack
var stack=[];//記錄走過的點
stack.push(new Point(currentRow, currentCol)); //push start point to stack
MAZE[currentRow][currentCol] = 2;
var isTrackBack=false;//只是設個變數來判斷
//try to find exit
//!(currentRow==exitRow && currentCol==exitCol)
while(currentRow != exitRow || currentCol!=exitCol)
{
//down
if(MAZE[currentRow+1][currentCol] == 0)
{
    MAZE[currentRow+1][currentCol] = 2;
    if(isTrackBack == true)//pop出來的點會變true
    {
        stack.push(new Point(currentRow, currentCol));
        isTrackBack=false;//push回去後要便會原本設定的變數false
    }
    stack.push(new Point(currentRow+1, currentCol)) 
    currentRow+=1;
    continue;
}
 
//left
if(MAZE[currentRow][currentCol-1] == 0)
{
    MAZE[currentRow][currentCol-1] = 2;
    if(isTrackBack == true)
    {
        stack.push(new Point(currentRow, currentCol));//將剛pop出來但可以有另外出路的點push回陣列
        isTrackBack=false;
    }
    stack.push(new Point(currentRow, currentCol-1)) 
    currentCol-=1;
    continue;
}   
 

//right
if(MAZE[currentRow][currentCol+1] == 0)
{
    MAZE[currentRow][currentCol+1] = 2;
    if(isTrackBack == true)
    {
        stack.push(new Point(currentRow, currentCol));
        isTrackBack=false;
    }
    stack.push(new Point(currentRow, currentCol+1)) 
    currentCol+=1;
    continue;
}

//up
if(MAZE[currentRow-1][currentCol] == 0)
{
    MAZE[currentRow-1][currentCol] = 2;
    if(isTrackBack == true)
    {
        stack.push(new Point(currentRow, currentCol));
        isTrackBack=false;
    }
    stack.push(new Point(currentRow-1, currentCol)) 
    currentRow-=1;
    continue;
}    
    
    
//如何排序(上下左右)讓每個零都走過//只能用腦袋走過一遍(下左右上)
//terminal
if(stack.length>0)
{
    //pop previous point
    var prev= stack.pop();
    isTrackBack = true;
    //current point set to previous point
    currentRow = prev.row;
    currentCol = prev.col;
 }//Q:pop出來的折返點會不見，但卻是到出口必經的路 ok
 else
 {
     console.log("No solution!");
     break;
 }

} 
