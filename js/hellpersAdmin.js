export function CodigoAleatorio() {
  return window.crypto.randomUUID();
}

//Validaciones de input

export function ValidarInputVarios(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function ValidarInputDescripcion(input) {
  if (input.value.trim().length >= 10) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function ValidarInputPrecio(input) {
  const regExPrecio = /^\d{1,3}(\.\d{3})*,\d{2}$/;
  if (regExPrecio.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function ValidarInputUrlImg(input) {
  const regExUrl = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/;
  if (regExUrl.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function ValidarInputStock(input) {
  const regExStock = /^[0-9]+$/;
  if (regExStock.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function ValidarTodo(
  inputModelo,
  inputPantalla,
  inputMemoria,
  inputAlmacenamiento,
  inputDescripcion,
  inputPrecio,
  inputUrlImg,
  inputStock,
  inputCamara
) {
  if (
    ValidarInputVarios(inputModelo) &&
    ValidarInputVarios(inputPantalla) &&
    ValidarInputVarios(inputMemoria) &&
    ValidarInputVarios(inputAlmacenamiento) &&
    ValidarInputDescripcion(inputDescripcion) &&
    ValidarInputPrecio(inputPrecio) &&
    ValidarInputUrlImg(inputUrlImg) &&
    ValidarInputStock(inputStock) &&
    ValidarInputVarios(inputCamara)
  ) {
    return true;
  } else {
    return false;
  }
}
