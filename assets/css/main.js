// const navigationLinks = document.querySelector(".nav-links");

// function myFunction(){
//     navigationLinks.classList.toggle("active-links");
// }

// const first_name = "web";
// const last_name = "development";
// // const x = 20;
// //  document.querySelector("h1").innerHTML = first_name + " " + last_name;
// // window.alert("your application submitteed successfully");
// // window.prompt(last_name);
// window.confirm(last_name);

// const x = 20;
// const y = 30;
// console.log(x);


// Operators

// Arthematice operators
// const x = 2;
// const y = 3;
// const z = x / y;
// console.log(z);

// Assignment operators
// let x= 5;
// x += 10;  
// console.log(x); 

// Comparison operators

// const x = 30;
// const y = 20;

// console.log(x >= y);

// logicol operators
// const x = 20;
// const y = 30;
// const z = 40;
// console.log(!(x>y));

// Type operators

// let name = "web";
// let x = 20;
// let value = true;
// let y = 


// console.log(typeof(name));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(value));

// Ternory operator
// let x= 20;
// let y= 30;
// console.log(x > y ? "true" : "false");

// let x = 4;
// let y = "juyfuy";
// // let z = "50";
// let q = x - y;
// console.log(q);


// function webDevelopment(){
//      x = 3;
//     y = 4; 
// };

// webDevelopment();
// console.log(x);
// console.log(y);

// var x = "";
// console.log(typeof(x));

// const obj = {name : "web" , age : 20, designation: "developer"};
// console.log(obj.age);

// const clickBtn = document.querySelector(".clickbtn");
// const headTag = document.querySelector(".hidehead");

// clickBtn.addEventListener("click", function myFunction(){
//     return headTag.classList.toggle("hidehead-active");
// });
// myFunction();

const formHide = document.querySelector(".form-hide");

// function myFunction(){
//     return formHide.classList.toggle("form-hide-active");
// }

// const icon = document.querySelector(".icon");
// const web = document.querySelector(".password");
// icon.addEventListener("click", function passwordClick() {
//     icon.classList.toggle("fa-eye");
//     icon.classList.toggle("fa-eye-slash");
//     web.type = web.type === "password" ? "text" : "password"
// })

// Array methods

// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. splice()
// 6. slice()
// 7. toString()
// 8. max and min
// 9. map()
// 10. filter()
// 11. find()
// 12. reduce()
// 13. sort()
// 14. forEach()
// 15. indexof()
// 16. lastIndexOf()


// const array = ["web", "digital", "marketing", "developer", "app", "mobile", "ios"];
// // To find max number
// const array1 = [4235345,3645,3564567,6754,34534,3425,345345,345435,68968,69856,3576,578768,6898,457,467,78968978,34623565326];
// console.log(Math.min.apply(null, array1));

// console.log(array1);
// const object = {name: "developer", age: 20, designation: "software", contact: 6745644747};

// const value = "web developer";


// Js dates
// Present Date
// const date = new Date();
// console.log(date);
// // Previous Dates
// console.log(new Date("2021-05-23"));

// console.log(new Date(2012,15,40,40,25,30,0));
// console.log(new Date("2015"));
// console.log(new Date(2015));

// const d = new Date();

// const month = ["jan", "feb", "march", "april", "may", "june", "july", "august", "sep", "oct", "november", "december"];
// const year = month[d.getMonth()];
// const day = d.getMilliseconds();
// console.log(day);

// const da = new Date();
// const setYear = da.setMonth(10);
// console.log(da);


// Math Methods
// 1. round() rounded to its nearest integer
// 2.ceil() rounded up to its nearest integer
// 3.floor() rounded down to its nearest integer
// 4. trunc() Returns the part of x value
// 5.sign() Returns the nagative or positive value.
// 6.random() Returns randome numbers
// 7.sqrt() square root
// 8. pow() power
// 9.abs() Absoulute value
// 10. Math.min to find minimum value
// 11. Math.max to find maximum value

