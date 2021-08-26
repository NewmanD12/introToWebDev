// console.log('hello world');

var name = 'Dakota';
// console.log(name);

typeof(27);

// if we wanted to get the length of a string
// len(string)

var nameLength = name.length;
// console.log(nameLength)

// string formatting
// concatination in python: 
// "Hello" + " World!"

var fName = 'Dakota';
var lName = 'Newman';
var age = 28;
// console.log(fName + ' ' + lName);

// F-string: 
// f('this would be a F-string with the variable like {this}')
// console.log(`Hello my name is ${fName} ${lName} and I'm ${age} years old`);


// Python String Methods
//"Dakota".uppercase()
var capitalName = fName.toUpperCase();
// console.log(capitalName)


// Python Slicing:
// "DakotaNewman".substring(0,6)
var fullName = "DakotaNewman"
var slicedFirstName = fullName.slice(0, 6);
// console.log(`This came from my slicing ${slicedFirstName}`);


//javascript alerts
// alert('You did it!');

// javascript function 2: prompt
// same thing as input() in python
// userinput = input('Enter your age: ')

// var age2 = prompt('Enter your age:')
// console.log(`You are ${age2} years old`)

// that was the basics


// here are some conditions in JS
// if(age2 >= 21){
//     alert("Congrats, let's go to the bar!")
// }else{
//     alert("Let's go watch a movie")
// }

var solution = 2 + '2';
// console.log(typeof(solution))
// console.log(`The value of the solution is: ${solution}`)

var numString = '1';
var numInt = 1;

// console.log(`This is the value of NumString: ${numString}`)
// console.log(`This is the value of NumInt: ${numInt}`)

// if(numString === numInt){
//     console.log('woah, this worked?')
// }else{
//     console.log('Oh ok, this is what I expected')
// }

// Function in python
// def functionName():
    // Function defintion

function add(a, b){
    return a + b
}

add(3, 4);

// create a function that converts farenheit into celsius. 
// stretch challenge: create one that conversts celsius to farenheit. 

function fToC(temp){
    return (temp-32) * 5/9
}

fToC(20)

function cToF(temp){
    // console.log((temp * 9/5) + 32)
    return (temp * 9/5) + 32
}

cToF(50)

function sum(digits) {
    // console.log(typeof(num))
    let total = 0
    for(var i = 0; i < digits.length; i++){
      console.log(digits[i])
      num = parseInt(digits[i])
      total += num
    }
    console.log(total)
    return total
   }

sum('3433')