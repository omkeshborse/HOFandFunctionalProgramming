
/* 1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output. */


setTimeout(reverse , 2000) ;


function reverse(){
    let input = "hello" ;
     input = [...input];
    input.reverse() ;
   let output =  input.join("") 
    console.log(output) ; 
} 

/* 2 */

setTimeout(reverseTwo , 2000)

function reverseTwo() {
    input = "hello";
    let op= input.split("").reverse().join('');
    console.log(op);
    
}