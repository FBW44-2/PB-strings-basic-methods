// ## These exercises are aimed at making you more familiar with string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

// 5. Check if the sentence "nice shoes" contains the letter l or n. 

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 

// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.



/* 1 */ console.log(`\n\n============== 1`);
let string1 = "I can walk in the park all day!";
console.log(string1.slice(18, 22));


/* 2 */ console.log(`\n\n============== 2`);
let string2 = "Hello World".toUpperCase();
console.log(string2);


/* 3 */ console.log(`\n\n============== 3`);
let string3 = "Hello Earthing";
console.log(string3.toLowerCase());


/* 4 */ console.log(`\n\n============== 4`);

let string4 = "JavaScript";
console.log(string4.slice(3, 6));


/* 5 */ console.log(`\n\n============== 5`);

let string5 = "nice shoes";
console.log(string5);
console.log(`n: ${string5.includes("n")}\nl: ${string5.includes("l")}`);


/* 6 */  console.log(`\n\n============== 6`);
let string6 = "Bananas";
let newString = string6[0] + string6 + string6[0];
console.log(newString);


/* 7 */ console.log(`\n\n============== 7`);
let string7 = "Hallo";

//with method slice
let lastThree = string7.slice(string7.length - 3, string7.length)
// ther is no array so dont think start 0...
console.log(lastThree);
let newString7 = lastThree + string7 + lastThree;
console.log(newString7);

//with substring method
let lastThreeWithSubString = string7.substring(string7.length - 3, string7.length)
console.log(lastThreeWithSubString);

/* 8 */ console.log(`\n\n============== 8`);

let string8 = "BoogieWoogie";

let firstChar = string8[0];
console.log(firstChar);
let lastChar = string8[string8.length - 1];
console.log(lastChar);

console.log(lastChar + string8.slice(string8.length - (string8.length - 1), string8.length) + firstChar)

/* 9 */

/* 10 */