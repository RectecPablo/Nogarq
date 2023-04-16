$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
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
