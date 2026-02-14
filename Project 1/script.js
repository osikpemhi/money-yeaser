const yesButton = document.querySelector(".option-button-yes");
const noButton = document.querySelector(".option-button-no");

noButton.addEventListener("click", () => {
  noButton.textContent = "You Lie! 😠";

  setTimeout(() => {
    noButton.textContent = "Naa 😞";
  }, 3000);
});

let chances = 3;

// 8  6  4

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

if (getDeviceType() === "mobile") {
  // Mobile-specific functionality
  yesButton.addEventListener("click", () => {
    if (chances === 3) {
      yesButton.textContent = "Are you sure? 😁";
      yesButton.style.transform = "scale(0.8)";
      yesButton.style.padding = "17px";

      noButton.style.transform = "scale(1.1)";

      chances -= 1;
    } else if (chances === 2) {
      yesButton.textContent = "reeeeeeally? 😎";
      yesButton.style.transform = "scale(0.6)";

      noButton.style.transform = "scale(1.2)";

      chances -= 1;
    } else if (chances === 1) {
      yesButton.textContent = "you sure? 🤣 ";
      yesButton.style.transform = "scale(0.4)";

      yesButton.addEventListener("click", () => {
        yesButton.style.position = "absolute";
        yesButton.style.left =
          Math.random() * (window.innerWidth - yesButton.offsetWidth) + "px";
        yesButton.style.top =
          Math.random() * (window.innerHeight - yesButton.offsetHeight) + "px";
      });
      noButton.style.transform = "scale(1.3)";
    }
  });
} else {
  // Desktop-specific functionality
  yesButton.addEventListener("click", () => {
    if (chances === 3) {
      yesButton.textContent = "Are you sure? 😁";
      yesButton.style.transform = "scale(0.8)";
      yesButton.style.padding = "17px";

      noButton.style.transform = "scale(1.1)";

      chances -= 1;
    } else if (chances === 2) {
      yesButton.textContent = "reeeeeeally? 😎";
      yesButton.style.transform = "scale(0.6)";

      noButton.style.transform = "scale(1.2)";

      chances -= 1;
    } else if (chances === 1) {
      yesButton.textContent = "you sure? 🤣 ";
      yesButton.style.transform = "scale(0.4)";

      yesButton.addEventListener("mouseenter", () => {
        yesButton.style.position = "absolute";
        yesButton.style.left =
          Math.random() * (window.innerWidth - yesButton.offsetWidth) + "px";
        yesButton.style.top =
          Math.random() * (window.innerHeight - yesButton.offsetHeight) + "px";
      });
      noButton.style.transform = "scale(1.3)";
    }
  });
}