// console.log(Math.round(-7.9));
// console.log(Math.ceil(-8.2));
// console.log(Math.floor(-5.9));
// console.log(Math.trunc(-7.9));
// console.log(Math.sign(17.9));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.random() * 5);
// console.log(Math.sqrt(400));
// console.log(Math.pow(5,3));
// console.log(Math.abs(-9.4));

// const array = [123424,2435435,3463,4576457,67657,34636,356356,6346543,6346,3466,363,6363567,634643,34643,3463];

// console.log(Math.min.apply(null, array));


//  Js setTimeout and setInterval methods

// const interval = setInterval(function myFunction(){
//     console.log("Hello World...!");
// }, 600);

// setTimeout(function myFunction(){
//     clearInterval(interval);
// }, 3000);

// const button = document.querySelector(".interval");

// const interval = setInterval(function myFunction(){
//     button.classList.toggle("interval-active");
// }, 500)
// setTimeout(function myFunction(){
//     // button.innerText = "Hello World...!";
//     clearInterval(interval);
// }, 20000);

// Conditional statement
// const x = 20;
// if(x < 20){
//     console.log("hey");
// } else if(x > 30){
//     console.log("hello");  
// } else{
//     console.log("Hi");  
// }

// let y = 30;
//  const z = y < 30 ? "true" : "false";
// console.log(z);

// if(y < 30){
//     console.log("true");
// } else {
//     console.log("false");
// }

// const time = new Date().getHours();
// // console.log(time);
// let times;

// if(time < 9){
//     times = "good morning"
// } else if(time > 11){
//     times = " Good Day";
// }
//  else{
//     times = " good afternoon"
// }
// console.log(times);

// Switch statment

const date = new Date().getDay();
let dates;
switch(date){
    case 0:
        dates = "Sunday"
        break
    case 1:
        dates = "Monday"
        break
    case 2:
        dates = "Tuesday"
        break
    case 3:
        dates = "Wednesday"
        break
    case 4:
        dates = "Thursday"
        break
    case 5:
        dates = "Friday"
        break
    case 6:
        dates = "Saturday"
    break
        default :
        dates = " hello"
       

}
console.log(dates);


// loops 

// For loop
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// While loop
// let i = 0;
// while(i < 10 ){
//     console.log(i);
//     i++;
// };

// Do While
// let x = 0;
// do{
//     console.log(x);
//     x++;
// }
// while(x < 20);


// Dom Intro
// const todo = document.querySelector(".todo");
// const div = document.createElement("div");
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");

// li.innerText = "Home";
// li1.innerText = "About Us";
// li2.innerText = "Contact";
// li3.innerText = "Gallery";
// ul.appendChild(li);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// div.appendChild(ul);
// div.className = "divison";
// ul.className = "unorderlist";
// todo.appendChild(div);
// // li3.remove();


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const saveButton = document.querySelector(".todo-save-button");
const todoSaveInput = document.querySelector(".todo-save-input");

todoButton.addEventListener("click", function myFunction(e){
    e.preventDefault();
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    const complete = document.createElement("button");
    const edit = document.createElement("button");
    li.innerText = todoInput.value;
    div.appendChild(li);
    div.appendChild(button);
    div.appendChild(complete);
    div.appendChild(edit);
    div.className = "divison";
    button.innerText = "Delete";
    complete.innerText = "complete";
    edit.innerText = "Edit";
    button.addEventListener("click", function myfunction(){
      div.classList.toggle("delete-button") ; 
    });
    complete.addEventListener("click", function myFunction(){
        li.classList.toggle("complete-active");
    });
    edit.addEventListener("click", function myFunction() {
        todoForm.classList.toggle("todo-form-active");
        todoSaveInput.value = li.innerText
    });
    saveButton.addEventListener("click", function myFunction(e){
        e.preventDefault();
        li.innerText = todoSaveInput.value;
        todoForm.classList.toggle("todo-form-active");
    });

    todoList.appendChild(div);
    todoInput.value = "";
})