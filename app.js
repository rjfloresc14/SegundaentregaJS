const productos = {
    1: { precio: 60, stock: 5 },
    2: { precio: 115, stock: 8 },
    3: { precio: 420, stock: 6 },
    4: { precio: 725, stock: 10 }
};

  // Carrito de compras
    const carrito = {
    totalUnidades: 0,
    totalPrecio: 0
};

  // Función para agregar un producto al carrito
    function agregarAlCarrito(id) {
    const stockActual = productos[id].stock;
    const precioProducto = parseFloat(document.getElementById(`precio${id}`).innerText);

    if (stockActual > 0) {
        productos[id].stock--;
        carrito.totalUnidades++;
        carrito.totalPrecio += precioProducto;
        actualizarCarrito();
    } else {
        alert("¡No hay suficiente stock disponible!");
    }
}

  // Función para limpiar el carrito
    function limpiarCarrito() {
    // Restaurar el stock de productos
    for (let i = 1; i <= 4; i++) {
        productos[i].stock += carrito.totalUnidades;
    }

    // Reiniciar el carrito
    carrito.totalUnidades = 0;
    carrito.totalPrecio = 0;

    // Actualizar la interfaz
    actualizarCarrito();
}

  // Función para procesar la compra
    function procesarCompra() {
    if (carrito.totalUnidades > 0) {
        alert(`Compra exitosa. Total a pagar: $${carrito.totalPrecio}`);
        limpiarCarrito();
    } else {
        alert("El carrito está vacío. Agregue productos antes de comprar.");
    }
}

  // Función para actualizar la información del carrito en la interfaz
    function actualizarCarrito() {
    document.getElementById("totalUnidades").innerText = carrito.totalUnidades;
    document.getElementById("totalPrecio").innerText = carrito.totalPrecio.toFixed(2);

    // Actualizar el stock en la interfaz
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`stock${i}`).innerText = productos[i].stock;
    }
}

  // Asociar eventos a los botones
    document.getElementById("clear").addEventListener("click", limpiarCarrito);
    document.getElementById("checkout-btn").addEventListener("click", procesarCompra);