const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//Registro usuario 
function getFormData(){
  var config = {};
   $('input').each(function () {
    config[this.name] = this.value;
   });
   console.log(config);
}

// formulario
  //validacion 
$(document).ready(function() {
  $("#basic-form").validate();
});

