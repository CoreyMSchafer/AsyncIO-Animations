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
    mainLine6: document.getElementById("main-line-6"),
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
    <span class="line-2">task1 = asyncio.create_task(fetch_data(1))</span>
    <span class="line-3">task2 = asyncio.create_task(fetch_data(2))</span>
    <span class="line-4">result1 = await task1</span>
    <span class="line-5">print("Task 1 fully completed")</span>
    <span class="line-6">result2 = await task2</span>
    <span class="line-7">print("Task 2 fully completed")</span>
    <span class="line-8">return [result1, result2]</span></code></pre>`;

  // CARD - FETCH_DATA(1) COROUTINE
  const cardT1 = createCard("card-t1");
  cardT1.querySelector("h3").textContent = `fetch_data(1)`;
  setCardStatus(cardT1, "ready");

  cardT1.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def fetch_data(param):</span>
    <span class="line-2">print(f"Do something with {param}...")</span>
    <span class="line-3">time.sleep(param)</span>
    <span class="line-4">print(f"Done with {param}")</span>
    <span class="line-5">return f"Result of {param}"</span></code></pre>`;

  // CARD - FETCH_DATA(2) COROUTINE
  const cardT2 = createCard("card-t2");
  cardT2.querySelector("h3").textContent = `fetch_data(2)`;
  cardT2.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def fetch_data(param):</span>
    <span class="line-2">print(f"Do something with {param}...")</span>
    <span class="line-3">time.sleep(param)</span>
    <span class="line-4">print(f"Done with {param}")</span>
    <span class="line-5">return f"Result of {param}"</span></code></pre>`;

  // CARD - IO FOR FETCH_DATA(1)
  const cardBlocked1 = createCard("card-blocked", true);
  cardBlocked1.querySelector("h3").textContent = `Sleep: 1 second (blocking)`;
  cardBlocked1.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code>time.sleep() blocks the entire
event loop - no other tasks
can run during this time!</code></pre>`;

  // CARD - IO FOR FETCH_DATA(2)
  const cardBlocked2 = createCard("card-blocked", true);
  cardBlocked2.querySelector("h3").textContent = `Sleep: 2 seconds (blocking)`;
  cardBlocked2.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code>time.sleep() blocks the entire
event loop - no other tasks
can run during this time!</code></pre>`;

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
      elements.mainLine5.classList.add("highlight");
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
      addCard(elements.loopColumn, cardT1);
    },
    () => {
      cardMain.querySelector(".line-2").classList.remove("highlight");
      cardMain.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "ready");
      addCard(elements.loopColumn, cardT2);
    },
    () => {
      cardMain.querySelector(".line-3").classList.remove("highlight");
      cardMain.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
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
      // Show that the event loop is blocked
      setCardStatus(cardBlocked1, "IO");
      addCard(elements.ioColumn, cardBlocked1);
      // Task1 remains running (blocked), Task2 remains ready
    },
    () => {
      // Finally unblock - time.sleep(1) is done
      cardBlocked1.querySelector(".spinner").remove();
      setCardStatus(cardBlocked1, "complete");
    },
    () => {
      removeCard(elements.ioColumn, cardBlocked1);
      // setCardStatus(cardT1, "running");
      // Task2 remains ready (it never got to run)
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
      removeCard(elements.loopColumn, cardT1);
      setCardStatus(cardMain, "ready");
    },
    () => {
      // Task2 gets selected by event loop (it was ready and waiting)
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
      elements.outputLine3.innerHTML = `Do something with 2...`;
    },
    () => {
      cardT2.querySelector(".line-2").classList.remove("highlight");
      cardT2.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardBlocked2, "IO");
      addCard(elements.ioColumn, cardBlocked2);
      // Task2 remains running (blocked), no await to suspend
    },
    () => {
      // Finally unblock - time.sleep(2) is done
      cardBlocked2.querySelector(".spinner").remove();
      setCardStatus(cardBlocked2, "complete");
    },
    () => {
      removeCard(elements.ioColumn, cardBlocked2);
      // Task2 remains running (it was never suspended)
    },
    () => {
      cardT2.querySelector(".line-3").classList.remove("highlight");
      cardT2.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      elements.outputLine4.innerHTML = `Done with 2`;
    },
    () => {
      cardT2.querySelector(".line-4").classList.remove("highlight");
      cardT2.querySelector(".line-5").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "complete");
    },
    () => {
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
      cardMain.querySelector(".line-4").classList.remove("highlight");
      cardMain.querySelector(".line-5").classList.add("highlight");
    },
    () => {
      elements.outputLine5.innerHTML = `Task 1 fully completed`;
    },
    () => {
      cardMain.querySelector(".line-5").classList.remove("highlight");
      cardMain.querySelector(".line-6").classList.add("highlight");
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
      elements.mainLine5.classList.remove("highlight");
      elements.mainLine6.classList.add("highlight");
    },
    () => {
      elements.outputLine7.innerHTML = `['Result of 1', 'Result of 2']`;
    },
    () => {
      elements.mainLine6.classList.remove("highlight");
    },
  ];

  setupStepper(steps);
});
