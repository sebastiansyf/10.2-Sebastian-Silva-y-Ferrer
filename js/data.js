const recipienteDatos = document.getElementById("data");
const valorDatos = localStorage.getItem("dato");

if (valorDatos) {
  recipienteDatos.textContent = valorDatos;
} else {
  recipienteDatos.textContent = "No hay datos guardados";
}