var poker=[];
for(var i=0;i<52;i++)
{
switch(parseInt(i/13))
{
    case 0:
        if (parseInt(i%13)<9){//因比數字大小的話，H2會比H12大（由第一個數字判斷），故需將1~9改為字串01~09
            poker.push("H"+"0"+(parseInt(i%13)+1));
        }
        else{//10~13則不符上述故跳出直接印出
        poker.push("H"+(parseInt(i%13)+1));}
        break;
    case 1:
        if (parseInt(i%13)<9){
            poker.push("S"+"0"+(parseInt(i%13)+1));
        }
        else{
        poker.push("S"+(parseInt(i%13)+1));}
        break;
    case 2:
        if (parseInt(i%13)<9){
            poker.push("C"+"0"+(parseInt(i%13)+1));
        }
        else{
        poker.push("C"+(parseInt(i%13)+1));}
        break;
    case 3:
        if (parseInt(i%13)<9){
            poker.push("D"+"0"+(parseInt(i%13)+1));
        }
        else{
        poker.push("D"+(parseInt(i%13)+1));}
        break;
}
}
console.log(poker.toString());

var player1=[], player2=[], player3=[], player4=[];
for(let i =0;i< poker.length;)
{
var rand=Math.floor(Math.random()*poker.length);

player1.push(poker[rand]);
poker.splice(rand,1);

var rand=Math.floor(Math.random()*poker.length);

player2.push(poker[rand]);
poker.splice(rand,1);

var rand=Math.floor(Math.random()*poker.length);

player3.push(poker[rand]);
poker.splice(rand,1);

var rand=Math.floor(Math.random()*poker.length);

player4.push(poker[rand]);
poker.splice(rand,1);
}
function compare(a,b)
{
 if(b.charCodeAt(0)==a.charCodeAt(0))//如果第一個字相同（英文）大小寫ex:A,a代碼不同
{
  // compare charAt(1),charAt(2)

  if(b.charAt(1)==a.charAt(1))//如果第二個字相同（數字）沒有大小寫故代碼一樣
 {
  return b.charAt(2)-a.charAt(2)//比第三個字（數字）
 }
 else
 {
  return b.charAt(1)-a.charAt(1)//比第二個字（數字）
 }
}
 else
{
 return b.charCodeAt(0)-a.charCodeAt(0)//比第一個字（英文）
}
}



 
player1.sort(compare);//利用英文大小排序（大到小）

console.log("Player1:"+player1)


player2.sort(compare);

console.log("Player2:"+player2)


player3.sort(compare);

console.log("Player3:"+player3)

player4.sort(compare);

console.log("Player3:"+player4)