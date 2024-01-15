import {
  CodigoAleatorio,
  ValidarInputDescripcion,
  ValidarInputPrecio,
  ValidarInputStock,
  ValidarInputUrlImg,
  ValidarInputVarios,
  ValidarTodo
} from "./hellpers.js";

let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
let bodyTablaProductos = document.getElementById("tbodyProductos");
let inputCodigo = document.getElementById("codigo");
let inputMarca = document.getElementById("marca");
let inputModelo = document.getElementById("modelo");
let inputPantalla = document.getElementById("pantalla");
let inputMemoria = document.getElementById("memoria");
let inputAlmacenamiento = document.getElementById("almacenamiento");
let inputDescripcion = document.getElementById("descripcion");
let inputPrecio = document.getElementById("precio");
let inputUrlImg = document.getElementById("imagen");
let inputStock = document.getElementById("stock");

inputCodigo.value = CodigoAleatorio();

//Validar inputs

inputModelo.addEventListener("blur", () => {
  ValidarInputVarios(inputModelo);
});

inputPantalla.addEventListener("blur", () => {
  ValidarInputVarios(inputPantalla);
});

inputMemoria.addEventListener("blur", () => {
  ValidarInputVarios(inputMemoria);
});

inputAlmacenamiento.addEventListener("blur", () => {
  ValidarInputVarios(inputAlmacenamiento);
});

inputDescripcion.addEventListener("blur", () => {
  ValidarInputDescripcion(inputDescripcion);
});

inputPrecio.addEventListener("blur", () => {
  ValidarInputPrecio(inputPrecio);
});

inputUrlImg.addEventListener("blur", () => {
  ValidarInputUrlImg(inputUrlImg);
});

inputStock.addEventListener("blur", () => {
  ValidarInputStock(inputStock);
});
//FIN VALIDACIONES

ListarProductos();
let formProductos = document.querySelector("form");
formProductos.addEventListener("submit", GuardarProducto);

function GuardarProducto(e) {
  e.preventDefault();
  if (ValidarTodo(inputModelo,inputPantalla,inputMemoria,inputAlmacenamiento,inputDescripcion,inputPrecio,inputUrlImg,inputStock)) {
    CrearProducto();
  }else{
    Swal.fire({
        title: "Ups",
        text: "Todos los campos son requeridos",
        icon: "error",
      });
  }
}

function CrearProducto(){
    const productoNuevo = {
        codigo: inputCodigo.value,
        marca: inputMarca.value,
        modelo: inputModelo.value,
        pantalla: inputPantalla.value,
        memoria: inputMemoria.value,
        almacenamiento: inputAlmacenamiento.value,
        descripcion: inputDescripcion.value,
        precio: inputPrecio.value,
        urlImg: inputUrlImg.value,
        stock: inputStock.value
    };
    arrayProductos.push(productoNuevo);
    Swal.fire({
        title: "Exito!",
        text: "El producto se guardo correctamente",
        icon: "success",
      });

    LimpiarFormulario();
    
    ListarProductos();
}

window.LimpiarFormulario = function(){
    formProductos.reset();
    inputCodigo.className="form-control";
    inputCodigo.value = CodigoAleatorio();
    inputModelo.className="form-control";
    inputPantalla.className="form-control";
    inputMemoria.className="form-control";
    inputAlmacenamiento.className="form-control";
    inputDescripcion.className="form-control";
    inputPrecio.className="form-control";
    inputUrlImg.className="form-control";
    inputStock.className="form-control";
    GuardarLocalStorage();
};

function GuardarLocalStorage(){
    localStorage.setItem("productos",JSON.stringify(arrayProductos));
}

function ListarProductos(){
    bodyTablaProductos.innerHTML = "";
    arrayProductos.forEach((element) => {
        bodyTablaProductos.innerHTML += `<tr>
        <th scope="row">${element.codigo}</th>
        <td>${element.marca}</td>
        <td>${element.modelo}</td>
        <td>${element.pantalla}</td>
        <td>${element.memoria}</td>
        <td>${element.almacenamiento}</td>
        <td>$${element.precio}</td>
        <td><a href="${element.urlImg}" target ="_blank" title="Ver imagen">${element.urlImg}</a></td>
        <td>${element.stock}</td>
        <td>
        <div class="d-flex">
        <button type="button" class="btn btn-warning mx-1">Editar</button>
        <button type="button" class="btn btn-danger mx-1">Eliminar</button>
        </div>
        </td>
        
      </tr>`
    });
}
