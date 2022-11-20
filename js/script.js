let username;
username = prompt("Namn:  ");

/////////

const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((options) => {
  options.addEventListener("click", function () {
    const pInput = this.textContent;
    const cOptions = ["Sten", "Sax", "Påse"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
    updateScore();

    if (checkWinner()) {
      pScore = cScore = 0;
      updateScore();
    }
  });
});

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    alert(`${currentMatch} - Oavgjort`);
    return;
  }
  if (pInput === "Sten") {
    if (cInput === "") {
      alert(`${currentMatch} = Du vinner`);
      pScore++;
    } else {
      alert(`${currentMatch} = Datorn vinner`);
      cScore++;
    }
  } else {
    if (pInput === "Sax") {
      if (cInput === "") {
        alert(`${currentMatch} = Du vinner`);
        pScore++;
      } else {
        alert(`${currentMatch} = Datorn vinner`);
        cScore++;
      }
    }
  }
  if (pInput === "Påse") {
    if (cInput === "") {
      alert(`${currentMatch} = Du vinner`);
      pScore++;
    } else {
      alert(`${currentMatch} = Datorn vinner`);
      cScore++;
    }
  }
}

function updateScore() {
  document.getElementById("pScore").textContent = "Du: " + pScore;
  document.getElementById("cScore").textContent = "Datorn: " + cScore;
}

function checkWinner() {
  if (pScore === 3 || cScore === 3) {
    if (pScore === 3) {
      alert("Du har vunnit!");
      return true;
    } else {
      alert("Du förlora :(! Testa igen");
      return true;
    }
  }
  return false;
}
