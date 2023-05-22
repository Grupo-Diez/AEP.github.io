function validarFormulario() {
  var nombre = document.getElementById("nombre").value.trim();
  var email = document.getElementById("email").value.trim();
  var telefono = document.getElementById("telefono").value.trim();
  var asunto = document.getElementById("asunto").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || telefono === "" || asunto === "" || mensaje === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  alert("Formulario enviado correctamente.");
  return true;
}


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

 async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action,{
    method: this.method,
    body: form, 
    headers:{
      'Accept': 'application/json'   
     }
  })
  if (response.ok){
    this.reset()
    alert('Gracias por contactarnos, pronto te responderemos')
  }

}