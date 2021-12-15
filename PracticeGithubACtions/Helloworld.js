//Check the number is positive or negetive
function checkNum(){
  var num = 10
  if(num > 0){
    console.log("Number is positive")
  }
  else
    console.log("number is negetive")
}

// Print odd numbers from 1 to 100
function oddNumbers(){
  for(let i = 1;i<=100;i++){
    if(i%2 != 0)
      console.log(i)
  }
}

//program to print 3rd table
function thirdTable(){
  var n = 3
  for(let i = 1;i<= 10;i++){
    console.log(n+"*"+i+"="+n*i)
  }
}

//swap numbers
function swapNum(){
  var a= 10, b= 5
  console.log("before swap numbers are "+a+","+b)
  a = a+b
  b = a-b
  a = a-b
  console.log("after swap a and b values are "+a+","+b)
}

//reverse number
function reverseNum(){
  var num = 45
  var n = num.toString().split("").reverse().join("")
  console.log("reverse num is "+parseInt(n))
}

//fibonacci series
function fibo(){
  var a= 0, b= 1,n
  console.log(a)
  console.log(b)
  while(b < 13){
    n = a+b
    console.log(n)
    a = b
    b = n
  }
}

//series of numbers
function seriesNum(){
  console.log("series of numbers are")
  for(let i =1;i<=19;i+=3){
    console.log(i)
  }
}

checkNum()
oddNumbers()
thirdTable()
swapNum()
reverseNum()
fibo()
seriesNum()



