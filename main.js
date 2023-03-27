function trocarFolhaDeEstilo() {
    const folhaDeEstilo1 = document.getElementById("style-sheet-1");
    const folhaDeEstilo2 = document.getElementById("style-sheet-2");

    if (folhaDeEstilo1.disabled) {
        folhaDeEstilo1.disabled = false;
        folhaDeEstilo2.disabled = true;
    } else {
        folhaDeEstilo1.disabled = true;
        folhaDeEstilo2.disabled = false;
    }
}

function toggleButton() {
    var btn = document.getElementById("toggle-btn");
    if (btn.classList.contains("btn-primary")) {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-secondary");
      btn.textContent = "Desligar";
    } else {
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-primary");
      btn.textContent = "Ligar";
    }
  }
  