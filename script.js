const showButton = document.getElementById("showButton");
const showButton2 = document.getElementById("showButton2");
const hiddenButton2 = document.getElementById("hiddenButton2");
const hiddenButton3 = document.getElementById("hiddenButton3");
const startButton = document.getElementById("startButton");
const frame = document.getElementById("frame");
const invisibleCounter = document.getElementById("invisibleCounter");
const jailImg = document.createElement("img");
const jailBreakImg = document.createElement("img");
const player = document.createElement("img");

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
  chatBox.innerText = "Let me see that game now";
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
  player.src = "assets/stickman.png";
  player.style.height = "200px";
  player.style.width = "auto";
  player.style.position = "absolute";
  player.style.top = "50%";
  player.style.left = "50%";
  player.style.transform = "translate(-50%, -50%)";
  frame.appendChild(jailImg);
  const playerImage = document.getElementById("player");
  playerImage.remove();
  frame.appendChild(player);
  const chatBox = document.getElementById("bulle");
  chatBox.innerText = "WTF??!?";
  const chatBoxNPC = document.getElementById("bulleNPC");
  chatBoxNPC.innerText = "You will never escape this place Muahahahahahaha! ";
});

let jailCounter = 0;
invisibleCounter.innerText = `Counter: ${jailCounter}`;
invisibleCounter.addEventListener("click", function () {
  jailBreakImg.src = "assets/openbar.png";
  if (jailCounter <= 2) {
    jailCounter++;
    invisibleCounter.innerText = `Counter: ${jailCounter}`;
  } else {
    console.log(frame);
    frame.removeChild(jailImg);
    jailBreakImg.style.width = "75%";
    jailBreakImg.style.height = "100%";
    jailBreakImg.style.position = "absolute";
    jailBreakImg.style.top = "50%";
    jailBreakImg.style.left = "50%";
    jailBreakImg.style.transform = "translate(-50%, -50%)";
    frame.appendChild(jailBreakImg);
    const chatBox = document.getElementById("bulle");
    chatBox.innerText = "I came in like a wreckiiiiiin ball";
    const chatBoxNPC = document.getElementById("bulleNPC");
    chatBoxNPC.innerText = "GRRRRrrrrrr";
  }
});
