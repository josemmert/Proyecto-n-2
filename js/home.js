import{
  CodigoAleatorio
} from "./hellpersAdmin.js"


function CreaPrimerosProductos(){
  let listaProductos = JSON.parse(localStorage.getItem("productos"));
  console.log(listaProductos);
  if(listaProductos === null){
      listaProductos = [];
      const productoNuevo = {
          codigo: CodigoAleatorio(),
          marca: "Samsung",
          modelo: "Galaxy A14",
          pantalla: '6.6"',
          memoria: "4 GB",
          almacenamiento: "128 GB",
          camara: "50MP",
          descripcion: "Capturá cada momento de tu vida: Salí y tomá fotos de grandes paisajes con la cámara ultra gran angular y un espectro completo de colores con la cámara principal de 50 MP. Sacate selfies reales con la cámara frontal de 13 MP, o incluso capturá pequeños detalles con la cámara macro.",
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
          descripcion: "Diseño elegante y protección contra el agua - Experimentá un teléfono cómodo para la mano, con terminaciones en cuero vegano y protegido contra el agua IP681.",
          precio: "1.099.999,00",
          urlImg: "https://http2.mlstatic.com/D_NQ_NP_838463-MLA72065393348_102023-O.webp",
          stock: "5",
        };
        listaProductos.push(productoNuevo);
        listaProductos.push(productoNuevo2);
        localStorage.setItem("productos", JSON.stringify(listaProductos));
        console.log(listaProductos);
        arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
        ListarProductos();
  }
}


let swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth:50,
        modifer:1,
        slidesShadows:true,
        rotate:0,
        stretch:0,
    }
})


document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const filtro = e.target.value.toLowerCase();

        // Crear una copia del array original
        let arrayProductosFiltrados = arrayProductos.slice();

        // Filtrar la copia del array
        arrayProductosFiltrados = arrayProductosFiltrados.filter(product =>
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
                            <a href="/pages/pag-detail.html?codigo=${product.codigo}" class="btn btn-primary mt-4 d-flex justify-content-center boton-detalle">Ver más detalles</a>
                        </div>
                    </div>
                </a>
            </div>`;
        });
    }
});



// document.addEventListener('keyup', e => {
//     if (e.target.matches('#buscador')){

//         document.querySelectorAll('.articulos').forEach(element=>{
//             element.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
//                 ?element.classList.remove("filtro")
//                 :element.classList.add("filtro")
//         })
//     }
// })

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
              <a href="/pages/pag-detail.html?codigo=${product.codigo}" class="btn btn-primary mt-4 d-flex justify-content-center boton-detalle">Ver más   detalles</a>
             </div>
         </div>
         </a>
     </div>`;
     });
 }


ListarProductos();

CreaPrimerosProductos()


