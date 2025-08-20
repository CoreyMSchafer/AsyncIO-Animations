// Utility function to create cards
function createCard(id, spinner = false) {
  const card = document.createElement("div");
  card.className = "card";
  card.id = id;

  let spinnerHTML = ""; // keep same behavior/variable as your current code
  if (spinner) {
    spinnerHTML = `<div class="spinner"></div>`;
  }

  card.innerHTML = `
        <div class="card-header">
            <h3></h3>${spinnerHTML}
            <span class="status"></span>
        </div>
        <div class="card-body"></div>
    `;

  return card;
}

function setCardStatus(card, status) {
  if (card) {
    card.classList.remove(
      "ready-status",
      "running-status",
      "suspended-status",
      "complete-status",
      "IO-status"
    );
    card.classList.add(`${status}-status`);
    card.querySelector(".status").textContent =
      status.charAt(0).toUpperCase() + status.slice(1);
  }
}

// Adding a card with animation
function addCard(parent, card) {
  card.classList.add("card-entering");
  parent.appendChild(card);

  // Wait for animation to finish before actually removing
  card.addEventListener(
    "animationend",
    () => {
      card.classList.remove("card-entering");
    },
    { once: true }
  );
}

// Removing a card with animation
function removeCard(parent, card) {
  card.classList.add("card-exiting");

  // Wait for animation to finish before actually removing
  card.addEventListener(
    "animationend",
    () => {
      parent.removeChild(card);
      card.classList.remove("card-exiting");
    },
    { once: true }
  );
}

function setupStepper(steps) {
  let currentStep = 0;

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      if (currentStep < steps.length) {
        steps[currentStep]();
        currentStep++;
      } else {
        console.log("No more steps");
      }
    }
  });
}
