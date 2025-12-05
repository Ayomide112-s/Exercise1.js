//1
function checkVote(age){
    return (age <= 17)? "You're not eligible to vote" : "You're eligible to vote"
}

let age = prompt("How old are you");
console.log(checkVote(age))


//2
function checkNumber(num){
if (num > 0)return "positive"
else if (num < 0) return "negative"
else return "zero";
}

let num = prompt("Enter a number")
console.log(checkNumber(num));

//3
function checkEvenorOdd(number){
    return number % 2 === 0 ? "even" : "odd"
}
console.log(checkEvenorOdd(2));

//4
function checkPassword(password) {
    return password === "admin123"? "Access Granted" : "Access Denied"
}
let password = prompt("Enter password")
console.log(checkPassword(password));

//5
function checkTemp(temp){
    if (temp > 30)return "the weather is hot"
    else if (temp >= 20)return "the weather is normal"
    else return "the weather is cold"
}
let temp = Number (prompt("What is the weather today?"))

console.log(checkTemp(temp));

//6
function checkScore(testScore){
    if(testScore >= 90)return "A"
    else if(testScore >= 80)return "B"
    else if(testScore >= 70)return "C"
    else if(testScore >= 60)return "D"
    else if(testScore >= 50)return "E"
    else return "F"
}

let testScore = prompt("Enter your test score?")
console.log(checkScore(testScore));

//7
function checkLargeNum(num1){
    if (num1 > num2)return "The larger number is:" + num1
    else if (num2 > num1)return "The larger number is:" + num2
    else return "The numbers are equal"
}
let num1 = Number(prompt("Enter first number"))
let num2 = Number(prompt("Enter second number"))

console.log(checkLargeNum(num1))

//8
function checkDetails(Pass){
    if (Username === "user" && Pass === "1234" )return "Login Successful"
    else return "Invalid Credentials"
}
let Username = prompt ("Enter Username:");
let Pass = prompt ("Enter password :");
console.log(checkDetails(Pass));

//9
function checkDriveAge(driveage){
    if (driveage <= 16)return "you cannot drive"
    else if (driveage >= 18)return "you can drive freely"
    else return "you can drive with supervision"
}
let driveage = prompt("How old are you?")

console.log(checkDriveAge(driveage));

//10

//11
function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) return "fizz";
  else if (num % 3 == 0) return "fizzbuzz";
  else if (num % 5 == 0) return "buzz";
  else return num;
}

let user = Number(prompt("Enter any number:"));
console.log(fizzBuzz(user));


//12
function checkVowel(Vowel){
    


if (Vowel === "a" || Vowel === "e" || Vowel === "i" || Vowel === "o" || Vowel === "u") return "It is a vowel"
   else return "It is not a vowel"
}

let Vowel = prompt("Enter a single letter:");

console.log(checkVowel(Vowel));

//13
function withdraw(amount, balance = 100000) {
  return amount <= balance ? "Withdraw successful" : "Insufficient funds";
}

let amount = Number(prompt("Enter the purchase amount:"));
console.log(withdraw(amount));


//14
function checkHour(hour){
    if (hour >= 6 && hour < 12) return "Good morning"
    else if (hour >= 12 && hour < 18) return "Good afternoon"
    else if (hour >= 18 && hour < 22) return "Good evening"
}

let hour = prompt("Enter hour (0-23):");
console.log(checkHour(hour));

//15
function capital(answer){
    return answer === "paris"? "Correct" : "incorrect"
}

let question = prompt("What is the capital of France?");
console.log(capital(question));

//16
function countToTen(){
    let number = 0;

    while (number < 10) {
        number++;
        console.log(number);
    }
}
countToTen();

//17
function showEvenNumbers(){
    for (let newNumber = 1; newNumber <= 20; newNumber++){
        if (newNumber % 2 === 0){
            console.log(newNumber);
        }
    }
}
showEvenNumbers();

//18
function showOddNumbers(){
    for (let Num = 1; Num <= 20; Num++){
        if(Num % 2 !== 0){
            console.log(Num)
        }
    }
}
showOddNumbers()
//19
function sumOffHundred(){
    let digit = 100
    for (let sum = 1; sum <= 100; sum++){
        sum + 1
        console.log("The total sum is:" + digit)
    }
}
sumOffHundred()

//20
function input(){
    while (input !== "stop".toLowerCase()){
        input = prompt("Enter code to stop");
    }
}
input()