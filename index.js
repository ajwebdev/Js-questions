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
