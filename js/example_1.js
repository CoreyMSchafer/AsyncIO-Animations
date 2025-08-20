document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    ioColumn: document.getElementById("io-column"),
    mainLine1: document.getElementById("main-line-1"),
    mainLine2: document.getElementById("main-line-2"),
    mainLine3: document.getElementById("main-line-3"),
    mainLine4: document.getElementById("main-line-4"),
    mainLine5: document.getElementById("main-line-5"),
    mainInner1: document.getElementById("main-inner-1"),
    mainInner2: document.getElementById("main-inner-2"),
    mainInner3: document.getElementById("main-inner-3"),
    mainInner4: document.getElementById("main-inner-4"),
    mainInner5: document.getElementById("main-inner-5"),
    fetchLine1: document.getElementById("fetch-line-1"),
    fetchLine2: document.getElementById("fetch-line-2"),
    fetchLine3: document.getElementById("fetch-line-3"),
    fetchLine4: document.getElementById("fetch-line-4"),
    outputLine1: document.getElementById("output-line-1"),
    outputLine2: document.getElementById("output-line-2"),
    outputLine3: document.getElementById("output-line-3"),
    outputLine4: document.getElementById("output-line-4"),
    outputLine5: document.getElementById("output-line-5"),
    outputLine6: document.getElementById("output-line-6"),
    outputLine7: document.getElementById("output-line-7"),
  };

  // CARD - IO FOR FETCH_DATA(1)
  const cardSleep1 = createCard("card-sleep1", true);
  cardSleep1.querySelector("h3").textContent = "Sleep: 1 second (blocking)";
  cardSleep1.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(2)
  const cardSleep2 = createCard("card-sleep2", true);
  cardSleep2.querySelector("h3").textContent = "Sleep: 2 seconds (blocking)";
  cardSleep2.querySelector(".card-body").remove();

  const steps = [
    () => {
      elements.mainLine1.classList.add("highlight");
    },
    () => {
      elements.mainLine1.classList.remove("highlight");
      elements.mainLine2.classList.add("highlight");
    },
    () => {
      elements.mainLine2.classList.remove("highlight");
      elements.mainLine3.classList.add("highlight");
    },
    () => {
      elements.mainLine3.classList.remove("highlight");
      elements.mainLine4.classList.add("highlight");
    },
    () => {
      elements.mainLine4.classList.remove("highlight");
      elements.mainLine4.classList.add("highlight-inactive");
      elements.mainLine3.classList.add("highlight");
    },
    () => {
      elements.mainLine3.classList.remove("highlight");
      elements.mainInner1.classList.add("highlight");
    },
    () => {
      elements.mainInner1.classList.remove("highlight");
      elements.mainInner1.classList.add("highlight-inactive");
      elements.mainLine2.classList.add("highlight");
    },
    () => {
      elements.mainLine2.classList.remove("highlight");
      elements.fetchLine1.classList.add("highlight");
    },
    () => {
      elements.outputLine1.innerHTML = `Do something with 1...`;
    },
    () => {
      elements.fetchLine1.classList.remove("highlight");
      elements.fetchLine2.classList.add("highlight");
    },
    () => {
      setCardStatus(cardSleep1, "IO");
      addCard(elements.ioColumn, cardSleep1);
    },
    () => {
      cardSleep1.querySelector(".spinner").remove();
      setCardStatus(cardSleep1, "complete");
    },
    () => {
      removeCard(elements.ioColumn, cardSleep1);
    },
    () => {
      elements.fetchLine2.classList.remove("highlight");
      elements.fetchLine3.classList.add("highlight");
    },
    () => {
      elements.outputLine2.innerHTML = `Done with 1`;
    },
    () => {
      elements.fetchLine3.classList.remove("highlight");
      elements.fetchLine4.classList.add("highlight");
    },
    () => {
      elements.fetchLine4.classList.remove("highlight");
      elements.mainInner1.classList.remove("highlight-inactive");
      elements.mainInner1.classList.add("highlight");
    },
    () => {
      elements.mainInner1.classList.remove("highlight");
      elements.mainInner2.classList.add("highlight");
    },
    () => {
      elements.outputLine3.innerHTML = `Fetch 1 fully completed`;
    },
    () => {
      elements.mainInner2.classList.remove("highlight");
      elements.mainInner3.classList.add("highlight");
    },
    () => {
      elements.mainInner3.classList.remove("highlight");
      elements.mainInner3.classList.add("highlight-inactive");
      elements.mainLine2.classList.add("highlight");
    },
    () => {
      elements.mainLine2.classList.remove("highlight");
      elements.fetchLine1.classList.add("highlight");
    },
    () => {
      elements.outputLine4.innerHTML = `Do something with 2...`;
    },
    () => {
      elements.fetchLine1.classList.remove("highlight");
      elements.fetchLine2.classList.add("highlight");
    },
    () => {
      setCardStatus(cardSleep2, "IO");
      addCard(elements.ioColumn, cardSleep2);
    },
    () => {
      cardSleep2.querySelector(".spinner").remove();
      setCardStatus(cardSleep2, "complete");
    },
    () => {
      removeCard(elements.ioColumn, cardSleep2);
    },
    () => {
      elements.fetchLine2.classList.remove("highlight");
      elements.fetchLine3.classList.add("highlight");
    },
    () => {
      elements.outputLine5.innerHTML = `Done with 2`;
    },
    () => {
      elements.fetchLine3.classList.remove("highlight");
      elements.fetchLine4.classList.add("highlight");
    },
    () => {
      elements.fetchLine4.classList.remove("highlight");
      elements.mainInner3.classList.remove("highlight-inactive");
      elements.mainInner3.classList.add("highlight");
    },
    () => {
      elements.mainInner3.classList.remove("highlight");
      elements.mainInner4.classList.add("highlight");
    },
    () => {
      elements.outputLine6.innerHTML = `Fetch 2 fully completed`;
    },
    () => {
      elements.mainInner4.classList.remove("highlight");
      elements.mainInner5.classList.add("highlight");
    },
    () => {
      elements.mainInner5.classList.remove("highlight");
      elements.mainLine4.classList.remove("highlight-inactive");
      elements.mainLine4.classList.add("highlight");
    },
    () => {
      elements.mainLine4.classList.remove("highlight");
      elements.mainLine5.classList.add("highlight");
    },
    () => {
      elements.outputLine7.innerHTML = `['Result of 1', 'Result of 2']`;
    },
    () => {
      elements.mainLine5.classList.remove("highlight");
    },
  ];

  setupStepper(steps);
});
