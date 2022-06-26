//Array exercise 1
let arrBreakfast = ["Toast"];
arrBreakfast.push("Beans");
arrBreakfast.unshift("Cereal");
console.log(arrBreakfast.length);
//Array exercise 2
function lastValue(arr2 = ["Ela", "Jack", "John"]) {
  let lastIndex = arr2.length -1;
  const answer = arr2[lastIndex];
  console.log(answer);
}
lastValue()
//Array exercise 3
let musicGenre = ["Rock", "Rap"]
musicGenre.push("Jazz")
musicGenre.splice(1, 1,"Classical")
musicGenre.unshift("Blues", "Regge")
console.log(musicGenre)

//Array exercise 4
function breakfastSorter(params) {
  arrBreakfast.sort();
  console.log(arrBreakfast)
}
breakfastSorter()
//Loop exercise 1
// for (let i = 1; i < 11; i++) {
//   console.log(i)
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i)
// }
//Loop exercise 2
const tasks = ['hoover', 'tidy', 'washup']

for (let i = 0; i < tasks.length; i++) {
  console.log(`tasks ${i+1}: ${tasks[i]}` )
  
}
//Loop excerise 3
// let i = 3
// while(i){
//   alert(i--)
// }
//1 is the last value

//Loop exercise 4
for (let i = 0; i < 6; i++) {
console.log(i * 2)
}
//Loop exercise 5

// for ( let x = 0; x < 3; x++ ) {
//   alert( `number ${x}!` );
// }
// let = 0; while (x < 3){alert(
// `number ${x}!`);x++}

//Loop exercise 6
function sumInput(arrayThree = [12, 30, 26, 100]) {
  return 
}

//Strings 2 exercise 1
function addfullStop(params) {
  let string2 = 'Hello world'
  console.log(string2 + '.')
}
addfullStop()
// Strings 2 exercise 2
let string3 = 'help';
function Captalize() {
  if (typeof string3 === "string") {
    string3.toUpperCase();
    console.log(string3)
  } else {
    console.log('this is not a string')
  }
}
Captalize(string3)
//ForEach Exercise 1
let favFood = ["nuggets", "pizza", "burger"]
favFood.forEach(food => {
  console.log(food)
});

//ForEach Exercise 2/3 Sum & Product

const numbArray = [1, 2, 3, 4, 5]
function mulitplayArray(arr) {
  let mulitply = 1;
  arr.forEach((items) => {
mulitply *= items
  })
  return mulitply
}
console.log(mulitplayArray(numbArray))


//For each exercise 3 Student Grades
let studentGrades =[20, 45, 30, 60, 78, 92, 10]

function studentResults() {
  let arr = []
  arr.forEach((item) => {
    if (item > 50) {
      arr.push
    }
  })
  return arr;
}
console.log(studentResults(studentGrades))

// map exercise 1
let meterArray = [50, 200, 10, 11, 34]
const kilometer = meterArray.map((value) =>{
  return value * 0.621371
})
console.log(kilometer)

//map exercise 2
let inputArray = ["18", "27", 19, 21, NaN, undefined]

function numSort(params) {
  return params.filter((numb) => !!numb).map((numStudent) => parseInt((numStudent))) 
}
console.log(numSort(inputArray))

//filter exercise canVote
let anArray = [12, 18, 23, 88, 43]
function canvote(anArray) {
  return anArray.filter
}

//Objects Exercise 1

let spaceCraft = {
  size: 10,
  range: 200,
  model: '13-wqs',
  capacity: 200,
  }
  console.log(spaceCraft.range)
  for (const key in spaceCraft) {
    console.log(`${key} ${spaceCraft[key]}`);
  }


