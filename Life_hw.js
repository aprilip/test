const LIVE=1, DEAD=0; nLIVE=1;
const readline = require('readline-sync');
class Life {
    constructor(_row,_col)
    {
        this.row = _row;
        this.col = _col;
        this.grid = new Array();
        //create 2d array
        for (let r = 0; r < this.row; r++) 
        {
           this.grid.push(new Array());
           for (let c = 0; c < this.col; c++)
           {
               this.grid[r].push(DEAD);
           }
        }
        
    }

    // Initinalize():void{

    // }

};

Life.prototype.Initialize = function()//Initinalize初始化
{
    //this.grid[3][4] = LIVE;//活著的細胞
    //this.grid[3][5] = LIVE;
    //this.grid[3][6] = LIVE;
    //this.grid[3][7] = LIVE;
   
}

Life.prototype.getStatusAt = function(row, col)
{
    if(row<0 || col <0)
       return DEAD;
    if(row >= this.row || col >= this.col)  
       return DEAD;
    return this.grid[row][col];
}

Life.prototype.setStatusAt = function(row, col, nLIVE)//setStatusAt():void將指定坐標點改成指定狀態
{
    this.grid[row][col]=nLIVE;
}

Life.prototype.neighborCount = function(row, col)//計算活著鄰居
{
    var count=0;
    count += this.getStatusAt(row-1, col-1);//getStatusAt(x,y):bool
    count += this.getStatusAt(row-1, col);
    count += this.getStatusAt(row-1, col+1);
    count += this.getStatusAt(row, col-1);
    count += this.getStatusAt(row, col+1);
    count += this.getStatusAt(row+1, col-1);
    count += this.getStatusAt(row+1, col);
    count += this.getStatusAt(row+1, col+1);
    return count;
}
Life.prototype.update = function()//(下個世代)更新一個新生命
{
    // var nextGrid = new Array();
    // for (let r = 0; r < this.row; r++) {
    //      nextGrid.push([]);
    //      for (let c = 0; c < this.col; c++) {
    //          nextGrid[r].push( this.grid[r][c] );//將原本陣列用push進新的陣列(下個世代)，做複製
    //      }
    // }
    // this.grid; //no duplicate /copy
    var nextGrid = JSON.parse(JSON.stringify(this.grid));//將原本陣列用JSON轉成字串，再轉回陣列物件，複製一個新的陣列(下個世代)//this.grid哪個陣列呼叫用那個陣列執行

    for (let r = 0; r < this.row; r++)
     {
        for (let c = 0; c < this.col; c++) 
        {
            var nCount = this.neighborCount(r, c);
            if(nCount == 3 && this.getStatusAt(r,c)==DEAD){ //DEAD => LIVE
               nextGrid[r][c] = LIVE;}
            if((nCount <2 || nCount>3)){ //LIVE=>DEAD 
               nextGrid[r][c] = DEAD;}
            if((nCount == 0 && r==0 && this.getStatusAt(r,c)==DEAD)){ //=>DEAD //第一行自己等於0(dead)且周圍鄰居存活細胞也為0(dead)時，可以減少判斷緊鄰隔壁的鄰居(因必為dead不會復活)
               c++;
               nextGrid[r][c] = DEAD;}
            if((nCount == 0 && r==this.row-1 && this.getStatusAt(r,c)==DEAD)){ //=>DEAD //最後一行自己等於0(dead)且周圍鄰居存活細胞也為0(dead)時，可以減少判斷緊鄰隔壁的鄰居(因必為dead不會復活)
               c++;
               nextGrid[r][c] = DEAD;}
        }
    }
    this.grid = nextGrid;//OK?

}

//unit test
var xrow = 100;
var xcol = 100;
var game = new Life(xrow,xcol);
//console.log(JSON.stringify(game))
game.Initialize();
var nrow=0;
var ncol=0;
var ncell=0;
while(nrow > -1 && ncol > -1) //無窮迴圈
{
    ncell++;
    nrow = readline.question('請輸入活著的細胞的位置(0~'+(xrow-1)+',結束輸入請打-1) 第'+ncell+'個行 row=');
    if (nrow == -1){
        break;
    }
    ncol = readline.question('請輸入活著的細胞的位置(0~'+(xcol-1)+',結束輸入請打-1) 第'+ncell+'個列 col=');
    if (nrow<0 || ncol<0 || nrow>xrow-1 || ncol>xcol-1){
        break;
    }else{
        game.setStatusAt(nrow,ncol,1);//(r,c,live/dead) 
    }
}

//console.log("3,4: "+game.neighborCount(3,4));
//console.log("3,5: "+game.neighborCount(3,5));
//console.log("2,5: "+game.neighborCount(2,5));
console.log(JSON.stringify(game))
game.update();
console.log(JSON.stringify(game));
game.update();
console.log(JSON.stringify(game));