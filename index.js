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

console.log('data', listOfObjects['first_name']);

for (data in listOfObjects) {
  // console.log('list of objects', listOfObjects[data]);
}
