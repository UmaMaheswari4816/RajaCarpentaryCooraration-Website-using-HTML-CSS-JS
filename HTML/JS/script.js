var a;
console.log(a);
a="uma";
console.log(a);
console.log(typeof a);
b=1;
console.log(b);
console.log(typeof b);
c=true;
console.log(c);
console.log(typeof c);
d=null;
console.log(d);
console.log(typeof d);
var ar=[1,2,3];
var arr=new Array("uma","mahe");
console.log(ar);
console.log(ar.length);
console.log(arr);
console.log(arr.length);
a=1;
b="uma";
console.log(a+b);
console.log("Arithmetic Operator")
a=1+2
console.log(a)
a=1-2
console.log(a)
a=1*2
console.log(a)
a=1/2
console.log(a)
a=1%2
console.log(a)

console.log("Assignment Operator")
a=9
console.log(a+=1)

console.log(a-=1)

console.log(a*=2)

console.log(a/=2)

console.log(a%=2)
function square(a){console.log(a*a);}
console.log("named fun"+square(5))
var f=function(a){console.log(a*a);}
console.log("anynomus fun"+f(5))
//var c=new function("a","return a*a")
console.log(function(a,b){return a+b;}(2,3))