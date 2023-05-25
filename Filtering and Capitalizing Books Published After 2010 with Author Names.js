/* Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
 */
let books = [
  {
    name: "How Successful People Think",
    year: 2001,
  },
  {
    name: "Encyclopedia Science Encyclopedia",
    year: 2016,
  },
  {
    name: "Story books  365 ways to save the Environment",
    year: 2021,
  },
  {
    name: "Mandala Art Colouring books for Adults with tear out sheets",
    year: 2018,
  },
  {
    name: "Never Split the Difference: Negotiating As If Your Life Depended On It",
    year: 2017,
  },
  {
    name: "MANORMA YEAR BOOK 2023 (ENG)",
    year: 2022,
  },
]

let newArray = books.map((e) =>{
    if(e.year>=2010){
        e.name = e.name.charAt(0).toUpperCase() + e.name.slice(1).toLowerCase() ;
        
    }
})

console.log(books) ;

/* 
[
  { name: 'How Successful People Think', year: 2001 },
  { name: 'Encyclopedia science encyclopedia', year: 2016 },
  { name: 'Story books  365 ways to save the environment', year: 2021 },
  {
    name: 'Mandala art colouring books for adults with tear out sheets',
    year: 2018
  },
  {
    name: 'Never split the difference: negotiating as if your life depended on it',
    year: 2017
  },
  { name: 'Manorma year book 2023 (eng)', year: 2022 }
]
 */