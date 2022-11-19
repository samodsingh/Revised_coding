// 1. The javaScript this keyword refers to the object it blongs to.
// 2. It has different values depending on where it is used.
// 3. Alone, this rfers to the global object
// 4. In a function, in strict mode, this is undefined.
 
console.log(this); // refer windows object.

function fun(){ // Regular function used > refer  global object
    let add = 2 + 2;
    console.log("sum of two no. is "+ add);
    console.log(this);
}  
fun();

// In a method, this refers to the owner object.
let obj = {
    name : "Samod singh",
    age : 22,
    sum : function(){
      let add = 2 + 2;
      console.log("Sum of two no. is "+ add);
      console.log(this);
    }
}
obj.sum();


