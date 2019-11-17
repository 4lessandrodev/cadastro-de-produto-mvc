const tiger = {};
tiger.$ = document.querySelector.bind(document);
tiger.$$ = document.querySelectorAll.bind(document);
tiger.$id = document.getElementById.bind(document);
let soma, subtrai, divide, multiplica, ordena, filtra;
tiger.somar = soma = (n1, n2) => parseFloat(n1) + parseFloat(n2);
tiger.subtrair = subtrai = (n1, n2) => parseFloat(n1) - parseFloat(n2);
tiger.dividir = divide = (n1, n2) => parseFloat(n1) / parseFloat(n2);
tiger.multiplicar = multiplica = (n1, n2) => parseFloat(n1) * parseFloat(n2);

tiger.ordenarDec = ordena = (list) => list.sort(function (a, b) {
  return a - b;
});

tiger.ordenarCre = ordena = (list) => list.sort(function (a, b) {
  return b - a;
});

tiger.filtrar = filtra = (valor, array) => array.filter(function (item) {
  return item == valor;
});

export const tg = tiger;