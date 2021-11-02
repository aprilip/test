function bracketMatch(inputString) {
    var opening = []; //stack
    var isMatched = true;
    var i = 0;
    var symbol = inputString.charAt(i);
    while (isMatched && symbol != '')// c語言末字:\n為換行 //JS末字:'' //!為非
     {
        if (symbol == '{' || symbol == '(' || symbol == '[')//遇到左括號會被放進陣列
            {opening.push(symbol);}
        if (symbol == '}' || symbol == ')' || symbol == ']')//遇到右括號往下與左括號進行配對
         {
            if (opening.length == 0) //stack empty?堆疊中左括號已空，表示右括號過多
                isMatched = false;
            else {
                match = opening.pop();//取出先前（最後一次）放入的左括號進行配對，相配就會繼續執行迴圈，不符就會跳出迴圈顯示unmatched
                isMatched = (symbol == '}' && match == '{') || (symbol == ')' && match == '(') ||
                    (symbol == ']' && match == '[');
            }
        }
        i++;//若字串不為括號則會跳出迴圈繼續取下一個字
        symbol = inputString.charAt(i);
    }
    if (opening.length > 0 || !isMatched)
        return 'unmatched';//其中只要有一個不相符就會跳出迴圈
    else
        return 'matched';//整個字串判斷完畢若都相符（必為真，且不等於空字串）
}
//test 
//var str= "{a = (1 + v(b[3 + c[4]]))"
var str= "{((a))(()"
console.log(bracketMatch(str)); 