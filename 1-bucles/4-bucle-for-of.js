// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]


// for (var personas = 0; personas++;) console.log(personas);
 
// for (var i = 0; i <=gente.length; i++) console.log(gente[i]);


var i = 0;
while (i < gente.length) {
  num=gente[i].edad;
  if (num>=25){
      console.log(gente[i]);
    };
  i++;
}