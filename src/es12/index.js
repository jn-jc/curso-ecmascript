const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replace = string.replace("JavaScript", "Python");
console.log(replace);

const replace2 = string.replaceAll("JavaScript", "Python");
console.log(replace2);

class Message {
    #show(val){
        console.log(val);
    };
}

const message = new Message();
message.show('Hola');

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))

class AnyClass{
    constructor(element){
    this.ref = new WeakRef(element)}
}

