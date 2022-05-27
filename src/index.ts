/* 
Promedio Escolar
•Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
•Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
•Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información
*/


// declaro variables
let cantidadAlumnos: number = Number(prompt(`Ingrese la cantidad de Alumnos:`));
let alumnosIn: string[] = new Array(cantidadAlumnos);
let notasTrimestreUno: number[] = new Array(cantidadAlumnos);
let notasTrimestreDos: number[] = new Array(cantidadAlumnos);
let notasTrimestreTres: number[] = new Array(cantidadAlumnos);
let promedio: number = 0;

// ingreso datos
for (let i: number = 0; i < cantidadAlumnos; i++) {
  alumnosIn[i] = String(prompt(`ingrese Alumno para posicion ${i + 1}`));
  notasTrimestreUno[i] = Number(
    prompt(`ingrese nota del primer trimestre para el alumno ${i + 1}`)
  );
  notasTrimestreDos[i] = Number(
    prompt(`ingrese nota del segundo trimestre para el alumno ${i + 1}`)
  );
  notasTrimestreTres[i] = Number(
    prompt(`ingrese nota del Tercer trimestre para el alumno ${i + 1}`)
  );
}
// console.log(alumnosIn);
// console.log(notasTrimestreUno);
// console.log(notasTrimestreDos);
// console.log(notasTrimestreTres);

//metodo que calcula promedio anual
function promedioAnual(
  indice: number,
  trimestreUno: number[],
  trimestreDos: number[],
  trimestreTres: number[]
): number {
  let resuldato: number = 0;
  resuldato =
    (trimestreUno[indice] + trimestreDos[indice] + trimestreTres[indice]) / 3;
  return resuldato;
}

let buscarUno: string = String(
  prompt(`Ingrese nombre a buscar promedio anual: `)
);
let aux1: number = alumnosIn.indexOf(buscarUno);

// validar si el nombre existe
while (aux1 === undefined) {
  console.log(` Apellido no encontrado vuelva a ingresar `);
  buscarUno = String(
    prompt(` vuelva a ingrese nombre a buscar promedio anual: `)
  );
  aux1 = alumnosIn.indexOf(buscarUno);
}

promedio = promedioAnual(
  aux1,
  notasTrimestreUno,
  notasTrimestreDos,
  notasTrimestreTres
);

console.log(`El Promedio anual para ${buscarUno} es: ${promedio}`);
