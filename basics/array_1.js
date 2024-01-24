//Array declaration
// const fruits =["Mango","banana","Apple"]
// fruits.push("Coconut")
// console.log(fruits)
// fruits.pop()
// console.log(Object.keys(fruits))
// fruits.unshift("Green Apple")
// console.log(fruits)
// fruits.shift()
// console.log(fruits.includes("banana"))
// console.log(fruits.indexOf("banana"))
// console.log(typeof fruits)
// const newArr = fruits.join()
// console.log(typeof newArr)

//slice and splice
const myArr = [1,2,3,4,5,6,7]
console.log("Original Array - ",myArr)
const my1 = myArr.slice(0,4)
console.log("Slice Array - ",my1)
console.log("Original Array - ",myArr)
const my2 = myArr.splice(0,4)
console.log("Splice Array - ",my2)
console.log("Original Array - ",myArr)
