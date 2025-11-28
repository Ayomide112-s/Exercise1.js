//1
let number = 0;

while(number < 10){
    number++;
    console.log(number)
}

//2
let newNumber = 0;
for(let newNumber = 1; newNumber <= 20; newNumber ++){
if (newNumber % 2 === 0){
    console.log(newNumber + " is even")
}
}

let num = 0
for(let num =1; num <= 20; num++){
if(num % 2 !== 0){
    console.log(num + " is odd")
}
}
//3
let sum = 0;

for (let newNum = 1; newNum <= 100; newNum++){
    sum +=1
}

console.log("The sum is: " + sum)

//4
for (let dig = 10;dig >= 0; dig--){
console.log(dig)
}

//5
let input="";

while(input !== "stop"){
    input = prompt("Enter something: ");
}