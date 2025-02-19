const form = document.getElementById('comparar');


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const CampoA = document.getElementById('A');
  const CampoB = document.getElementById('B');

  let A = `${CampoA.value}`;
  let B = `${CampoB.value}`;

  const successMsg = "Positivo";
  const errorMsg = "Negativo";

  if(A < B) {
   const success = document.querySelector('.success-msg');
   success.innerHTML = successMsg;
   success.style.display = 'block';
  } else {
    const error = document.querySelector('.error-msg');
    error.innerHTML = errorMsg;
    error.style.display = 'block';
  }

});
