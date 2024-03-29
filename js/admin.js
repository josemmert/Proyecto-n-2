import {
  CodigoAleatorio,
  ValidarInputDescripcion,
  ValidarInputPrecio,
  ValidarInputStock,
  ValidarInputUrlImg,
  ValidarInputVarios,
  ValidarTodo,
} from "./hellpersAdmin.js";

let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
let arrayUsuarios = JSON.parse(localStorage.getItem("Users")) || [];
let bodyTablaProductos = document.getElementById("tbodyProductos");
let bodyTablaUsuarios = document.getElementById("tbodyUsuarios");
let inputCodigo = document.getElementById("codigo");
let inputMarca = document.getElementById("marca");
let inputModelo = document.getElementById("modelo");
let inputPantalla = document.getElementById("pantalla");
let inputMemoria = document.getElementById("memoria");
let inputAlmacenamiento = document.getElementById("almacenamiento");
let inputCamara = document.getElementById("camara");
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

inputCamara.addEventListener("blur", () => {
  ValidarInputVarios(inputCamara);
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
ListarUsuarios();
let esEdicion = false;

let formProductos = document.querySelector("form");
formProductos.addEventListener("submit", GuardarProducto);

function GuardarProducto(e) {
  e.preventDefault();
  if (
    ValidarTodo(
      inputModelo,
      inputPantalla,
      inputMemoria,
      inputAlmacenamiento,
      inputDescripcion,
      inputPrecio,
      inputUrlImg,
      inputStock,
      inputCamara
    )
  ) {
    if (esEdicion) {
      GuardarProductoParaEdicion();
    } else {
      CrearProducto();
    }
  } else {
    Swal.fire({
      title: "Ups",
      text: "Todos los campos son requeridos, verifique que todos los campos esten correctamente completados",
      icon: "error",
    });
  }
}

function CrearProducto() {
  const productoNuevo = {
    codigo: inputCodigo.value,
    marca: inputMarca.value,
    modelo: inputModelo.value,
    pantalla: inputPantalla.value,
    memoria: inputMemoria.value,
    almacenamiento: inputAlmacenamiento.value,
    camara: inputCamara.value,
    descripcion: inputDescripcion.value,
    precio: inputPrecio.value,
    urlImg: inputUrlImg.value,
    stock: inputStock.value,
  };
  arrayProductos.push(productoNuevo);
  Swal.fire({
    title: "Exito!",
    text: "El producto se creo correctamente",
    icon: "success",
  });

  LimpiarFormulario();

  ListarProductos();
}

function GuardarProductoParaEdicion() {
  let indiceProducto = arrayProductos.findIndex((element) => {
    return element.codigo === inputCodigo.value;
  });

  if (indiceProducto !== -1) {
    Swal.fire({
      title: "Vas a modificar un producto",
      text: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, modificar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        arrayProductos[indiceProducto].codigo = inputCodigo.value;
        arrayProductos[indiceProducto].marca = inputMarca.value;
        arrayProductos[indiceProducto].modelo = inputModelo.value;
        arrayProductos[indiceProducto].pantalla = inputPantalla.value;
        arrayProductos[indiceProducto].memoria = inputMemoria.value;
        arrayProductos[indiceProducto].almacenamiento =
          inputAlmacenamiento.value;
        arrayProductos[indiceProducto].camara = inputCamara.value;
        arrayProductos[indiceProducto].descripcion = inputDescripcion.value;
        arrayProductos[indiceProducto].precio = inputPrecio.value;
        arrayProductos[indiceProducto].urlImg = inputUrlImg.value;
        arrayProductos[indiceProducto].stock = inputStock.value;
        esEdicion = false;
        Swal.fire({
          title: "Exito!",
          text: "El producto se modificó correctamente",
          icon: "success",
        });

        LimpiarFormulario();
        ListarProductos();
      } else {
        esEdicion = false;
        LimpiarFormulario();
      }
    });
  }
}

window.LimpiarFormulario = function () {
  formProductos.reset();
  inputCodigo.className = "form-control";
  inputCodigo.value = CodigoAleatorio();
  inputModelo.className = "form-control";
  inputPantalla.className = "form-control";
  inputMemoria.className = "form-control";
  inputAlmacenamiento.className = "form-control";
  inputCamara.className = "form-control";
  inputDescripcion.className = "form-control";
  inputPrecio.className = "form-control";
  inputUrlImg.className = "form-control";
  inputStock.className = "form-control";
  GuardarLocalStorage();
};

function GuardarLocalStorage() {
  localStorage.setItem("productos", JSON.stringify(arrayProductos));
}

function ListarProductos() {
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
        <td><a href="${element.urlImg}" target ="_blank" title="Ver imagen"><img src="${element.urlImg}" alt="Miniatura imagen producto" width=50px"></a></td>
        <td>${element.stock}</td>
        <td>
        <div class="d-flex">
        <a href="#titulo" class="mx-2" onclick="CargarEdicion('${element.codigo}')"><img src="../img/admin/editar.png" alt="Editar" width="30"></a>
        <a href="#titulo" class="mx-2" onclick="EliminarProducto('${element.codigo}')"><img src="../img/admin/eliminar.png" alt="Eliminar" width="30"></a>
        </div>
        </td>
        
      </tr>`;
  });
}

function ListarUsuarios() {
  bodyTablaUsuarios.innerHTML = "";
  arrayUsuarios.forEach((element) => {
    bodyTablaUsuarios.innerHTML += `<tr>
    <th scope="row">${element.nombre}</th>
    <td>${element.email}</td>
    <td>********</td>
    <td>${element.role}</td>
    <td>
    <a href="#titulo" class="mx-2" onclick="EliminarUsuario('${element.email}','${element.role}')"><img src="../img/admin/eliminar.png" alt="Eliminar" width="30"></a>
    </td>
  </tr>`;
  });
}

window.CargarEdicion = function (codigo) {
  const productoAEditar = arrayProductos.find((element) => {
    return element.codigo === codigo;
  });
  inputModelo.className = "form-control";
  inputPantalla.className = "form-control";
  inputMemoria.className = "form-control";
  inputAlmacenamiento.className = "form-control";
  inputCamara.className = "form-control";
  inputDescripcion.className = "form-control";
  inputPrecio.className = "form-control";
  inputUrlImg.className = "form-control";
  inputStock.className = "form-control";

  if (productoAEditar !== undefined) {
    inputCodigo.value = productoAEditar.codigo;
    inputMarca.value = productoAEditar.marca;
    inputModelo.value = productoAEditar.modelo;
    inputPantalla.value = productoAEditar.pantalla;
    inputMemoria.value = productoAEditar.memoria;
    inputAlmacenamiento.value = productoAEditar.almacenamiento;
    inputCamara.value = productoAEditar.camara;
    inputDescripcion.value = productoAEditar.descripcion;
    inputPrecio.value = productoAEditar.precio;
    inputUrlImg.value = productoAEditar.urlImg;
    inputStock.value = productoAEditar.stock;
  }
  esEdicion = true;
};

window.EliminarProducto = function (codigo) {
  Swal.fire({
    title: "¿Estas seguro?",
    text: "Los cambios no se podran revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const nuevoArrayProductos = arrayProductos.filter(
        (element) => element.codigo !== codigo
      );
      arrayProductos = nuevoArrayProductos;
      GuardarLocalStorage();
      ListarProductos();
      Swal.fire({
        title: "Exito!",
        text: "El producto se Elimino correctamente",
        icon: "success",
      });
    }
  });
};

window.EliminarUsuario = function (email, rol) {
  if (rol !== "administrador") {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Los cambios no se podran revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoArrayUsuarios = arrayUsuarios.filter(
          (element) => element.email !== email
        );
        arrayUsuarios = nuevoArrayUsuarios;
        localStorage.setItem("Users", JSON.stringify(arrayUsuarios));
        ListarUsuarios();
        Swal.fire({
          title: "Exito!",
          text: "El usuario se Elimino correctamente",
          icon: "success",
        });
      }
    });
  } else {
    Swal.fire({
      title: "ERROR",
      text: "No se puede aliminar un usuario administrador",
      icon: "error",
    });
  }
};

window.getRole = function () {
  const user = JSON.parse(sessionStorage.getItem("userLog"));
  if (user === null) {
    return "invitado";
  } else if (user.role === "administrador") {
    return "admin";
  } else {
    return "invitado";
  }
};

window.CheckAdmin = function () {
  const role = getRole();
  console.log(role);
  if (role !== "admin") {
    window.location.replace("../index.html");
  }
};

CheckAdmin();
