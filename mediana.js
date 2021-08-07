function calcularMediaAritmetica(lista) {
  const listaOrdenado = lista.sort((a, b) => a - b);
  console.log(listaOrdenado);

  const sumaLista = listaOrdenado.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  );

  const promedioLista = sumaLista / listaOrdenado.length;
  return promedioLista;
}

const lista1 = [100, 300, 200, 500, 700, 400000000, 10000, 250000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    //numero es par?
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  //necesitamos dos elementos
  const elemento1 = lista1[mitadLista1];
  const elemento2 = lista1[mitadLista1 - 1];
  //-> el promedio
  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

  //->mediana

  mediana = promedioElemento1y2;

  //   console.log(mediana);
} else {
  //posicion mitadLista1 dentro lista
  mediana = lista1[mitadLista1];
  // ->mediana
  console.log(mediana);
}

// const array = lista1.reduce(
//   (valorAcumulado, sigueinteValor) => valorAcumulado + sigueinteValor
// );

// const lista2 = [100, 300, 200, 500, 400000000, 10000, 250000];

// const listaOrdenado = lista2.sort((a, b) => a - b);

// console.log(listaOrdenado);
