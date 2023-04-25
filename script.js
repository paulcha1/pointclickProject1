const showButton = document.getElementById("showButton");
const showButton2 = document.getElementById("showButton2");
const hiddenButton2 = document.getElementById("hiddenButton2");
const hiddenButton3 = document.getElementById("hiddenButton3");
const startButton = document.getElementById("startButton");
const startButton2 = document.getElementById("startButton2");
const frame = document.getElementById("frame");
const invisibleCounter = document.getElementById("invisibleCounter");
const jailImg = document.createElement("img");
const jailBreakImg = document.createElement("img");
const player = document.getElementById("player");
const playerImage = player.querySelector("img");
const playerContainer = document.querySelector(".player-container");
const cookie = document.querySelector(".cookie");
const chatBox = document.getElementById("bulle");
const chatBoxNPC = document.getElementById("bulleNPC");

showButton.addEventListener("click", function () {
  showButton.style.display = "none";
  showButton2.style.display = "block";
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "Hello! anyone's here? is this... A GAME???";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText = "NONONONNONONO!! NO GAMES HERE! Shoo! go away!!";
});

showButton2.addEventListener("click", function () {
  showButton2.style.display = "none";
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "Then why is there a title and a start button ??!";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText = "DO NOT CLICK THAT BUTTON!";
  hiddenButton1.style.display = "block";
});

hiddenButton1.addEventListener("click", function () {
  hiddenButton1.style.display = "none";
  hiddenButton2.style.display = "block";
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "... i clicked anyway. Now what?";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText =
    "see? nothing's happening. as i said, no game in here!";
});

hiddenButton2.addEventListener("click", function () {
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "why is the button moving? Are you hiding it?";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText =
    "Leave now or you will suffer the eternal curse of... hum.. eternal... cursedom!";
  hiddenButton2.style.display = "none";
  hiddenButton3.style.display = "block";
});

hiddenButton3.addEventListener("click", function () {
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "I'm gonna click that button even harder!!!";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText = "Noooooooooooooooooooooooo!";
  hiddenButton3.style.display = "none";
  startButton.style.display = "block";
});

startButton.addEventListener("click", function () {
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "Let me see that game now!";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText = "I WARNED YOU! NOW SUFFER MY CURSE! MUAHAHAHAHAHAHA";
  startButton.style.display = "none";
});

startButton.addEventListener("click", function () {
  jailImg.src = "assets/jail-bars-36557.png";
  jailImg.style.position = "absolute";
  jailImg.style.top = "50%";
  jailImg.style.left = "50%";
  jailImg.style.transform = "translate(-50%, -50%)";
  playerImage.src = "assets/stickman.png";
  playerImage.style.height = "200px";
  playerImage.style.width = "auto";
  playerImage.style.position = "absolute";
  playerImage.style.top = "50%";
  playerImage.style.left = "50%";
  playerImage.style.transform = "translate(-50%, -50%)";
  frame.appendChild(jailImg);

  frame.appendChild(player);
  setTimeout(() => {
    const chatBox = document.getElementById("bulle");
    chatBox.innerText = "WTF??!? I need to find a way to break out!";
    const chatBoxNPC = document.getElementById("bulleNPC");
    chatBoxNPC.innerText = "You will never escape this place Muahahahahahaha! ";
  }, 5000);
});

let jailCounter = 0;
invisibleCounter.innerText = `Counter: ${jailCounter}`;
invisibleCounter.addEventListener("click", function () {
  jailBreakImg.src = "assets/openbar.png";
  if (jailCounter <= 4) {
    jailCounter++;
    invisibleCounter.innerText = `Counter: ${jailCounter}`;
  } else {
    frame.removeChild(jailImg);
    jailBreakImg.style.width = "75%";
    jailBreakImg.style.height = "100%";
    jailBreakImg.style.position = "absolute";
    jailBreakImg.style.top = "50%";
    jailBreakImg.style.left = "50%";
    jailBreakImg.style.transform = "translate(-50%, -50%)";
    frame.appendChild(jailBreakImg);
    setTimeout(() => {
      frame.removeChild(jailBreakImg);
    }, 1000);
    setTimeout(() => {
      chatBox.innerText = "now what?";

      startButton2.style.display = "block";
      playerContainer.appendChild(playerImage);
      playerImage.style.left = "60px";
      playerImage.style.top = "390px";
    }, 3000);
    setTimeout(() => {
      chatBoxNPC.innerText = "hum... welcome to the game... i guess";
    }, 5000);
    const chatBox = document.getElementById("bulle");
    chatBox.innerText = "You underestimated my power";
    const chatBoxNPC = document.getElementById("bulleNPC");
    chatBoxNPC.innerText = "GRRRRrrrrrr";
    invisibleCounter.style.display = "none";
  }
});

const button = document.getElementById("showButton2");
button.addEventListener("click", changeTitle);

function changeTitle() {
  const titre = document.querySelector(".titre");
  const text = "Is this... a game??";
  const interval = 50;
  const delay = 500;
  let i = 0;
  let size = 24;

  const change = () => {
    if (i >= text.length) return;
    titre.textContent = text.substr(0, i + 1);
    titre.style.fontSize = `${size}px`;
    titre.style.color = "black";
    titre.style.fontFamily = "Impact";
    i++;
    size++;
    setTimeout(change, interval);
  };

  setTimeout(change, delay);
}
let cookieCounter = 0;
const span = document.querySelector("span");
const cookieElements = document.querySelectorAll(".cookie");

startButton2.addEventListener("click", function () {
  startButton2.style.display = "none";
  cookieElements.forEach(function (cookieElement) {
    cookieElement.style.display = "block";
  });

  if (cookie.style.display === "block") {
    cookie.addEventListener("click", cookieCounterF);
  }
  function cookieCounterF() {
    if (cookieCounter < 9) {
      console.log(chatBox.innerText);
      cookieCounter++;
      if (cookieCounter === 5) {
        chatBox.innerText = "is this really it? a lame cookie clicker??";
        chatBoxNPC.innerText = "Almost there!";
      } else if (cookieCounter === 9) {
        chatBoxNPC.innerText =
          "Congratz! it's time to stop now :) hope you enjoyed this great game, this way out :";
      }
    }

    cookie.style.width = "35%";
    setTimeout(() => {
      cookie.style.width = "50%";
    }, 100);
    span.innerText = `${cookieCounter}`;
  }
});
