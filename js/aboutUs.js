   document.addEventListener("DOMContentLoaded", () => {
    const boxForm = document.querySelectorAll(".box-form");


        boxForm.forEach(element => {
            element.addEventListener('click', highlight);
            element.addEventListener('mouseleave', removeHighlight);
          });
  
    function highlight() {
        this.style.background = '#FD972B';
        this.querySelector('.pText').classList.remove('d-none');
        this.querySelector('.name-know').classList.add('d-none');
        this.querySelector('h2').classList.add('text-card');
        this.querySelector('img').classList.add('img-aboutUs-open');
        this.querySelector('img').classList.remove('img-aboutUs');
       
    
    }
  
    function removeHighlight() {
        this.style.background = '';
        this.querySelector('.pText').classList.add('d-none');
        this.querySelector('.name-know').classList.remove('d-none');
        this.querySelector('h2').classList.remove('text-card');
        this.querySelector('img').classList.add('img-aboutUs');
        this.querySelector('img').classList.remove('img-aboutUs-open');
        
    }
 })
