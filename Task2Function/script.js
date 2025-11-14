// 1. Write a function `sayHello()` that prints `"Hello
//  JavaScript"`.

// const sayHello = ()=>{
//     console.log("hello Javascript");
// }
// sayHello();
//  2. Create a function `add(a, b)` that returns their sum
//  and log the result.

// function add(a,b)  {
//     return a+b
// }
// const ans = add(1,3)
// console.log(ans);


//  3. Write a function with a default parameter `name =
//  "Guest"` that prints `"Hi <name>"`.

// function guestName(name = 'Tanvi') {
//     console.log(`hii ${name}`);   
// }
// guestName("nishant")
//  4. Use rest parameters to make a function that adds
//  unlimited numbers.
// let sum = 0;
// function unlimited(...nums) {
//     for(let i = 0;i<nums.length;i++){
//         sum += nums[i]
//     }
//     console.log(sum);
    
// }
// unlimited(1,2,3,4,5,6,7)

//  5. Create an IIFE that prints `"I run instantly!"`.
// (function(){
//     console.log("Hii broh");
// })()
//  6. Make a nested function where the inner one prints a
//  variable from the outer one.

// function outer(){
//     let sayHello = "hii my name is Nishant"

//     function inner(){
//         console.log(sayHello);
//     }
//     inner();
// }
// outer();
//  7. Create an array of 5 fruits. Add one at the end and
//  remove one from the beginning.

// const arr = ["apple","banana","mango","orange","garpes"]
// arr.push("orange")
// arr.shift(2)
// console.log(arr);

//  8. Use a `for` loop to print all elements of an array.

// let arr = ["nishant",1,2,{},"Tanvi"]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//  9. Create an object `person` with keys `name`, `age`,
//  and `city`, and print each key’s value.
// const obj = {
//     name:"Nishant",
//     age:23,
//     city:"Lonavla"
// }
// for(let key in obj){
//     console.log(obj[key]);
    
// }


//  10. Use `setTimeout()` to log `"Time’s up!"` after 2
//  seconds

// setTimeout(() => {
//     console.log("Times up");
    
// }, 200);