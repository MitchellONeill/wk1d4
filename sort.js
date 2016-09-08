
var numList = [10, 2, 5, 1, 9];
sorted = numList.sort(function(a, b){
  return a - b;
})

console.log(sorted)

////////

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

studSort = students.sort(function(a, b){
  if(a.name === b.name) {
    return b.age - a.age;
  }
    return a.name > b.name;
  });
console.log(studSort);