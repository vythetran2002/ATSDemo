// I. Variables and data -------------------------
// {
    
//     {
//         var a = 'Hello ATS';
//         let b = 'Hello ATS';
//         const c = 'Hello ATS';
//         {
            
//         }
//         console.log(b)
//     }
    
// }



// II. Control structures -------------------------
// 1. If - else statements

// let a = 'ATS';
// let b = 'AtS';
// if(a == b){
//     console.log('a is the same as b');
// }else{
//     console.log('a is different from b');
// }

// 2. Switch statements

// let a = 6;

// switch(a){
//     case 1:
//         console.log('búa');
//         break;
//     case 2:
//         console.log('kéo');
//         break;
//     case 3:
//         console.log('bao');
//         break;
//     default:
//         console.log('không chơi');
// }

// 3. For Loop

// for(let i = 0; i<5;i++){
//     console.log(i);
// }

// 4. While loop

// let randomNumber = Math.round(Math.random()*10); // random 1-10

// while(randomNumber != 5){
//     console.log(randomNumber);
//     randomNumber = Math.round(Math.random()*10);
// };
// console.log(+randomNumber);

// 5. Do While loop

// var text = '';
// let i = 5;
// do {
//     i++;
//     console.log(`The number is ${i}`);
//   }
// while (i < 10);

// III. Function -------------------------

// sample function

// 1. declare a function + hoisting

// showMessage('hello');

// function showMessage(message){
//     var name = 'ATS';

//     console.log(message + ' ' + name);
// }



// 2. expression function + hoisting


// var showMessage = function(message){
//     var name = 'ATS';

//     console.log(message + ' ' + name);
// };

// showMessage('hello');

// 3. arrow function + hoisting

// let showMessage = (message) => {
//     var name = 'ATS';
//     console.log(message + ' ' + name);
// }

// showMessage('hello');

// IV. Arrays and Objects ------------------

//1. Creating an object ----

// const student = {
//     firstName: 'Tran',
//     lastName: 'Vy',
//     age: 22,
//     info: function(){
//         return `My name is ${this.firstName} ${this.lastName}`;
//     }
// };

// 2. Access and modify object

// let a = student['firstName'];

// student['firstName'] = 'Nguyen';

// student.team = 'ATS';

// console.log(student);

// 3. Object constructor

// function Student(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//   }

// const myStudent = new Student('tran', 'vy', 22);

// // *adding property

// myStudent.gpa = 3.0;

// // *adding method

// myStudent.fullName = function(){
//     return this.firstName + ' ' + this.lastName;
// }


// console.log(myStudent);

//4. Creating an array ------

// const myArray = ["ATS1", "ATS2", "ATS3"]; 

// const myArray1 = [];
// myArray1[1] = 'ATS1';
// myArray1[2] = 'ATS2';
// myArray1[3] = 'ATS3';

// const myArray2 = new Array ('ATS1','ATS2','ATS3');

// 5. Access and modify Array

// a = myArray[0]; console.log(a); //access array

// myArray[0] = 'ATS'; console.log(myArray[0]); // modify Array

// 6. for of and for in

// ** for in
// console.log(myArray);
// for(var key in myArray){
//     console.log(key);
// }

// ** for of
// for(var value of myArray){
//     console.log(value);
// }

// 7. Array Method

// //sample array
// const myProducts = [
//     {
//         id: 1,
//         name: 'shoes',
//         price: 250
//     },
//     {
//         id: 2,
//         name: 'book',
//         price: 150
//     },
//     {
//         id: 3,
//         name: 'phone',
//         price: 500
//     },
//     {
//         id: 4,
//         name: 'calculator',
//         price: 250
//     }
// ]


// **pop -> remove the last element
// myProducts.pop();
// console.log(myProducts);

// **push -> insert at the end of the array

// myArray.push('ATS4');
// console.log(myArray);

// **shift, unshift -> remove or insert elements at the head of the array
// ** forEach()

// myProducts.forEach(function(product,index){
//     console.log(index);
//     console.log(product.name);
// })

// ** every()

// let isTrue = myProducts.every(function(product){
//     return product.price < 600;
// })

// console.log(isTrue);

// ** some()

// let myFunction = function(product){
//     return product.price < 300;
// }

// let isTrue = myProducts.some(myFunction);

// console.log(isTrue);

// ** find()

// let product = myProducts.find(function(product){
//     return product.price == 250;
// })
// console.log(product);

// ** filter()

// let product = myProducts.filter(function(product){
//     return product.price == 250;
// })
// console.log(product);

// ** map()

// const updatedProducts = myProducts.map(function(product){
//     return {
//         name: product.name,
//         price: product.price+=100
//     }
// })

// console.log(updatedProducts);

// ** reduce()

// const totalMoney = myProducts.reduce(function(accumalator,product){
//         console.log(product.name);
//         return accumalator += product.price;
// },0);

// console.log('=> '+totalMoney);


// V. Javascript in the browser

// 1. Accessing DOM Elements

// **access with getElement..

// let temp = document.getElementsByClassName('head');
// console.log(temp);

// **access with querrySelector

// let temp1 = document.querySelector('.head');
 
// **access with form => get all form has id attribute

// let temp2 = document.forms;

// **access with anchor => get all a elements has name attribute

let temp3 = document.anchors;

console.log(temp3);

// 2. modifying DOM Elemnets
// let temp1 = document.querySelector('.head'); 
// **view the elements of a node
// console.log({
//     element : temp1
// })
// ** innerHTML
// console.log(temp1.innerHTML);
// ** textContent
// console.log(temp1.textContent);
// ** style
// temp1.style.color = 'red';
// console.log(temp1.style);

// 3. Event handlers

// ** Attribute events

// ** Assign event using the element node

// onClick
// temp1.onclick = function(){
//     temp1.style.color = 'red';
// }

// onKeyDown
// let temp2 = document.querySelector('#demo');

// temp2.onkeydown = function(){
//     temp2.style.backgroundColor = 'red';
// }

// 4. event listener

// var function1 = function(){
//     temp2.style.backgroundColor = 'red';
// }
// var function2 = function(){
//     temp2.style.backgroundColor = 'blue';
// }



// temp2.addEventListener('keydown',function1);
// temp2.addEventListener('keydown',function2);

// setTimeout(function(){
//     temp2.removeEventListener('keydown',function2);
// },3000)














































