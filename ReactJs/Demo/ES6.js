// 1. Arrow function

//no argument
// const greetings = () => {
//     console.log("hello");
// }
// greetings();

// //with argument
// const greetings2 = (name ) =>{
//     console.log("hello "+name)
// }
// greetings2('ATS');

// 2. Array Method
// const myArray = [
//     {
//         name: 'Jack',
//         age: 15
//     },
//     {
//         name: 'Jolie',
//         age: 20
//     },
//     {
//         name: 'Joshua',
//         age: 15
//     }
// ]

// myArray.map((student,index) => console.log(index+' - Name: '+student.name+' ,age: '+student.age));

// 3.Destructuring

// Destructuring
// var myPhone = {
//     brand: "Apple",
//     model: "IPhone 6",
//     price: "12$",
//     buyDate: "Oct 25 2002"
// }

// var {brand,model} = myPhone;

// console.log(brand,model);

// 4.Spread operator
var myPhone = {
    brand: "Apple",
    model: "IPhone 6",
    price: "12$",
    buyDate: "Oct 25 2002"
}
var myPhone2 = {
    brand: "Apple2",
    model: "IPhone 12",
    name: 'VY'
}
var myPhone3 = {
    country: 'VN'
}


var arr1 = ['1','2','3'];
var arr2 = ['a','b','c']

// merge array
// var arr3 = [...arr1,...arr2]

// copy array
//  var arr3 = [...arr1];
//create a new object
// var item = {...myPhone,...myPhone3}
// var item2 = {...myPhone,...myPhone2}
// // Update Object
// var item3 = {...myPhone, country: 'Belgium'}
// console.log(item3);

// 5.Module

// import { message, message2 } from "./message.js";
// console.log(message());
// console.log(message2());






