/*
04 ¿Qué característica de JavaScript permite crear objetos y clases?
    - a. Imperativo
    - b. Funcional
    - c. Declarativo
    - d. Orientado a objetos (*)
*/

class Person {
    name;
    age;

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return this.name + " " + this.age;
    }
}

let joshua = new Person( "Joshua", 30 );
console.log( joshua );
console.log( joshua.sayHello() );
