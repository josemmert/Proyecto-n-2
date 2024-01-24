

let swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth:500,
        modifer:1,
        slidesShadows:true,
        rotate:0,
        stretch:0,
    }
})

document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')){

        document.querySelectorAll('.articulos').forEach(element=>{
            element.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ?element.classList.remove("filtro")
                :element.classList.add("filtro")
        })
    }
})


// let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
// let bodyrow = document.getElementById("row-home");

// function ListarProductos() {
//     bodyrow.innerHTML = "";
//     arrayProductos.forEach((product) => {
//         bodyrow.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 my-3 articulos">
//         <a href="#">
//           <div class="card text-bg-dark card-text">
//             <img
//               src="${product.urlImg}"
//               class="card-img"
//               alt="${product.modelo}"
//             />
//             <div class="card-img-overlay tnone cardsm">
//               <h5 class="card-title display-5">${product.modelo}</h5>
//               <a href="/pages/pag-detail.html?codigo=${product.codigo}">Ver Detalle</a>
//               <a href="#" class="btn btn-primary">Comprar</a>
//             </div>
//           </div>
//         </a>
//       </div>`;
//     });
// }

// ListarProductos();