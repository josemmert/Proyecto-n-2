export function CodigoAleatorio(){
    return window.crypto.randomUUID();
}

//Validaciones de input

export function ValidarInputVarios(input){
    if(input.value.trim().length > 0){
        
        input.className="form-control is-valid" 
        return true;
    }else{
        
        input.className="form-control is-invalid"
        return false;
    }
}

export function ValidarInputDescripcion(input){
    if(input.value.trim().length >= 10){
        
        input.className="form-control is-valid" 
        return true;
    }else{
        
        input.className="form-control is-invalid"
        return false;
    }
}

export function ValidarInputPrecio(input){
    const regExPrecio=/^\$?\d+(\.\d{1,2})?$/;
    if(regExPrecio.test(input.value)){
        input.className="form-control is-valid"
        return true;
    }else{
        input.className="form-control is-invalid"
        return false
    }
}

export function ValidarInputUrlImg(input){
    const regExUrl = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/
    if(regExUrl.test(input.value)){
        input.className = "form-control is-valid"
        return true;
    }else{
        input.className="form-control is-invalid"
        return false;
    }
}

export function ValidarInputStock(input){
    const regExStock = /^[0-9]+$/;
    if(regExStock.test(input.value)){
        input.className="form-control is-valid"
        return true;
    }else{
        input.className="form-control is-invalid"
        return false;
    }
}

export function ValidarTodo(inputModelo,inputPantalla,inputMemoria,inputAlmacenamiento,inputDescripcion,inputPrecio,inputUrlImg,inputStock,inputCamara){
    if(ValidarInputVarios(inputModelo)&&ValidarInputVarios(inputPantalla)&&ValidarInputVarios(inputMemoria)&&ValidarInputVarios(inputAlmacenamiento)&&ValidarInputDescripcion(inputDescripcion)&&ValidarInputPrecio(inputPrecio)&&ValidarInputUrlImg(inputUrlImg)&&ValidarInputStock(inputStock)&&ValidarInputVarios(inputCamara)){
        return true;
    }else{
        return false;
    }
}

export function CreaPrimerosProductos(){
    let listaProductos = JSON.parse(localStorage.getItem("productos"));
    if(listaProductos === null){
        listaProductos = [];
        const productoNuevo = {
            codigo: CodigoAleatorio(),
            marca: "Samsung",
            modelo: "Galaxy A14",
            pantalla: '6.6" + FHD+ - PLS LCD',
            memoria: "4 GB",
            almacenamiento: "128 GB",
            camara: "50+5+2 MP / 13 MP",
            descripcion: "Capturá cada momento de tu vida: Salí y tomá fotos de grandes paisajes con la cámara ultra gran angular y un espectro completo de colores con la cámara principal de 50 MP. Sacate selfies reales con la cámara frontal de 13 MP, o incluso capturá pequeños detalles con la cámara macro.",
            precio: "239.759",
            urlImg: "https://i.blogs.es/76ac7c/galaxy-a14-5g-03/1366_2000.jpg",
            stock: "10",
          };
          const productoNuevo2 = {
            codigo: CodigoAleatorio(),
            marca: "Motorola",
            modelo: "Edge 40 Pro",
            pantalla: '6.52" + FHD+ - pOLED',
            memoria: "8 GB",
            almacenamiento: "256 GB",
            camara: "50+13 MP / 32 MP",
            descripcion: "Diseño elegante y protección contra el agua - Experimentá un teléfono cómodo para la mano, con terminaciones en cuero vegano y protegido contra el agua IP681.",
            precio: "1.099.999",
            urlImg: "https://http2.mlstatic.com/D_NQ_NP_838463-MLA72065393348_102023-O.webp",
            stock: "5",
          };
          listaProductos.push(productoNuevo);
          listaProductos.push(productoNuevo2);
          localStorage.setItem("productos", JSON.stringify(listaProductos));
    }
}

