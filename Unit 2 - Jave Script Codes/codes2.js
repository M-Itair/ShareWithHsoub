// Contructor

function Student (name,age,level){
    this.name = name
    this.age = age
    this.level = level
    this.hello = function(){
        console.log(this.name + ' ' + this.age)
    }
    this.pass = function(){
        this.age ++
        this.level ++
    }
}
console.log(Student)

let student = new Student('ali', 15, 6)
student.hello()
let student2 = new Student('Mohammed',14, 5)
student2.hello()
student2.pass()
student2.hello()

let students = [
    new Student ('Marawn', 12, 5),
    new Student ('Safaa', 13, 8)
]

console.log(students)

// Date Object
let mydate = new Date (1997, 7, 2, 15, 30, 25);
console.log(mydate);

let mydate2 = new Date ("1997-08-04 15:30:25");
console.log(mydate2);

console.log(mydate2.getFullYear());
console.log(mydate2.getMonth());
console.log(mydate2.getDate());
console.log(mydate2.getDay());
console.log(mydate2.getHours());
console.log(mydate2.getTime()); //// Unix Time Stamp

// Regex
const msg = ' Hello Itair! My name is Itair also and I am 26 years old';
const regex = / name is ([a-zA-z]+)/;
const match =  regex.exec(msg);
console.log(match);

// try ... catch
function sum(num1,num2){
    if (typeof num1 !== "number") throw new Error ("the first parameter must be a number")
    if (typeof num2 !== "number") throw new Error ("the second parameter must be a number")
    return num1+num2;
}

try {
    console.log(sum(1,2))
} catch(error){
    console.log("opps! there is an error", error)
}