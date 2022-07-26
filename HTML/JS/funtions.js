function add(a,b){
    console.log("function called")
    console.log(a+b);
    let c=1;
    const d=3;
    console.log(c);
}

console.log(add(1,2))
if(1=="1"){console.log("equal");}
if(1==1){console.log("equal");}
if(1===1){console.log("equal");}

var anon=function(a,b){
    console.log("anonymus funtion called")
    return a+b;
}
console.log(anon(1,2))

//setTimeout(function(){console.log("anonymus function call in setTimeout");},3000)
//constructor funtion
//var cons=new function("a","b","console.log('in constructor function');return a+b;");
//console.log(cons(1,2));

/*(function(a,b){
    console.log("self invoking function");
    return a+b;
}(1,2));*/