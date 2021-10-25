// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles

// initialize string
let movieName = "2001: A Space Odyssey";

// strore regex inside of a variable
let noNumRegex = /\D/g;

let result = movieName.match
(noNumRegex).length;

console.log(result)