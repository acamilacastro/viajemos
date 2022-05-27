function validateForm() {
    let xnombre = document.forms["contacto"]["nombre"].value;
    if (xnombre == "") {
      alert("El campo Nombre no puede estar vacio.");
      return false;
    }
    let xapellido = document.forms["contacto"]["apellido"].value;
    if (xapellido == "") {
      alert("El campo Apellido no puede estar vacio.");
      return false;
    }
    let xmail = document.forms["contacto"]["mail"].value;
    if (xmail == "") {
    alert("El campo Mail no puede estar vacio.");
    return false;
  }
  
  let xmensaje = document.forms["contacto"]["mensaje"].value;
  if (xmensaje == "") {
    alert("El campo Consulta no puede estar vacio.");
    return false;
  }
  }