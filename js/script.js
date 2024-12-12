
function validateForm() {
  let x = document.forms["formularz"]["fname"].value;
  if (x == "") {
    alert("wypełnij formularz");
    return false;
  }
}
