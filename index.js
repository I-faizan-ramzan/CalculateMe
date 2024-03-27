function getResult() {
  const a = document.getElementById("val").value;
  const result = a - a * 0.25;
  document.getElementById("res").value = result;
}
