const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btnCalculate = document.getElementById('calculate');
const btnClear = document.getElementById('clear');
const strong = document.getElementsByTagName('strong')[0];

btnCalculate.addEventListener('click', () => {
  const imc = weight.value / ((height.value / 100) ** 2)
  if (isNaN(imc)) {
    strong.innerHTML = 'Digite um número válido';
  } else {
    strong.innerHTML = imc.toFixed(1);
  }
});

btnClear.addEventListener('click', () => {
  height.value = 0;
  weight.value = 0;
  strong.innerHTML = 0;
})