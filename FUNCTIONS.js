function greet(name){
    console.log(`HELLO ${name}`);
    
}
greet("yusuf")

let sum1=function(a,b){
    console.log(a+b);
    
}
sum1(5,5)

let evenOdd=function(n){
    if(n%2==0){
        console.log("EVEN");
        
    }else{
        console.log("Odd");
        
    }
}
evenOdd(3)

let squre=function(n){
    return Math.sqrt(n)
}

console.log(squre(4));

let numbers=function(){
    for(i=0;i<=6;i++){
        console.log(i);
        
    }
}
numbers()

let mul=function(n){
    for(i=1;i<=10;i++){
        console.log(n*i);
        
    }
}
mul(2)
console.log("-".repeat(30));


let sumNumbers=function(n){
    let n2=n
    let total=0;
    while (n2>=0) {
        total=total+n2
        n2=n2-1;

        
    }
    console.log(total);
    
}
sumNumbers(5)
