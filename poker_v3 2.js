var poker=[];
for(var i=0;i<52;i++)
{
switch(parseInt(i/13))
{
    case 0:
        poker.push("H"+(parseInt(i%13)+1));
        break;
    case 1:
        poker.push("S"+(parseInt(i%13)+1));
        break;
    case 2:
        poker.push("C"+(parseInt(i%13)+1));
        break;
    case 3:
        poker.push("D"+(parseInt(i%13)+1));
        break;
}
}
console.log(poker.toString());

var player1=[], player2=[], player3=[], player4=[];

function compare(a,b)
{
return Math.random()-0.5;
//Math.random() 會回傳一個介於0 ~ 1的數字，Math.random() - 0.5 自然就會回傳一個介於-0.5 ~ +0.5的數字。
//如果排序時，給定任兩個數字(a, b)，隨機回傳一個介於-0.5 ~ +0.5的數值，表示任兩個數字之間的大小相對關係是隨機的。所以排序完的結果也是隨機的。
}
poker.sort(compare);
console.log(poker.toString());

