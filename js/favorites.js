$(document).ready(function () {
    var productosFavoritos = [];

    $('.agregar-favorito').on('click', function () {
        var productoId = $(this).closest('.producto').data('producto-id');
        if (productosFavoritos.includes(productoId)) {
            productosFavoritos = productosFavoritos.filter(id => id !== productoId);
            alert('Producto eliminado de favoritos.');
        } else {
            productosFavoritos.push(productoId);
            alert('Producto agregado a favoritos.');
        }

        $(this).find('i').toggleClass('far fas');

        console.log('Productos favoritos:', productosFavoritos);
    });
});