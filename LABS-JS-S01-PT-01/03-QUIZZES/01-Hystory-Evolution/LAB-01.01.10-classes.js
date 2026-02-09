/*
10 ¿Qué característica de ECMAScript 6 permite crear clases en JavaScript?
    - a. Módulos
    - b. Funciones flecha
    - c. Promesas
    - d. Clases (*)
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
