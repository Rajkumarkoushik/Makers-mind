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

console.log(`are "you" a "developer"`);

const string =["web", "app", "digital", "mobile", "ios"];
// const text = string.unshift("developer");
// console.log(string);

const obj = {name:"web", age: 20, designation: "developer"}

const objArray = [
    {id : 0, name:"web", age: 20, designation: "developer" , img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 1,name:"fgjh", age: 43, designation: "yuikyt", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 2, name:"ngm ", age: 27, designation: "gjgfh", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 3, name:"wgngeb", age: 14, designation: "hgj", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 4, name:"gmng", age: 10, designation: "fghj", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 5, name:"gh", age: 15, designation: "fgjh", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 6, name:"ghng", age: 16, designation: "fgh", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id: 7, name:"ghh", age: 18, designation: "fgh", img: "/assets/home-images/flowers-276014_1280.jpg"},
    {id : 8, name:"whgneb", age: 16, designation: "fgh", img: "/assets/home-images/flowers-276014_1280.jpg"}
];
// const map = objArray.filter(function myFunction(item){
//     return item.age < 20 ;
// });
// console.log(map);

let cards = "";
objArray.map(function myFunction(item) {
 cards += `
 <div class="col-lg-4">
 <div class="cards">
 <img src=${item.img} alt="">
 <h2>${item.name}</h2>
 <h4>${item.age}</h4>
 <h6>${item.designation}</h6>
 <button>Click</button>
 </div>
 </div>
`
document.querySelector(".taghead").innerHTML = cards;

});
// document.querySelector(".taghead").innerHTML = map;

// const string1 = "web, app, digital, mobile, ios";
// const string2 = string1.substring(-9);
// console.log(string2);






