// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let parkWalk = "I can walk in the park all day";
console.log(parkWalk.substring(17, 22));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let helloWord = "Hello World";
console.log(helloWord.toUpperCase());

// 3. Declare another variable with the value of "Earthlings". Convert the value to lower case and print the converted value to the console.
let earthlings = "Earthlings";
console.log(earthlings.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Print the the characters "aSc" to the console using the substring() method.
let java = "JavaScript";
let midChars = java.substring(3, 6);
console.log(midChars);

// 5. Check if the sentence "nice shoes" contains the letter l. 
let fancyFeet = "nice shoes";
console.log(fancyFeet.match("l"));
console.log(fancyFeet.match("n"));

// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ. 
let fruit = "Bananas";
let firstChar = fruit[0];
console.log(`${firstChar}${fruit}${firstChar}`);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let scritcher = "Scritch";
let lastThreeChars = scritcher.substring(scritcher.length - 3);
console.log(lastThreeChars + scritcher + lastThreeChars);
console.log(`${lastThreeChars}${scritcher}${lastThreeChars}`);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
let myVar = "Oi! Oi! Oi!";
console.log(myVar.includes("oi"));
console.log(myVar.toUpperCase());

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let boogieNights = "BoogieWoogie";
let firstLetter = boogieNights[0];
let lastLetter = boogieNights[boogieNights.length - 1];
let remainderString = boogieNights.substring(1, boogieNights.length - 1);
console.log(lastLetter + remainderString + firstLetter);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation e.g. "My name is Maria. I live in Berlin and I am a teacher". 
let firstName = "Lola";
let location = "Copa, Copacabana";
let job = "showgirl";

console.log(`Her name was ${firstName}. She was a ${job} ... at the ${location}`);

//11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let foxy = "the quick brown fox";
let firstCharacter = foxy[0].toUpperCase();
let remainderStr = foxy.slice(1);
console.log(firstCharacter + remainderStr);