/*
05 ¿Qué ventaja tiene JavaScript en comparación con otros lenguajes de programación?
    - a. Flexibilidad (*)
    - b. Costo
    - c. Rapidez
    - d. Seguridad
*/

var personOne =  {
    sayDescription: function() {
        return this.name + " " + this.age;
    }
}

var personTwo =  {
    name: "Joshua",
    age: 30
}

console.log( personOne.sayDescription.apply( personTwo ) );
console.log( personOne[ "sayDescription" ].apply( personTwo ) );
