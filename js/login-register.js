import {
  LoadUserAdmin,
  ValidateForm,
  checkPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "./hellpersLogReg.js";

LoadUserAdmin();
let listUsers = JSON.parse(localStorage.getItem("Users"));
//obtengo la accion a realizar, puede ser login o register
const action = window.location.search.slice(8);
let articleLogin = document.getElementById("articleLogin");
let imgLogin = document.getElementById("imgLogin");
let imgRegister = document.getElementById("imgRegister");
let articleRegister = document.getElementById("articleRegister");
// ----------------Regitro-----------------------------------
if (action === "register") {
  articleLogin.className = `col-12 col-md-6 my-auto p-2 d-none`;
  imgLogin.className = `ccol-12 col-md-6 text-center d-none`;
  imgRegister.className = `col-12 col-md-6 text-center d-flex flex-column justify-content-center order-2 order-md-1  `;
  articleRegister.className = `col-12 col-md-6 my-auto p-2 order-1 order-md-2 border shadow rounded-5`;

  let nameRegister = document.getElementById("nameRegister");
  let emailRegister = document.getElementById("emailRegister");
  let passwordRegister = document.getElementById("passwordRegister");
  let passwordRegister2 = document.getElementById("passwordRegister2");
  let acepted = document.getElementById("acepted");
  let formRegister = document.getElementById("formRegister");

  formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      ValidateForm(
        nameRegister,
        emailRegister,
        passwordRegister,
        passwordRegister2
      )
    ) {
      if (listUsers.find((user) => user.email === emailRegister.value)) {
        emailRegister.className = `mb-3 form-control is-invalid`;
        Swal.fire({
          imageUrl: "../img/error.png",
          text: "El correo ya existe, intenta de nuevo con otro correo.",
          confirmButtonColor: "#0d6efd",
          color: "#212121",
        });
      } else {
        const user = {
          nombre: nameRegister.value,
          email: emailRegister.value,
          password: passwordRegister.value,
          role: "cliente",
          aceptedProm: acepted.checked,
        };
        listUsers.push(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          color: "#212121",
          title: "Se realizo el registro con exito.",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("Users", JSON.stringify(listUsers));
        setTimeout(() => {
          window.location.replace("login-register.html?action=login");
        }, 1500);
      }
    } else {
      Swal.fire({
        imageUrl: "../img/error.png",
        text: "No se pudo realizar el registro, intenta de nuevo.",
        confirmButtonColor: "#0d6efd",
        color: "#212121",
      });
    }
  });
  nameRegister.addEventListener("blur", () => validateName(nameRegister));
  emailRegister.addEventListener("blur", () => validateEmail(emailRegister));
  passwordRegister.addEventListener("blur", () =>
    validatePassword(passwordRegister)
  );
  passwordRegister2.addEventListener("blur", () =>
    checkPassword(passwordRegister, passwordRegister2)
  );
}
//---------------FIN REGISTRO --------------------------------
//---------------LOGIN----------------------------------------
if (action === "login") {
  let emailLogin = document.getElementById("emailLogin");
  let passwordLogin = document.getElementById("passwordLogin");
  let formLogin = document.getElementById("formLogin");

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const userSearch = listUsers.find(
      (user) =>
        user.email === emailLogin.value && user.password === passwordLogin.value
    );

    if (userSearch !== undefined) {
      const userLog = {
        nombre: userSearch.nombre,
        email: userSearch.email,
        role: userSearch.role,
      };
      sessionStorage.setItem("userLog", JSON.stringify(userLog));
      Swal.fire({
        position: "top-center",
        color: "#212121",
        icon: "success",
        title: `Bienvenido ${userLog.nombre}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.replace("../index.html");
      }, 1500);
    } else {
      Swal.fire({
        imageUrl: "../img/error.png",
        text: "Correo y/o contraseña incorrecta.",
        confirmButtonColor: "#0d6efd",
        color: "#212121",
      });
    }
  });
}
//---------------FIN LOGIN---------------------------------

window.passwordRecover = function () {
  Swal.fire({
    title: "Recupero de contraseña.",
    input: "email",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Recuperar",
    showLoaderOnConfirm: false,
    confirmButtonColor: "#0d6efd",
    inputPlaceholder: "Ingresa tu correo electrónico",
    cancelButtonText: "Cancelar",
    color: "#212121",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("../index.html");
    }
  });
};

let passwordInputL = document.getElementById("passwordLogin");
let togglePasswordL = document.getElementById("togglePasswordL");
togglePasswordL.addEventListener("click", function () {
  if (passwordInputL.type === "password") {
    passwordInputL.type = "text";
    togglePasswordL.innerHTML =
      '<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>';
  } else {
    passwordInputL.type = "password";
    togglePasswordL.innerHTML =
      '<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>';
  }
});
// Mostrar el icono cuando se comienza a escribir
passwordInputL.addEventListener("input", function () {
  togglePasswordL.style.display =
    passwordInputL.value.length > 0 ? "block" : "none";
});

let passwordInput = document.getElementById("passwordRegister");
let togglePassword = document.getElementById("togglePassword");

// Función para mostrar/ocultar la contraseña
togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerHTML =
      '<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>';
  } else {
    passwordInput.type = "password";
    togglePassword.innerHTML =
      '<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>';
  }
});

passwordInput.addEventListener("input", function () {
  togglePassword.style.display =
    passwordInput.value.length > 0 ? "block" : "none";
});

let passwordInput2 = document.getElementById("passwordRegister2");
let togglePassword2 = document.getElementById("togglePassword2");

// Función para mostrar/ocultar la contraseña
togglePassword2.addEventListener("click", function () {
  if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
    togglePassword2.innerHTML =
      '<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>';
  } else {
    passwordInput2.type = "password";
    togglePassword2.innerHTML =
      '<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>';
  }
});

passwordInput2.addEventListener("input", function () {
  togglePassword2.style.display =
    passwordInput2.value.length > 0 ? "block" : "none";
});
