num=20;
for(i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i}`);
    
}
let num1=20
let a=[];
while (num1>=0) {
    if(num1 % 2==0){
        console.log(`even = ${num1}`);
        // a.unshift(`even = ${num1}`)
        a=[`even = ${num1}`,...a]
        num1=num1-1;
        
    }else{
        console.log(`odd = ${num1}`);
        // a.unshift(`odd = ${num1}`)
         a=[`odd = ${num1}`,...a]
        num1=num1-1;
    }
    
}
console.log(a);

