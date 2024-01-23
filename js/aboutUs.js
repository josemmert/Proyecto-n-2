
  
document.addEventListener("DOMContentLoaded", () => {
    const boxForms = document.querySelectorAll(".box-form");
  
    boxForms.forEach((boxForm) => {
        boxForm.addEventListener("mouseover", hightbox);
        boxForm.addEventListener("mouseover", () => showInfoTooltip(boxForm));
        boxForm.addEventListener("mouseout", removeHighlight);
        boxForm.addEventListener("mouseout", hideInfoTooltip);
    });
  
    function hightbox() {
        this.style.background = 'red';
    }
  
    function removeHighlight() {
        this.style.background = '';
    }

    function showInfoTooltip(boxForm) {
        let tooltip = document.createElement("div"); //crea elemento
        tooltip.textContent = "Biotecologa, con muchas ganas de aprender el mundo de la programacion para asi en un futuro fusionar ambas disciplinas"; 
        tooltip.className = "info-tooltip";    
        boxForm.appendChild(tooltip);
    
       

    }
  
    function hideInfoTooltip() {
        let tooltip = document.querySelector(".info-tooltip");
        if (tooltip) {
            tooltip.remove();
        }
    }
});
  ;