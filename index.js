function Enviar() {

  var nome = document.getElementById("nomeid").value;
  var email = document.getElementById("emailid").value;

  document.getElementById("resultadoNome").innerHTML = nome;
  document.getElementById("resultadoEmail").innerHTML = email;
}
