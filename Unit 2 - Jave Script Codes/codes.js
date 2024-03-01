// Primes

alert("hola amigo")
function isprime(num){
    for ( i =2; i<num; i++){
        if (num % i === 0 ) return false
    }
    return  num>1
}

function primes(max){
    for(let i=2 ; i<max ; i++){
        if(isprime(i)) console.log(i)
    }
}
let hola = prompt("please enter the unbmer you want to check", 13)
primes(hola)
let satisfy = confirm("are you satisfied with our software")
console.log(satisfy)

// factorial

function factorial(n){
    return n === 0? 1 : n*(factorial(n-1))
}
let x = prompt("enter the number")
console.log("the factorial of " + x + " is " + factorial(x))


// Reverse Array - Method 1
let numbers = [1,2,3,4,5]
function reverse(arr){
    let temp = []
    for(let i in arr){
        temp.unshift(arr[i])
    }
    return temp
}
console.log(reverse(numbers))

// Reverse Array - Method 2

let numero = [1,2,3,4,5]
function reverse(arr){
    for(let i in arr){
        arr.splice(i,0,arr.pop())
    }
    return arr
}
console.log(reverse(numero))

// arrow function expression

let log = msg => console.log(msg)
log("Hello")

let namaro = [1,2,3,4,5]
let result = namaro.find( number => number >3 )
console.log(result)


// Traversing through an array
let langs = ['js','ruby','python','php']
for (let lang of langs){
    console.log(lang)
}

for (let langIndex in langs){
    console.log(langIndex)
}

langs.forEach( (volo,indexooo) => console.log(volo,indexooo))


// Ascending order & Descending order (using 2 ways of writing functions)
let namareo = [1,2,16, 3,,17,23,5]
namareo.sort(function(a,b){
    return a-b
})
console.log(namareo)
// Descending order and using arrow function insted of funtion
namareo.sort((a,b)=> b-a)
console.log(namareo)



// Object
let student = {
    nom:'ali',
    age: 15,
    level: 6,
    hello: function(){
        console.log('Hello ' + this.nom + ' ' + this.age)
    },
    pass: function(){
        this.age ++
        this.leve ++
    }
}
console.log(student)

student.level = 7

console.log(student)

console.log(student.nom)

const attribute = 'age' 

console.log(student[attribute])

let test = "this is test"

console.log(test)

test = "I hope it works"

console.log(test)

student.hello()
student.pass()
student.hello()

