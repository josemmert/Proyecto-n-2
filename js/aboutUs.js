   document.addEventListener("DOMContentLoaded", () => {
    const boxForm = document.querySelectorAll(".box-form");


        boxForm.forEach(element => {
            element.addEventListener('click', highlight);
            element.addEventListener('mouseleave', removeHighlight);
          });
  
    function highlight() {
        this.style.background = 'red';
        this.querySelector('.pText').classList.remove('d-none')
    
    }
  
    function removeHighlight() {
        this.style.background = '';
        this.querySelector('.pText').classList.add('d-none')
    }
 })

    // Otra forma de hacerlo
//  document.addEventListener("DOMContentLoaded", () => {
//     const boxForms = document.querySelectorAll(".box-form");

//     boxForms.forEach(element => {
//         element.addEventListener('click', () => toggleHighlight(element));
//         element.addEventListener('mouseleave', () => toggleHighlight(element, true));
//     });

//     function toggleHighlight(element, remove = false) {
//         element.style.background = remove ? '' : 'red';
//         element.querySelector('.pText').classList.toggle('d-none', remove);
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const questionForms = document.querySelectorAll(".question-form"); //por cada formulario
  
    questionForms.forEach(form => {
      const submitButton = form.querySelector("button"); //captura button
      const answerDiv = form.querySelector(".answer");
  
      submitButton.addEventListener("click", function () {
        askQuestion(this);
      });
    });
  });
  
  function askQuestion(button) {
    const form = button.closest(".question-form");
    const questionInput = form.querySelector("#question"); //captura el texto que ingresa el usuario
     const question = questionInput.value; //guarda el valor es decir el texto
  
    if (question.trim() !== "") {
      // Obtener preguntas almacenadas en localStorage o inicializar un array vacío
      const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
  
      // Agregar la nueva pregunta al array
      storedQuestions.push(question);
  
      // Guardar el array actualizado en localStorage
      localStorage.setItem('questions', JSON.stringify(storedQuestions));
  
     
    questionInput.value = "";
  }}