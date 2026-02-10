const content = document.getElementById("content");
let step = 1;

loadStep();

document.addEventListener("click", e => {
  if (e.target.id === "nextBtn") {
    step++;
    loadStep();
  }
});

function loadStep() {

  /* STEP 1 — INTRO */
  if (step === 1) {
    content.innerHTML = `
      <h2>Oyyy Ammuuu 💖</h2>
      <p>Edho koncham something special for you 🧸</p>
      <button id="nextBtn">Next ➜</button>
    `;
  }

  /* STEP 2 — MESSAGE */
  if (step === 2) {
    content.innerHTML = `
      <h2>Just one question anthey… 😳</h2>
      <p>Please answer honestly 💗</p>
      <button id="nextBtn">Next ➜</button>
    `;
  }

  /* STEP 3 — PAUSE */
  if (step === 3) {
    content.innerHTML = `
      <h2>Ready unduuuuu? 👀💓</h2>
      <p>No pressure anuko… okay maybe a little undochuuu 😌</p>
      <button id="nextBtn">Next ➜</button>
    `;
  }

  /* STEP 4 — POLISHED YES / NO PAGE */
if (step === 4) {
  let noCount = 0;

  const noTexts = [
    "No",
    "Ammuuu no aaa 🥺",
    "Ammuuu alochinchu 😭",
    "Ammuuu edchesthaa 💔",
    "Ammuuu please ey 🧸",
    "No nokkithey bagodhu 🥹",
    "Ammuuuuu!! 😣",
    "Ammuuu odhey nokkakey 😭",
    "Ammuuu please nokkakuuuuu no 💔",
    "Yes kottiii chudavey naakosamm 🥺💖",
    "Oyyy no nokkithey nenu edchesthaaa chusko 😭😭",
    "Ammuuu pleaseeee 😭🧸"
  ];

  // lock scrolling during NO spam
  document.body.style.overflow = "hidden";

  content.innerHTML = `
    <img id="bearImg" class="choice-img" src="images/happy.gif">
    <h2>Will you be my Valentine? 💖</h2>

    <div class="buttons" style="position:relative;">
      <div id="yesWrap">
        <button id="yesBtn">Yes 💖</button>
      </div>
      <button id="noBtn">${noTexts[0]}</button>
    </div>
  `;

  const yesWrap = document.getElementById("yesWrap");
  const yesBtn  = document.getElementById("yesBtn");
  const noBtn   = document.getElementById("noBtn");
  const bearImg = document.getElementById("bearImg");

  const images = [
    "images/img1.jpg",

  ];

  noBtn.onclick = () => {
    noCount++;

    // YES grows smoothly
    yesWrap.style.transform = `scale(${1 + noCount * 0.85})`;

    // NO shrinks
    noBtn.style.transform = `scale(${Math.max(0.15, 1 - noCount * 0.07)})`;

    // Replace NO text
    if (noTexts[noCount]) {
      noBtn.textContent = noTexts[noCount];
    }

    // Change image gradually
    if (noCount >= 3 && noCount < 6) bearImg.src = images[1];
    if (noCount >= 6 && noCount < 9) bearImg.src = images[2];
    if (noCount >= 9) bearImg.src = images[3];

    // Shake NO after few clicks
    if (noCount >= 2) {
      noBtn.classList.add("shake");
      setTimeout(() => noBtn.classList.remove("shake"), 350);
    }

    // NO disappears after 10 clicks
    if (noCount >= 12) {
      noBtn.style.opacity = "0";
      noBtn.style.pointerEvents = "none";
    }

    // YES fills entire card after 12 clicks
    if (noCount >= 13) {
      yesWrap.classList.add("fullscreen-yes");
    }
  };

  yesBtn.onclick = () => {
    document.body.style.overflow = "";
    step++;
    loadStep(); // goes to your existing final page
  };
}


  /* STEP 5 — FINAL */
  if (step === 5) {
    content.innerHTML = `
<h2>Oyy Bhavana… 🥺💖</h2>
      <p>okati cheppali Bhavana…  
chaala rojula nundi naa manasulo daachukoni unna maataa idhi… 💖 </p>
<p style="font-size:18px;">
    👉 <b>Ee jeevithaaniki naa pakkana nilabadathaavaa?  
    nannu nammi naatho kalisi nadusthaavaa… ellappudu!! forever!!!!!?</b> 💗
  </p>
      
       <h3>💞 Naa Bujjuluuuuuu… naa pakkane undipovaaaa. Forever and ever and everrrrrr!!. 💞</h3>
       <p>Happy Valentine’s Day Bhavana 💘</p>
    `;
  }
}
