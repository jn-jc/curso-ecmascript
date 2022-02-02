function newFunction(name, age, country) {
    var name = name || 'Nicolas';
    var age = age || 25;
    var country = country || 'COL'
    console.log(name, age, country);

}

function newFunction2(name = 'oscar', age = 25, country = 'COL') {
    console.log(name, age, country)
}

newFunction2();
newFunction2('Alejandro', 26, 'MX');

let hello = "Hola";
let worl = 'mundo';
let epicPhrase = hello + ' ' + worl;
console.log(epicPhrase);
let fraseEpica = `${hello} ${worl}`;
console.log(fraseEpica);

let lorem = "quiero escribir una frase epica \n" +
    "otra frase epica que necesitamos.";

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Nicolas',
    'age': 25,
    'country': 'COL'
}

console.log(person.name, person.age);

let {
    name,
    age,
    country
} = person;

console.log(name);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

a = 'a';
console.log(a)

let name = 'Nicolas J';
let age = 27;

obj = {
    name: name,
    age: age
};

obj2 = {
    name,
    age
};
console.log(obj2)

const names = [{
        name: 'Nicolas C',
        age: 54
    },
    {
        name: 'Yesica',
        age: 43
    }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.age));

const listOfNames3 = (name, age, country) => {
    let = '...'
}

const listOfNames4 = name => {
    var
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,5));

import { hello } from './module';

hello();

function* helloWorld(){
    if(true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);