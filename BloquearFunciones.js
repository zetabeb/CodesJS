//para bloquear el clic derecho
$(document).bind("contextmenu", function (e) {
    e.preventDefault();
});
//para bloquear la tecla f12
$(document).keydown(function (e) {
    if (e.which === 123) {
        return false;
    }
});
