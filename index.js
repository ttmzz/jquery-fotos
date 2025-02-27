const form = document.getElementById('formulario');

let novoContato = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const Nome = document.querySelector('.nome');
  const Tel = document.querySelector('.tel');

  let contato = '<tr>';
  contato += `<td>${Nome.value}</td>`;
  contato += `<td>${Tel.value}</td>`;
  contato += '</tr>';

  novoContato += contato;

  const Table = document.querySelector('tbody');
  Table.innerHTML = novoContato;
});
