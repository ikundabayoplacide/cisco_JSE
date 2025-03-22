//3.0.10 SECTION PRACTICE

// #1  Arithmetic operators
/*
Exercise 1: Fill in the missing operators to get the expected result (replace the underscore symbol with the appropriate operator):
console.log(2 _ 3 _ 1);      // expected 7
console.log(2 _ 4);       // expected 16
console.log(5 _ 1);       // expected 5
console.log(8 _ 2 _ 5 _ 2); // expected 39 
*/

// Answer #1:

console.log(2*3+1); // the result will be 7
console.log(2**4); // the result will be 16
console.log(5*1); // the result will be 5
console.log(8**2-5**2); // the result will be 39

// #2 Comparision operators
/*
Exercise 2: Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):


console.log(4 * 5 _ 20);
console.log(6 * 5 _ "30");
console.log(-17 _ 0);
console.log(25 _ 1);
console.log(2 + 2 * 2 _ 4);
*/

// Answer #2
console.log(4*5 == 20); // Answer will true
console.log(6*5 =="30"); // Answer will true
console.log(-17<0); // Answer will true
console.log(25>1); // Answer will true
console.log(2+2*2>4); // Answer will true

// #3 Logical operators

/*
Exercise 3: Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):


console.log(true _ false);
console.log(false _ false);
console.log(false _ false _ true);
console.log(true _ false _ false && true);
*/

// Answers 3

console.log(true || false); // here we will get true
console.log(false ||! false); // here we will get true
console.log(false || false|| true); // here we will get true
console.log(true || false || false && true); // here we will get true