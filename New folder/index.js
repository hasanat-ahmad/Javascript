// let number = prompt("Enter a number");

// if (number % 5 == 0){
//     console.log("This number is a multiple of 5");
// }
// else{
//     console.log("Not a multiple of 5");
// }

// let student = {
//     name : "Hasanat",
//     age : 20,
//     CGPA : 2.96,
// }

// for (let i = 0; i <=100; i += 2){
//     console.log(i)
// }

// let name = prompt("Write your full name: ");

// console.log("Your username should be: " + "@".concat(name).concat(name.length))

// let values = [250, 645, 300, 900, 50];
// let index = 0;
// for (let value of values){
//     value = value - ((value * 10)/100);
//     values[index] = value;
//     index++;
// }
// console.log(values);x

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// let updatedCom = companies.splice(2, 1, "Ola")
// console.log(companies)

// const multiplication = (a, b) => {
//     return a * b;
// }

// let t = multiplication(55,6)
// console.log(t)


//Vowel Checker


// let word = prompt("Enter a word");
// let count = 0;

// const vowelChecker = (anyword) => {
//     for (let i of anyword){
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             console.log(i)
//             count++;
//         }
//     }
//     console.log(count)
// }

// let func = vowelChecker(word);

// function vowelChecker(anyword) {
//     for (let i of anyword){
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
//             console.log(i)
//             count++;
//         }
//     }
//     console.log(count)
// }


// let arr = [2,3,4,5,6];

// arr.forEach((val) => {
//     console.log(val*val)
// }) 

// let heading = document.getElementById("heading");
// console.log(heading);

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("Button was pressed");
// }


// btn1.addEventListener("click", () => {
//     console.log("Handler 2")
// })

let currentMode = "light";

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>{
    if (currentMode === "light"){
        console.log("dark")
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black"
    }
    else{
        currentMode = "light";
        console.log("light")
        document.querySelector("body").style.backgroundColor = "white"
    }
})