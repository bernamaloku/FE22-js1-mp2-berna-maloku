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
  document.getElementById("pScore").textContent = username + ": " + pScore;
  document.getElementById("cScore").textContent = "Datorn: " + cScore;
}

function checkWinner() {
  setTimeout(function () {
    if (pScore >= 3 || cScore >= 3) {
      if (pScore >= 3) {
        alert("Du har vunnit!");
        resetTheGame();
        location.reload(true);
      } else {
        alert("Du förlora :(! Testa igen");
        resetTheGame();
        location.reload(true);
      }
    }
  }, 200);
}

function resetTheGame() {
  pScore = 0;
  cScore = 0;
  cScore.innerText = 0;
  pScore.innerText = 0;
  cInput = 0;
  pInput = 0;
}
