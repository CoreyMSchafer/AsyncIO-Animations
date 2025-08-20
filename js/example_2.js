document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    loopColumn: document.getElementById("loop-column"),
    ioColumn: document.getElementById("io-column"),
    mainBlock: document.getElementById("main-block"),
    mainLine1: document.getElementById("main-line-1"),
    mainLine2: document.getElementById("main-line-2"),
    mainLine3: document.getElementById("main-line-3"),
    mainLine4: document.getElementById("main-line-4"),
    mainLine5: document.getElementById("main-line-5"),
    outputLine1: document.getElementById("output-line-1"),
    outputLine2: document.getElementById("output-line-2"),
    outputLine3: document.getElementById("output-line-3"),
    outputLine4: document.getElementById("output-line-4"),
    outputLine5: document.getElementById("output-line-5"),
    outputLine6: document.getElementById("output-line-6"),
    outputLine7: document.getElementById("output-line-7"),
  };

  // MAIN COROUTINE
  const cardMain = createCard("card-main");
  cardMain.querySelector("h3").textContent = "main()";
  cardMain.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def main():</span>
    <span class="line-2">task1 = fetch_data(1)  # Could be awaited directly</span>
    <span class="line-3">task2 = fetch_data(2)  # Could be awaited directly</span>
    <span class="line-4">result1 = await task1</span>
    <span class="line-5">print("Task 1 fully completed")</span>
    <span class="line-6">result2 = await task2</span>
    <span class="line-7">print("Task 2 fully completed")</span>
    <span class="line-8">return [result1, result2]</span></code></pre>`;

  // CARD - FETCH_DATA(1) COROUTINE
  const cardT1 = createCard("card-t1");
  cardT1.querySelector("h3").textContent = `fetch_data(1)`;

  cardT1.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def fetch_data(param):</span>
    <span class="line-2">print(f"Do something with {param}...")</span>
    <span class="line-3">await asyncio.sleep(param)</span>
    <span class="line-4">print(f"Done with {param}")</span>
    <span class="line-5">return f"Result of {param}"</span></code></pre>`;

  // CARD - FETCH_DATA(2) COROUTINE
  const cardT2 = createCard("card-t2");
  cardT2.querySelector("h3").textContent = `fetch_data(2)`;
  cardT2.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def fetch_data(param):</span>
    <span class="line-2">print(f"Do something with {param}...")</span>
    <span class="line-3">await asyncio.sleep(param)</span>
    <span class="line-4">print(f"Done with {param}")</span>
    <span class="line-5">return f"Result of {param}"</span></code></pre>`;

  // CARD - IO FOR FETCH_DATA(1)
  const cardIO1 = createCard("card-io1", true);
  cardIO1.querySelector("h3").textContent = `Timer: Wakes fetch_data(1)`;
  cardIO1.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(2)
  const cardIO2 = createCard("card-io2", true);
  cardIO2.querySelector("h3").textContent = `Timer: Wakes fetch_data(2)`;
  cardIO2.querySelector(".card-body").remove();

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
      setCardStatus(cardMain, "running");
      addCard(elements.loopColumn, cardMain);
      cardMain.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-1").classList.remove("highlight");
      cardMain.querySelector(".line-2").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-2").classList.remove("highlight");
      cardMain.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-3").classList.remove("highlight");
      cardMain.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
      setCardStatus(cardT1, "ready");
      addCard(elements.loopColumn, cardT1);
    },
    () => {
      cardT1.classList.add("loop-status");
    },
    () => {
      cardT1.classList.remove("loop-status");
      setCardStatus(cardT1, "running");
      cardT1.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      cardT1.querySelector(".line-1").classList.remove("highlight");
      cardT1.querySelector(".line-2").classList.add("highlight");
    },
    () => {
      elements.outputLine1.innerHTML = `Do something with 1...`;
    },
    () => {
      cardT1.querySelector(".line-2").classList.remove("highlight");
      cardT1.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardIO1, "IO");
      addCard(elements.ioColumn, cardIO1);
    },
    () => {
      setCardStatus(cardT1, "suspended");
    },
    () => {
      cardIO1.querySelector(".spinner").remove();
      setCardStatus(cardIO1, "complete");
    },
    () => {
      setCardStatus(cardT1, "ready");
      removeCard(elements.ioColumn, cardIO1);
    },
    () => {
      cardT1.classList.add("loop-status");
    },
    () => {
      cardT1.classList.remove("loop-status");
      setCardStatus(cardT1, "running");
    },
    () => {
      cardT1.querySelector(".line-3").classList.remove("highlight");
      cardT1.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      elements.outputLine2.innerHTML = `Done with 1`;
    },
    () => {
      cardT1.querySelector(".line-4").classList.remove("highlight");
      cardT1.querySelector(".line-5").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT1);
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-4").classList.remove("highlight");
      cardMain.querySelector(".line-5").classList.add("highlight");
    },
    () => {
      elements.outputLine3.innerHTML = `Task 1 fully completed`;
    },
    () => {
      cardMain.querySelector(".line-5").classList.remove("highlight");
      cardMain.querySelector(".line-6").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
      setCardStatus(cardT2, "ready");
      addCard(elements.loopColumn, cardT2);
    },
    () => {
      cardT2.classList.add("loop-status");
    },
    () => {
      cardT2.classList.remove("loop-status");
      setCardStatus(cardT2, "running");
      cardT2.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      cardT2.querySelector(".line-1").classList.remove("highlight");
      cardT2.querySelector(".line-2").classList.add("highlight");
    },
    () => {
      elements.outputLine4.innerHTML = `Do something with 2...`;
    },
    () => {
      cardT2.querySelector(".line-2").classList.remove("highlight");
      cardT2.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardIO2, "IO");
      addCard(elements.ioColumn, cardIO2);
    },
    () => {
      setCardStatus(cardT2, "suspended");
    },
    () => {
      cardIO2.querySelector(".spinner").remove();
      setCardStatus(cardIO2, "complete");
    },
    () => {
      setCardStatus(cardT2, "ready");
      removeCard(elements.ioColumn, cardIO2);
    },
    () => {
      cardT2.classList.add("loop-status");
    },
    () => {
      cardT2.classList.remove("loop-status");
      setCardStatus(cardT2, "running");
    },
    () => {
      cardT2.querySelector(".line-3").classList.remove("highlight");
      cardT2.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      elements.outputLine5.innerHTML = `Done with 2`;
    },
    () => {
      cardT2.querySelector(".line-4").classList.remove("highlight");
      cardT2.querySelector(".line-5").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT2);
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-6").classList.remove("highlight");
      cardMain.querySelector(".line-7").classList.add("highlight");
    },
    () => {
      elements.outputLine6.innerHTML = `Task 2 fully completed`;
    },
    () => {
      cardMain.querySelector(".line-7").classList.remove("highlight");
      cardMain.querySelector(".line-8").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "complete");
    },
    () => {
      removeCard(elements.loopColumn, cardMain);
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
