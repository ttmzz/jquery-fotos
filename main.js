$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancelar-button').on('click', function(e) {
        $('form').slideUp();
        e.preventDefault();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaImagemNova = $('#endereco-imagem-nova').val(); // .val() no JQuery é o mesmo que .value no javaScript...
        const novoItem = $('<li style="display:none"></li>'); // A variavel novoItem cria uma nova lista...
        $(`<img src="${enderecoDaImagemNova}" />`).appendTo(novoItem); // Criamos a tag img, pegamos o elemento e adicionamos atraves do .appendTo o novoItem na lista...
        $(`
            <div class="overlay-imagem-link">
               <a href="${enderecoDaImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                 Ver imagem em tamanho real
               </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000);
            $('#endereco-imagem-nova').val('');
    });
});

// img = https://th.bing.com/th/id/R.64a00558538640a9d3a8908666f46558?rik=78Zelck%2by2HPGQ&pid=ImgRaw&r=0

