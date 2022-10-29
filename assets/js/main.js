import app from "./firebase.js";

import {
  getFirestore,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const db = getFirestore(app);

function showConfet(jogo) {
  const elemento = document.getElementById(jogo);
  party.confetti(elemento);
}

function updateScore(id, br, other) {
  const element = document.getElementById(id);
  element.innerText = `${br} x ${other}`;
}

function falaGalvao() {
  const audio = new Audio("../../assets/audio/gol.mp3");
  //   audio.playbackRate = 1.5;
  audio.play();
}

function show() {
  const elemento = document.getElementById("topgun");
  elemento.classList.add("show");

  setTimeout(() => {
    elemento.classList.remove("show");
  }, 4000);
}

onSnapshot(doc(db, "matches", "br-01"), (doc) => {
  const { br, other } = doc.data();

  updateScore("br-01", br, other);

  if (br > 0) {
    showConfet("br-01");
    falaGalvao();
    show();
  }
});
