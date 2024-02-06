import { CodigoAleatorio } from "./hellpersAdmin.js";

function CreaPrimerosProductos() {
  let listaProductos = JSON.parse(localStorage.getItem("productos"));
  console.log(listaProductos);
  if (listaProductos === null) {
    listaProductos = [];
    const productoNuevo = {
      codigo: CodigoAleatorio(),
      marca: "Samsung",
      modelo: "Galaxy A14",
      pantalla: '6.6"',
      memoria: "4 GB",
      almacenamiento: "128 GB",
      camara: "50MP",
      descripcion:
        "Capturá cada momento de tu vida: Salí y tomá fotos de grandes paisajes con la cámara ultra gran angular y un espectro completo de colores con la cámara principal de 50 MP. Sacate selfies reales con la cámara frontal de 13 MP, o incluso capturá pequeños detalles con la cámara macro.",
      precio: "239.759,00",
      urlImg: "https://i.blogs.es/76ac7c/galaxy-a14-5g-03/1366_2000.jpg",
      stock: "10",
    };
    const productoNuevo2 = {
      codigo: CodigoAleatorio(),
      marca: "Motorola",
      modelo: "Edge 40 Pro",
      pantalla: '6.52"',
      memoria: "8 GB",
      almacenamiento: "256 GB",
      camara: "50MP",
      descripcion:
        "Diseño elegante y protección contra el agua - Experimentá un teléfono cómodo para la mano, con terminaciones en cuero vegano y protegido contra el agua IP681.",
      precio: "1.099.999,00",
      urlImg:
        "https://images.ctfassets.net/weuwbjv1v9lc/4spLoU8HAzkQfAbmDKCDNE/09ef5e985d38737ac2a970962d1bdf3a/1.webp",
      stock: "5",
    };
    const productoNuevo3 = {
      codigo: CodigoAleatorio(),
      marca: "Xiaomi",
      modelo: "Redmi Note 11",
      pantalla: '6.4"',
      memoria: "4 GB",
      almacenamiento: "128 GB",
      camara: "50MP",
      descripcion:
        "Perfección con estética:El nuevo Redmi Note 11 se distingue por un diseño moderno con un marco plano y un carácter minimalista Pantalla AMOLED Sumérgete en el mundo maravilloso: La pantalla retroiluminada proporciona el más alto brillo, contraste, color y resolución. La vida en AMOLED 90 Hz Snapdragon® 680 Pantalla AMOLED DotDisplay de 90 Hz Carga rápida Pro de 33 W. Pantalla táctil y visualización impecable Con el Redmi Note 11 Disfruta de tus contenidos con una tasa de refresco de 90 Hz fluida y sin interrupciones. Navega sin problemas por tus redes sociales o experimenta un modo de juego potente y con gran capacidad de respuesta. Rendimiento integral, listo para cualquier reto Este procesador no solo es rápido y potente, sino que además funciona con el proceso de 6 nm de bajo consumo para ofrecer un alto rendimiento a la vez que mejora la duración de la batería. Velocidades de carga más rápidas con UFS 2.2 y escritura acelerada gracias a Write Booster, que ofrece funciones eficaces de instalación de aplicaciones, iniciación y almacenamiento en caché de archivos a alta velocidad, así como lectura y escritura de archivos de gran tamaño.",
      precio: "361.299,00",
      urlImg:
        "https://surimportacion.com.ar/wp-content/uploads/2023/03/starbluenote11redmi1.png",
      stock: "10",
    };
    const productoNuevo4 = {
      codigo: CodigoAleatorio(),
      marca: "Samsung",
      modelo: "Galaxy Z Flip5",
      pantalla: '6.6"',
      memoria: "8 GB",
      almacenamiento: "512 GB",
      camara: "12+12 MP",
      descripcion:
        "La pantalla externa más grande de un Galaxy Z Flip hasta ahora El Galaxy Z Flip5 presenta por primera vez la Flex Window de 3,4 pulgadas creado para la autoexpresión. Compacto y atrapante desde todos los ángulos, este plegable es tan versátil como portátil.*Imagen simulada solo con fines ilustrativos. La interfaz de usuario real puede diferir. Medido diagonalmente, el tamaño de la pantalla de la cubierta del Galaxy Z Flip5 es de 3,4 pulgadas en forma rectangular completa; el área visible real es aproximadamente el 95 % del área rectangular completa debido a las esquinas redondeadas y al recorte inferior.",
      precio: "1.799.999,00",
      urlImg:
        "https://multipoint.com.ar/Image/0/750_750-h14.jpg",
      stock: "15",
    };
    listaProductos.push(productoNuevo);
    listaProductos.push(productoNuevo2);
    listaProductos.push(productoNuevo3);
    listaProductos.push(productoNuevo4);
    localStorage.setItem("productos", JSON.stringify(listaProductos));
    console.log(listaProductos);
    arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    ListarProductos();
  }
}

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth: 50,
    modifer: 1,
    slidesShadows: true,
    rotate: 0,
    stretch: 0,
  },
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    const filtro = e.target.value.toLowerCase();

    // Crear una copia del array original
    let arrayProductosFiltrados = arrayProductos.slice();

    // Filtrar la copia del array
    arrayProductosFiltrados = arrayProductosFiltrados.filter(
      (product) =>
        product.modelo.toLowerCase().includes(filtro) ||
        product.marca.toLowerCase().includes(filtro)
    );

    // Eliminar todos los elementos del DOM
    bodyrow.innerHTML = "";

    // Agregar solo los elementos filtrados al DOM
    arrayProductosFiltrados.forEach((product) => {
      bodyrow.innerHTML += `<div class="galeria col-sm-12 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
                <a href="/pages/pag-detail.html?codigo=${product.codigo}">
                    <div class="producto card-text articulos tamaño-card">
                        <img src="${product.urlImg}" alt="${product.modelo}">
                        <div class="cardsm">
                            <h3>${product.modelo}</h3>
                            <a href="/pages/pag-detail.html?codigo=${product.codigo}" class="btn mt-4 d-flex justify-content-center btn-custom-add">Ver más detalles</a>
                        </div>
                    </div>
                </a>
            </div>`;
    });
  }
});

let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
let bodyrow = document.getElementById("row-home");

function ListarProductos() {
  bodyrow.innerHTML = "";
  arrayProductos.forEach((product) => {
    bodyrow.innerHTML += `<div class="galeria col-sm-12 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
         <a href="/pages/pag-detail.html?codigo=${product.codigo}">
         <div class="producto card-text articulos tamaño-card">
             <img src="${product.urlImg}" alt="${product.modelo}">
             <div class="cardsm">
              <h3>${product.modelo}</h3>
              <a href="/pages/pag-detail.html?codigo=${product.codigo}" class="btn  mt-4 d-flex justify-content-center btn-custom-add">Ver más detalles</a>
             </div>
         </div>
         </a>
     </div>`;
  });
}

ListarProductos();

CreaPrimerosProductos();
