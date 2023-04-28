const showButton = document.getElementById("showButton");
const showButton2 = document.getElementById("showButton2");
const hiddenButton1 = document.getElementById("hiddenButton1");
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
let cookieBgColor = 260;
let cookieLuminosity = 100;
const badEndButton = document.getElementById("badEndButton");
let cookieCounter = 0;
const span = document.querySelector("span");
const cookieElements = document.querySelectorAll(".cookie");
const winImg = document.getElementById("frameImg3");
const winImg2 = document.getElementById("frameImg4");

showButton.addEventListener("click", function () {
  showButton.style.display = "none";
  chatBox.innerText = "Hello! anyone's here? Is this... A VIDEOGAME???";
  setTimeout(function () {
    showButton2.style.display = "block";
    chatBoxNPC.innerText = "NONONONNONONO!! NO GAMES HERE! Shoo! go away!!";
  }, 2000);
});

showButton2.addEventListener("click", function () {
  showButton2.style.display = "none";
  chatBox.innerText = "Then why is there a title and a start button here??!";
  chatBoxNPC.innerText = "...";
  setTimeout(function () {
    chatBoxNPC.innerText =
      "DO NOT CLICK THAT BUTTON! Besides it's not even clickable ha!";
    hiddenButton1.style.display = "block";
  }, 2000);
});

hiddenButton1.addEventListener("click", function () {
  hiddenButton1.style.display = "none";
  hiddenButton2.style.display = "block";

  chatBox.innerText = "... i clicked anyway. Now what?";
  chatBoxNPC.innerText = "...";
  setTimeout(function () {
    chatBoxNPC.innerText =
      "See? Nothing's happening. Just like i said, no game in here!";
  }, 2000);
});

hiddenButton2.addEventListener("click", function () {
  chatBox.innerText = "why is the button moving? Are you hiding it?";
  chatBoxNPC.innerText = "...";
  setTimeout(function () {
    chatBoxNPC.innerText =
      "LEAVE! Leave now or you will suffer the eternal curse of... hum.. eternal... cursedom!";
    hiddenButton2.style.display = "none";
    hiddenButton3.style.display = "block";
  }, 2000);
});

hiddenButton3.addEventListener("click", function () {
  chatBox.innerText = "I'm gonna click that button even harder!!!";
  chatBoxNPC.innerText = "...!";
  hiddenButton3.style.display = "none";
  startButton.style.display = "block";
  setTimeout(function () {
    chatBoxNPC.innerText = "Noooooooooooooooooooooooo!";
  }, 2000);
});

startButton.addEventListener("click", function () {
  chatBox.innerText = "Let me see that game now!";
  startButton.style.display = "none";
  setTimeout(function () {
    chatBoxNPC.innerText = "I WARNED YOU! NOW SUFFER MY CURSE! MUAHAHAHAHAHAHA";
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
  }, 2000);
  setTimeout(function () {
    chatBox.innerText = "WTF??!? I need to find a way to break out!";
    chatBoxNPC.innerText = "You will never escape this place Muahahahahahaha! ";
  }, 6000);
});

startButton.addEventListener("click", function () {});

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
      chatBox.innerText = "What now?";
      startButton2.style.display = "block";
      playerContainer.appendChild(playerImage);
      playerImage.style.left = "60px";
      playerImage.style.top = "390px";
    }, 3000);
    setTimeout(() => {
      chatBoxNPC.innerText =
        "Hum... Welcome to the game... I guess... Simply click on the cookie 10 times, and you win! Voila!";
    }, 5000);
    chatBox.innerText = "You underestimated my power";
    chatBoxNPC.innerText = "GRRRRrrrrrr";
    invisibleCounter.style.display = "none";
  }
});

const button = document.getElementById("showButton2");
button.addEventListener("click", changeTitle);

