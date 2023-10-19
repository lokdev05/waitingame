let winMsg = document.querySelector(".win_msg");
const clickCounter = document.getElementById("clickCount");
const matchCounter = document.getElementById("matchCount");
const emojis = [
  "🤟",
  "🤟",
  "😄",
  "😄",
  "❤️",
  "❤️",
  "😢",
  "😢",
  "😎",
  "😎",
  "🙈",
  "🙈",
  "💨",
  "💨",
  "😞",
  "😞",
];
// Melanger les emojis
let mixEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

let clicks = 0;
let matches = 0;

//Creation des cartes
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "card";
  box.innerHTML = mixEmojis[i];

  box.addEventListener("click", () => {
    //Compeur Click
    clicks++;
    clickCounter.textContent = clicks;

    //Verifier si la carte n'est pas encore matchée ou retournée
    if (
      !box.classList.contains("matching") &&
      !box.classList.contains("turnBox")
    ) {
      box.classList.add("turnBox");

      const turnedBoxes = document.querySelectorAll(".turnBox");
      if (turnedBoxes.length > 1) {
        if (turnedBoxes[0].innerHTML === turnedBoxes[1].innerHTML) {
          turnedBoxes[0].classList.add("matching");
          turnedBoxes[1].classList.add("matching");
          turnedBoxes[0].classList.remove("turnBox");
          turnedBoxes[1].classList.remove("turnBox");

          //Compteur Matching
          matches++;
          matchCounter.textContent = matches;

          if (matches === emojis.length / 2) {
            winMsg.classList.add("win");
          }
        } else {
          setTimeout(() => {
            turnedBoxes.forEach((turnedBox) => {
              turnedBox.classList.remove("turnBox");
            });
          }, 500);
        }
      }
    }
  });

  document.querySelector(".game_content").appendChild(box);
}
