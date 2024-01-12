

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
            element
        })
    }
})
