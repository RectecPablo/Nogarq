

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

  //mostrar datos obtenidos del formulario 

  $(document).ready(function() {
    // Agrega evento de click al botón "Enviar"
    $("#submitButton").click(function() {

      var name = $("#name").val();
      var lastName = $("#lastName").val();
      var email = $("#email").val();
      var asunto = $("#asunto").val();
  
      // Muestra los datos en el modal
      $("#modalData").html("Nombre: " + name + "<br>Apellido: " + lastName + "<br>Email:" + email + "<br>Asunto: " + asunto);
  
      // Muestra el modal
      // $("#myModal").modal("show");
    });
  });
  
