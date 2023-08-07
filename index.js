// for of statement loops through the values of an iterable object such as Arrays, Strings, Maps, NodeLists, and more
const listOfNames = [
  'Ajith',
  'Arun',
  'Amara',
  2,
  (() => 'hello')(),
  undefined,
  null,
  { x: 'temp' },
];
for (nameData of listOfNames) {
  // console.log('list of names', nameData);
}
// for...in statement iterates over all enumerable string properties of an object
const listOfObjects = {
  first_name: 'ajith kumar',
  age: () => '34',
  occupation: 'Self',
  likes: ['eating', 'swimming'],
};

// console.log('data', listOfObjects['first_name']);

for (data in listOfObjects) {
  // console.log('list of objects', listOfObjects[data]);
}

const variables = () => {
  //Resources https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/

  // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

  // 1. The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
  // 2. var variables can be re-declared and updated

  // example var variable is gloabally scoped or fucntion scoped. we cant access the variable inside the function from outside

  var tester = 'hey hi';
  function newFunction() {
    var hello = 'hello';
    console.log(tester);
  }
  newFunction();
  // console.log(hello);

  //Example of hositing with declaration and initialisation
  console.log(greeter);
  var greeter = 'say hello';

  //The Let keyword let is block scoped
  //let can be updated but not re-declared.
  let greeting = 'say Hi';
  let times = 4;

  //1.example for block scoped
  if (times > 3) {
    let hello = 'say Hello instead';
    console.log(hello, greeting); // "say Hello instead"
  }
  // console.log(hello);

  // 2.example for let will be available for nested blocks

  {
    let b = 5;
    {
      const demo = () => {
        console.log(b);
      };
      demo();
    }
  }

  // 3.example: if the same variable is defined in different scopes, there will be no error
  //This is because both instances are treated as different variables since they have different scopes
  let demoData = 'say Hi';
  if (true) {
    let demoData = 'say Hello instead';
    console.log(demoData); // "say Hello instead"
  }
  console.log(demoData); // "say Hi"

  // 4. hoisitng of let
  //Error: Cannot access 'hoisted' before initialization
  // console.log(hoisted)
  // let hoisted = 1;

  // Error: Cannot access 'example2' before initialization
  console.log(example2);
  let example2;

  //Variables declared with let or const are hoisted WITHOUT a default initialization.
  // But variables declared with var are hoisted WITH a default initialization of undefined.

  //Temporal Dead Zone
  console.log(number);

  let number = 10;

  console.log(number);
  //The number variable is in a temporal dead zone where JavaScript knows of its existence (because its declaration is hoisted) but it's not accessible (as it doesn't have an initialization).

  // They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized
};
variables();

const dataTypes = () => {
  // Resources :https://www.freecodecamp.org/news/javascript-type-checking-how-to-check-type-in-js-with-typeof/
  // Primitive data types are numbers, strings, booleans, null, and undefined
  // Reference data types are arrays, functions, collections, and all other types of objects

  //example way of checking type of
  typeof expression;
  // Or
  typeof value;

  console.log(typeof typeof 45); // returns "string"

  //The above returns a string because the output of typeof 45 is evaluated as "number" (which is returned as a string), then the output of typeof("number") is evaluated as "string

  // Using expression
  console.log(typeof (123 - 4567 - 890)); // returns "number"

  // Using single value
  console.log(typeof 123 - 4567 - 890); // returns NaN

  //The single value method will return NaN (Not a Number) because it will first evaluate typeof 123, which will return a string, "number". This means you are now left with "number" - 4567-890, which cannot be subtracted and will return NaN

  console.log(typeof 33); // returns "number"
  console.log(typeof -23); // returns "number"
  console.log(typeof 0); // returns "number"
  console.log(typeof 1.2345); // returns "number"
  console.log(typeof Infinity); // returns "number"

  console.log(typeof NaN); // returns "number"
  console.log(typeof Math.LOG2E); // returns "number"

  // Typecasting value to number
  console.log(typeof Number(`123`)); // returns "number"

  // Value cannot be typecasted to integer
  console.log(typeof Number(`freeCodeCamp`)); // returns "number"
  console.log(typeof parseInt(`123`)); // returns "number"
  console.log(typeof parseFloat(`123.456`)); // returns "number"
  console.log(typeof ''); // returns "string"
  console.log(typeof 'freeCodeCamp'); // returns "string"
  console.log(typeof 'freeCodeCamp offers the best free resources'); // returns "string"
  console.log(typeof '123'); // returns "string"
  console.log(typeof String(123)); // returns "string"
  console.log(typeof true); // returns "boolean"
  console.log(typeof false); // returns "boolean"
  console.log(typeof Boolean(0)); // returns "boolean"
  console.log(typeof !!0); // returns "boolean"
};
dataTypes();
