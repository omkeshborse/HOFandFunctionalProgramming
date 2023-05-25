/* 2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number. */

setTimeout(random, 3000) ;

let myInterval = setInterval(print, 1000) ;
  let a = 1 ; 
  function print() {
    if (a > 2) {
      clearInterval(myInterval) ;
      
    } else {
    
      console.log(a + "second remaining to print random number") ;
      a++ ;
    } }
function random() {
  console.log(Math.floor(Math.random() * 100))
  
}
