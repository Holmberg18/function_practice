
var number = prompt("Please enter a number");

if (isNaN(parseInt(number)) == false && parseInt(number) % 1 == 0) {
  fizzBuzz(number);
}

function fizzBuzz(num){
  for(var i = 0; i < num; i++){
    if (i % 3 == 0 && i % 5 == 0)console.log("Fizz Buzz");
    else if (i % 3 == 0)console.log("Fizz");
    else if (i % 5 == 0)console.log("Buzz");
    else console.log(i);
  }
}
