//1

let age = prompt("How old are you?");
let voteable = (age <= 17) ? "you're not eligible to vote" : "you're eligible to vote";
console.log(voteable);

//2
  let num = prompt("Enter a number:");
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//3

let number = 1;
if (number % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}
//4

let password = prompt ("Enter password:");

if (password === "admin123"){
    console.log("Access granted")
}else {
    console.log("Acess denied")
}

//5

let temp = prompt ("what is today's temperature?")
let cold = (temp <= 20)

if (temp >= 30){
    console.log("it's hot outside")
} else if (temp >= 20){
    console.log("the weather is normal")
}else{
    console.log("it's cold")
}

//6
let testScore = prompt ("Enter your test score:");
if (testScore >= 90){
    console.log("A")
}else if (testScore >= 80){
      console.log("B")
}else if (testScore >= 70){
      console.log("C")
}else if (testScore >= 60){
      console.log("D")
}else{
      console.log("F")
}

//7
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
  console.log("The larger number is: " + num1);
} else if (num2 > num1) {
  console.log("The larger number is: " + num2);
} else {
  console.log("Both numbers are equal");
}

//8

let Username = prompt ("Enter Username:");
let Pass = prompt ("Enter password :");

if (Username === "user" && Pass === "1234" ){
    console.log("Login successful")
}
else {
    console.log("Invalid credentials")
}

//9
let driveage = prompt("How old are you?");
let drive = (age <= 16);
if (age <= 16){
    console.log("you cannot drive")
}else if (driveage >= 18){
    console.log("you can drive freely")
}else{
    console.log("you can drive with supervision")
}
console.log(drive);


//10


//11
let user = prompt("enter any number:");
if (user % 3 == 0 && user % 5 != 0){
    console.log("fizzbuzz");
}
else if (user % 5 == 0 && user % 3 != 0){
    console.log("buzz");
}
else if (user % 3 == 0 && user % 5 == 0){
    console.log("fizz");
}
else{
    console.log(user);
}


//12
let Vowel = prompt("Enter a single letter:");


if (Vowel === "a" || Vowel === "e" || Vowel === "i" || Vowel === "o" || Vowel === "u") {
  console.log("It is a vowel");
} else {
  console.log("It is not a vowel");
}

//13
const amount = Number(prompt("Enter the purchase amount:"));
let acct= 100.000;

if (amount <= acct) {
    console.log("Withdraw successful");
} else {
    console.log("Insufficient funds");
}
//14
let hour = prompt("Enter hour (0-23):");
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
} else if (hour >= 18 && hour < 22) {
    console.log("Good evening");
}

//15
let question = prompt("What is capital of france?:");
if (question === "paris") {
    console.log("correct");
}else {
    console.log("incorrect");
}