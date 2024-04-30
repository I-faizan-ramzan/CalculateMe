function getResult() {
  const a = document.getElementById("val").value;
  const b = document.getElementById("drate").value;

  const result = a - a * 0.25;
  const dollar = result * b;
  document.getElementById("res").value = result;
  document.getElementById("dres").value = dollar;
}

document.getElementById("btn").addEventListener("click", getResult);
