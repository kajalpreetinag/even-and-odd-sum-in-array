const  input = require("readline-sync")
let n = input.questionInt("enter the number: ")
let array=[];
let i = 0;

while(i<n)
{
    let a = input.questionInt("enter :")
    array[i]=a;
    i++   
}
i=0;
let even=0;
let odd= 0;
while(n>i){
    if(array[i]%2==0){
        even=even+array[i]
    }
    else{
        odd=odd+array[i]
    }
    i++
    
}
console.log("sum of even number: ",even);
console.log("sum of odd  number: ",odd );

