// *String Concatenation => OBJECT(Type)
const str1 = "Robinson"; //Type of STRING
console.log(typeof str1);
const str2 = "John";

console.log(str1 + str2); //! This is Old Syntax No one Uses this
console.log(`${str1} ${str2}`); //? Modern way

// * Another way to make the String
const str3 = new String("NadarN"); //Type of Object
console.log(str3);
console.log(typeof str3);

console.log(str1[2]);
console.log(str3.toUpperCase());
console.log(str3.charAt(2));
console.log(str3.indexOf("N"));

//* Slice And Substring
console.log(str3.slice(1, -1)); //? Can Take Negative Values
console.log(str3.substring(1, 4)); //?Cannot take -ve

let string2 = "Robinson        ";
console.log(string2.trim()); //? Removes Spaces

console.log(string2.replace("son", "John"));
console.log(string2.includes("son"));

let string3 = "Robinson john selvaraj Nadar";
console.log(string3.split(" "));
