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

let num2=0;
while (true) {
    if (num2<=6) {
        console.log(num2);
        num2=num2+1
        
        
    }
    else{
        break;
    }
    
}
console.log("SUPPERARE");


// let skip=10
for(i=0;i<=10;i++){
    if(i==5){
        continue
    }else{
        console.log(i);
        
    }
}