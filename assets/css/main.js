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

function myFunction(){
    return formHide.classList.toggle("form-hide-active");
}

const icon = document.querySelector(".icon");
const web = document.querySelector(".password");
icon.addEventListener("click", function passwordClick() {
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
    web.type = web.type === "password" ? "text" : "password"
})












