const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
// formulario
$(document).ready(function() {
  $("#basic-form").validate();
});
