console.log("hello");
                         // String Methods

let biograpghy="My name is Wasifa Kanwal.I am doing bachelors in software engineering,from Comsats University Islamabad, Attock campus.I am currently in 6th semester."  ;

// Length(return length of given string)
let length=biograpghy.length;
console.log(length);

// CharAt(return character at given index but dont take negative index)
console.log(biograpghy.charAt(5));
console.log(biograpghy.charAt(-5));

//Char Code At(return number representing the UTF-16 code unit value of the character at the given index.)
console.log(biograpghy.charCodeAt(5));

//at(returns the character at a specified index (position) in a string and work on negative index.)
console.log(biograpghy.at(5));
console.log(biograpghy.at(-5)); 

// property accesss [] to access 
console.log(biograpghy[4]);
console.log(biograpghy[-10]);  // it return undefined  
biograpghy[0]="AAAA"; // it donot give error but doesnot work
console.log(biograpghy);

//slice(select portion of string between two indexes)
console.log(biograpghy.slice(11,24));
console.log(biograpghy.slice(11)); // start from 11 and go to end of string
console.log("3",biograpghy.slice()); // return full string 
console.log("6",biograpghy.slice(10,biograpghy.length-1));
console.log(biograpghy.slice(-11)); 
console.log(biograpghy.slice(-11,-4)); 

//substr(work same like slice but if start and end index index both are -ive then it consider them as 0)
console.log(biograpghy.slice(-11,-4));
console.log(biograpghy.slice(1,6)); // end index excluded
console.log(biograpghy.slice(-11));  

// UpperCase(return string in uppercase)
console.log(biograpghy.toUpperCase());

//lowerCase(return string in lower case)
console.log(biograpghy.toLowerCase());

//concatenate(it join two or more string)
let x=" is good girl";
let y=biograpghy.slice(11,24);
console.log(y.concat(x));

let biograpghy2="               My name is Wasifa Kanwal.I am doing bachelors in software engineering from Comsats University Islamabad Attock campus.I am currently in 6th semester.My strength is that i am persistent ans adaptable.         "  ;
//trim(it remove whitespaces form both side of string)
console.log(biograpghy2.trim());

//trimStart(it remove whitespaces form start of string)
console.log(biograpghy2.trimStart());

//trimRemove(it remove whitespaces form end  of string)
console.log(biograpghy2.trimEnd());

//padstart(used to pad in beginning of string )
let str=(biograpghy.slice(11,24));
console.log(str.padStart(15,"0"));
let z=0;
z=z.toString();
console.log(z.padStart(4,"4"));
console.log(z.padStart(4,0));

//padend(used to pad in end of string )
console.log(str.padEnd(15,"0"));
let g=0;
g=g.toString();
console.log(g.padEnd(4,"4"));
console.log(g.padEnd(4,0));

//repeat(return no of copies of string mention as a parameter)
console.log(biograpghy.repeat(2));

//replace(it replace specified string value  wth another value)
let strng="Hello";
console.log(biograpghy.replace(biograpghy.slice(0,2),strng));
let st="hello hira hello";
console.log(st.replace("HEllo","hi")); // it is case sensitive so will not replace 
console.log(st.replace(/HELLO/i,"Hi")); // can replace case insensitive
console.log(st.replace(/hello/g,"hi")); // it replace all matching words


// replaceAll(it is used to replace all matches of string with new string value )
console.log(st.replaceAll("hello","hi"));

//split(used to  return array of string split by at given index )
console.log(biograpghy.split(",")); // split by comma 
console.log(biograpghy.split(".")); // split by dot
console.log(biograpghy.split(" ")); // split by space
console.log(biograpghy.split("")); // return array of single characters

//search( it return index of  first occurence of search value)
let xyz="my name Is Wasifa Z";
let serch="i";
console.log(xyz.search(serch));
console.log(xyz.search("name"));

//match(return list of match of expression againstt string)
console.log(xyz.match(/[A-Z]/));

//lastindexof(return last index of given string)
const str2 = "Hello World";
console.log(str2.lastIndexOf(str2)); 

//firstindexof(return first index of given string)
console.log(str2.lastIndexOf("World")); 

//include(return true if given value present in string else false)
console.log(biograpghy.includes("Wasifa")); // true

//end with (return boolean value true if world is found in string otherwise false)
console.log(biograpghy.endsWith("World")); 








//                         Array Methods

let array=["my","name","is","Wasifa","i","am","in","6","semester"];

//length
console.log(array.length);

//toString (return array in form of string)
console.log(array.toString());

//at(return value of given index)
console.log(array.at(2));

//[] property same as at()
console.log(array[2]);
console.log(array[-2]); // not supported

//join(it return array as string but we can also specify separator that is not possible in toString)
console.log(array.join("?"));

//pop (it return last element of array)
console.log(array.pop());

//push(used to add new elemnt at the end )
console.log(array.push("hello"));
console.log(array);

//shift(it remove the first element and shift the other to left)
console.log(array.shift());

//unshift(it add new element at the beginning and unshift the other)
console.log(array.unshift("hithere"));
console.log(array)

//append element using length property
array[array.length]="comsats";
console.log(array);

//delete is used to delete particular value from array  but it leaves undeefined hole behind so use shift or pop
delete array[0];
console.log(array[0]);

//concat is used to merge two array into new single array
array2=["i","am","in","comsats"];
console.log(array.concat(array2));
console.log(array.concat("coming here"));
console.log(array.concat(array2,"xxx"));

//copy with in is used to copy value from one index to other and existing value overwrites.
console.log(array.copyWithin(2,1));
console.log(array.copyWithin(2,1,3));

//flatten array is used to flatten nested array into single 
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(numbers.flat(2));
console.log(numbers.flat());

//splice used to add elements in array
let arr=["wasifa","kanwal","aimen","sana"];
console.log(arr.splice(3,0,"sara","hamna")); // 3 shows position whre new element inserted 0 shows element to del
console.log(arr);
console.log(arr.splice(3,2,"hira","halla"));
console.log(arr);

//tospliced(same as splice but it create new array and original array remain unchanged)
console.log(arr.toSpliced(3,2,"000xxx"));

//slice used to slice portion of array starting from given index into new array
console.log(arr.slice(1));
console.log(arr.slice(1,3));

//toString convert array into string separated by commas
console.log(arr.toString());

console.log(arr.indexOf("halla"));
console.log(arr.includes("sana"));

    //************************************************************** */