function changeTitle() {
  const titre = document.querySelector(".titre");
  const text = "IS THIS... A GAME??";
  const interval = 50;
  const delay = 500;
  let i = 0;
  let size = 34;

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

startButton2.addEventListener("click", function () {
  startButton2.style.display = "none";
  cookieElements.forEach(function (cookieElement) {
    cookieElement.style.display = "block";
  });

  if (cookie.style.display === "block") {
    cookie.addEventListener("click", cookieCounterF);
  }

  function cookieCounterF() {
    if (cookieCounter < 100) {
      cookieCounter++;

      if (cookieCounter === 2) {
        chatBox.innerText = "is this really it? a lame cookie clicker??";
        chatBoxNPC.innerText = "Almost there!";
      } else if (cookieCounter === 9) {
        chatBoxNPC.innerText =
          "Congratz! it's time to stop now :) hope you enjoyed this great game, this way out :";
        badEndButton.style.display = "block";
        chatBox.innerText =
          "Hmmm... i dont know... there's something I DO NOT TRUST about browser and cookies...";
      }

      if (cookieCounter >= 10 && cookieCounter <= 19) {
        const redValue = 255;
        const greenValue = 0;
        const blueValue = Math.floor((cookieCounter - 10) * 12.75) + 133;
        frame.style.backgroundColor = `hsl(${cookieBgColor}, 70%, ${cookieLuminosity}%)`;
        cookieBgColor += 10;

        cookieLuminosity -= 5;
        if (cookieBgColor >= 360) {
          cookieBgColor = 360;
          cookieLuminosity = 50;
        }
      }

      cookie.style.width = "35%";
      setTimeout(() => {
        cookie.style.width = "50%";
      }, 100);
      if (cookieCounter < 10) {
        span.innerText = `${1990 + cookieCounter}`;
      } else {
        span.innerText = "1999";
      }

      if (cookieCounter === 20) {
        chatBox.innerText = "What the... why is everything becoming red?";
        chatBoxNPC.innerText =
          "If you click one more time I will cease to exist !!! I BEG YOU! DON'T please just CLICK THAT BUTTON instead";
      }
      if (cookieCounter === 21) {
        cookie.style.display = "none";
        winImg.style.display = "block";
        winImg.style.width = "100%";
        winImg.style.height = "100%";
        badEndButton.style.display = "none";
        setTimeout(() => {
          winImg.style.display = "none";
          span.innerText = "2000";
          winImg2.style.display = "block";
          winImg2.style.width = "100%";
          winImg2.style.height = "100%";
          changeTitle3();
          chatBoxNPC.innerText =
            "The only weakness of computers... The number 2000..";
        }, 2500);
      }
    }
  }
});

const frameImg2 = document.getElementById("frameImg2");

badEndButton.addEventListener("click", () => {
  cookieElements.forEach((cookie) => {
    cookie.style.display = "none";
  });
  frameImg2.style.display = "block";
  frameImg2.style.width = "100%";
  frameImg2.style.height = "100%";
  changeTitle2();
  badEndButton.style.display = "none";
  chatBoxNPC.innerText = "Trusting Skynet? HAHA you ignorant fool";
});

function changeTitle2() {
  const titre = document.querySelector(".titre");
  const text = "YOU LOST GITGUD N00B LUL";
  const interval = 50;
  const delay = 500;
  let i = 0;
  let size = 34;

  const change = () => {
    if (i >= text.length) return;
    titre.textContent = text.substr(0, i + 1);
    titre.style.fontSize = `${size}px`;
    titre.style.color = "white";
    titre.style.fontFamily = "Impact";
    i++;
    size++;
    setTimeout(change, interval);
  };
  change();
}

function changeTitle3() {
  const titre = document.querySelector(".titre");
  const text = "YOU DID SOMETHING!<br>but your parents still dont love you.";
  const interval = 50;
  const delay = 500;
  let i = 0;
  let size = 35;

  const change = () => {
    if (i >= text.length) return;
    titre.innerHTML =
      text.slice(0, i + 1) + (text[i + 1] === "<br>" ? "<br>" : "");
    titre.style.fontSize = `${size}px`;
    titre.style.color = "gold";
    titre.style.fontFamily = "Impact";
    i++;
    size++;
    setTimeout(change, interval);
  };
  change();
}
