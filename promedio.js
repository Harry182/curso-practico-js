const lista1 = [100, 200, 300, 500, 1000000];

// El promedio no nos proporciona un resultado real

function calcularMediaAritmetica(lista) {
  //   let sumaLista = 0;

  //   for (let i = 0; i < lista.length; i++) {
  //     sumaLista += lista[i];
  //   }
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  );

  const promedioLista = sumaLista / lista.length;
  //   console.log(`La suma es: ${sumaLista}`);
  //   console.log(`El promedio es: ${promedioLista}`);
  //   return promedioLista;
  console.log(promedioLista);
}

calcularMediaAritmetica([1, 15, 56, 98, 100, 56]);

const empleados = [
  { name: "Sergio", sueldo: 3200 },
  { name: "Daniel", sueldo: 2800 },
  { name: "Bryan", sueldo: 2800 },
  { name: "Enrique", sueldo: 2600 },
];

const run = () => {
  let sueldos = empleados.map((item) => item.sueldo);
  let resultado = 0;

  for (let i = 0; i < sueldos.length; i++) {
    resultado += sueldos[i];
  }

  return resultado;
};

console.log(`Sueldo Promedio: ${run()}`);
