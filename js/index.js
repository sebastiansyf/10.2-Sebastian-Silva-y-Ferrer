const campo = document.getElementById("inputText");
const ingresar = document.getElementById("buttonText");

ingresar.addEventListener("click", () => {
  const valor = campo.value;

  if (valor.trim() !== "") {
    localStorage.setItem("dato", valor);

    campo.value = "";
  } else {
    alert("El campo está vacío");
  }
});
