const counterDisplay = document.querySelector("h3");

let counter = 0;

const bubleMaker = () => {
  const bubble = document.createElement("span");

  bubble.classList.add("bubble");
  //   Lier l'élément avec le CSS

  document.body.appendChild(bubble);
  // permet d'injecter le "span" partout sur le document

  const size = Math.random() * 200 + 100 + "px";
  // permet de générer la taille du

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  // C'est une terner qui remplace les condition "if"

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubleMaker, 1000);
