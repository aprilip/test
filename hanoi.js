var count=0;//移動次數

 function hanoi(n,  p1, p2, p3)//河內塔
 //1.直徑較小的套環永遠置於直徑較大的套環上。
 //2.套環可任意地由任何一個木樁移到其他的木樁上。
 //3.每一次僅能移動一個套環，而且只能從最上面的套環開始移動
 {  
      count++;
      if (n==1) //遞迴出口 
             console.log("套環從 "+p1+" 移到 "+ p3);
      else
      {  
             hanoi(n-1, p1, p3, p2);
             console.log("套環從 "+p1+" 移到 "+ p3);
             hanoi(n-1, p2, p1, p3);
       }
  }

  hanoi(3,"杆子1","杆子2","杆子3");
  console.log(count) 