var num = 123
 var sum = 0 
 var digit
  while(num>0) {
     digit = num % 10
      sum += digit
       num  =  parseInt(num/10)
     } 
     document.write(sum)     