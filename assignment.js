let question = prompt("What is the capital of france?")
let answer = (question === "paris")? "correct" : "incorrect"
console.log(answer);

let ques = prompt("What is the capital of France?")
let ans;
switch(ques){
    case "paris":
    ans = "correct"
    break;

    default:
    ans = "incorrect"
}
console.log(ans)