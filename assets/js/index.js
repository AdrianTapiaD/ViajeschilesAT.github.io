$("#enviar_correo").click(function(){
    alert("El correo fue enviado correctamente.");
    });

$("h2").on("click", function(){
    $(this).css('color', 'blue');
    });

    document.addEventListener('DOMContentLoaded', function () {
        var clickableHeading = document.querySelector('.clickable-heading');

        clickableHeading.addEventListener('click', function () {
            clickableHeading.classList.add('blue-text');
        });
    });