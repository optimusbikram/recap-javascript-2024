


//Primitive 

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
//(Call by Value) All these datatypes 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail;
const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)
//Reference (Non Primitive)

//Array,Objects,Functions
const heros = ["bikram","Jena", "Jit"]
console.log(typeof heros)
let myObj = {
    name : "Bikram",
    age : 24,
}
const myfunction = function(){
    console.log("Hello world")
}
