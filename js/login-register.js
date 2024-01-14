//obtengo la accion a realizar, puede ser login o register
const action = window.location.search.slice(8);
let formLogin = document.getElementById("formLogin");
let imgLogin = document.getElementById("imgLogin");
let imgRegister = document.getElementById("imgRegister");
let formRegister = document.getElementById("formRegister");
if (action === "register") {
  formLogin.className = `col-12 col-sm-6 my-auto p-2 d-none`;
  imgLogin.className = `col-12 col-sm-6 text-center d-none`;
  imgRegister.className = `col-12 col-sm-6 text-center`;
  formRegister.className = `col-12 col-sm-6 my-auto p-2 `;
  let nameReggiter = document.getElementById("nameRegister");
}
