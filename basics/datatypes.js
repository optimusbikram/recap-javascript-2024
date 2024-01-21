


//Primitive 

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
//(Call by Value) All these datatypes ,uses Stack
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail;
const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)
//Reference (Non Primitive)

//Array,Objects,Functions uses Heap
const heros = ["bikram","Jena", "Jit"]
console.log(typeof heros)
let myObj = {
    name : "Bikram",
    age : 24,
}
const myfunction = function(){
    console.log("Hello world")
}


let name = "Bikram"
let name2 = name
name2="Amrita"
console.log(name2)
//for heap memory explanation
let userOne = {
    email:"bikramjitj@gmail.com",
    age:24
}
let userTwo = userOne
userTwo.email = "vickymalhotra@yahoo.com"
console.log(userOne.email)
console.log(userTwo.email)