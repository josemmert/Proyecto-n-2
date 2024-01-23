import { SaveRolUser, getRoleUserLog } from "./hellpersNF.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("La página se ha cargado");

  const iniciarSesionBtn = document.getElementById("IsButton");
  const cerrarSesionBtn = document.getElementById("CsButton");

  iniciarSesionBtn.addEventListener("click", () => {
    console.log('Hiciste clic en "Iniciar Sesión"');
    sessionStorage.setItem("ultimoBoton", "iniciarSesion");
  });

  cerrarSesionBtn.addEventListener("click", () => {
    sessionStorage.setItem("ultimoBoton", "cerrarSesion");
  });

  const ultimoBoton = sessionStorage.getItem("ultimoBoton");

  if (ultimoBoton === "iniciarSesion") {
    console.log("Último botón: Iniciar Sesión");
    checkAdmin();
  } else if (ultimoBoton === "cerrarSesion") {
    console.log("Último botón: Cerrar Sesión");
    logOut();
  }
});

window.login = function () {
  SaveRolUser();
  checkAdmin();
};

function checkAdmin() {
  const rol = getRoleUserLog();
  if (rol === "admin") {
    document.querySelector("#li-ad").classList.remove("d-none");
    document.querySelector("#IsButton").classList.add("d-none");
    document.querySelector("#IsRegister").classList.add("d-none");
  } else if (rol === "invitado") {
    document.querySelector("#li-cl").classList.remove("d-none");
    document.querySelector("#IsButton").classList.add("d-none");
    document.querySelector("#IsRegister").classList.add("d-none");
  }
}

window.logOut = function () {
  sessionStorage.removeItem("user");
  document.querySelector("#li-ad").className = "nav-link d-none text-light";
  document.querySelector("#li-cl").className = "nav-link d-none";
  document.querySelector("#IsButton").classList.remove("d-none");
  document.querySelector("#IsRegister").classList.remove("d-none");
};
