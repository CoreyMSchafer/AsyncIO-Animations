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
    mainLineComment: document.getElementById("main-line-comment"),
    outputLine1: document.getElementById("output-line-1"),
    outputLine2: document.getElementById("output-line-2"),
    outputLine3: document.getElementById("output-line-3"),
    outputLine4: document.getElementById("output-line-4"),
    outputLine5: document.getElementById("output-line-5"),
  };

  // MAIN COROUTINE
  const cardMain = createCard("card-main");
  cardMain.querySelector("h3").textContent = "main()";
  cardMain.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def main():</span>
    <span class="line-2"># Create Tasks Manually</span>
    <span class="line-3">task1 = asyncio.create_task(fetch_data(1))</span>
    <span class="line-4">task2 = asyncio.create_task(fetch_data(2))</span>
    <span class="line-5">result1 = await task1</span>
    <span class="line-6">result2 = await task2</span>
    <span class="line-7">print(f"Task 1 and 2 awaited results: {[result1, result2]}")</span>

    <span class="line-8"># Gather Coroutines</span>
    <span class="line-9">coroutines = [fetch_data(i) for i in range(1, 3)]</span>
    <span class="line-10">results = await asyncio.gather(*coroutines, return_exceptions=True)</span>
    <span class="line-11">print(f"Coroutine Results: {results}")</span>

    <span class="line-12"># Gather Tasks</span>
    <span class="line-13">tasks = [asyncio.create_task(fetch_data(i)) for i in range(1, 3)]</span>
    <span class="line-14">results = await asyncio.gather(*tasks)</span>
    <span class="line-15">print(f"Task Results: {results}")</span>

    <span class="line-16"># Task Group</span>
    <span class="line-17">async with asyncio.TaskGroup() as tg:</span>
    <span class="line-18">    results = [tg.create_task(fetch_data(i)) for i in range(1, 3)]</span>
    <span class="line-19">    # All tasks are awaited when the context manager exits.</span>
    <span class="line-20">print(f"Task Group Results: {[result.result() for result in results]}")</span>

    <span class="line-21">return "Main Coroutine Done"</span></code></pre>`;

  // CARD - FETCH_DATA(1) COROUTINE
  const cardT1 = createCard("card-t1");
  cardT1.querySelector("h3").textContent = `fetch_data(1)`;

  cardT1.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def fetch_data(param):</span>
    <span class="line-2">await asyncio.sleep(param)</span>
    <span class="line-3">return f"Result of {param}"</span></code></pre>`;

  // CARD - FETCH_DATA(2) COROUTINE
  const cardT2 = createCard("card-t2");
  cardT2.querySelector("h3").textContent = `fetch_data(2)`;
  cardT2.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def fetch_data(param):</span>
    <span class="line-2">await asyncio.sleep(param)</span>
    <span class="line-3">return f"Result of {param}"</span></code></pre>`;

  // CARD - IO FOR FETCH_DATA(1) - Section 1
  const cardIO1a = createCard("card-io1a", true);
  cardIO1a.querySelector("h3").textContent = `Timer: Wakes fetch_data(1)`;
  cardIO1a.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(2) - Section 1
  const cardIO2a = createCard("card-io2a", true);
  cardIO2a.querySelector("h3").textContent = `Timer: Wakes fetch_data(2)`;
  cardIO2a.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(1) - Section 2
  const cardIO1b = createCard("card-io1b", true);
  cardIO1b.querySelector("h3").textContent = `Timer: Wakes fetch_data(1)`;
  cardIO1b.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(2) - Section 2
  const cardIO2b = createCard("card-io2b", true);
  cardIO2b.querySelector("h3").textContent = `Timer: Wakes fetch_data(2)`;
  cardIO2b.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(1) - Section 3
  const cardIO1c = createCard("card-io1c", true);
  cardIO1c.querySelector("h3").textContent = `Timer: Wakes fetch_data(1)`;
  cardIO1c.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(2) - Section 3
  const cardIO2c = createCard("card-io2c", true);
  cardIO2c.querySelector("h3").textContent = `Timer: Wakes fetch_data(2)`;
  cardIO2c.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(1) - Section 4
  const cardIO1d = createCard("card-io1d", true);
  cardIO1d.querySelector("h3").textContent = `Timer: Wakes fetch_data(1)`;
  cardIO1d.querySelector(".card-body").remove();

  // CARD - IO FOR FETCH_DATA(2) - Section 4
  const cardIO2d = createCard("card-io2d", true);
  cardIO2d.querySelector("h3").textContent = `Timer: Wakes fetch_data(2)`;
  cardIO2d.querySelector(".card-body").remove();

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
    // SECTION 1: Create Tasks Manually
    () => {
      cardMain.querySelector(".line-1").classList.remove("highlight");
      cardMain.querySelector(".line-2").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-2").classList.remove("highlight");
      cardMain.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "ready");
      addCard(elements.loopColumn, cardT1);
    },
    () => {
      cardMain.querySelector(".line-3").classList.remove("highlight");
      cardMain.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "ready");
      addCard(elements.loopColumn, cardT2);
    },
    () => {
      cardMain.querySelector(".line-4").classList.remove("highlight");
      cardMain.querySelector(".line-5").classList.add("highlight");
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
      setCardStatus(cardIO1a, "IO");
      addCard(elements.ioColumn, cardIO1a);
    },
    () => {
      setCardStatus(cardT1, "suspended");
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
      setCardStatus(cardIO2a, "IO");
      addCard(elements.ioColumn, cardIO2a);
    },
    () => {
      setCardStatus(cardT2, "suspended");
    },
    () => {
      cardIO1a.querySelector(".spinner").remove();
      setCardStatus(cardIO1a, "complete");
    },
    () => {
      setCardStatus(cardT1, "ready");
      removeCard(elements.ioColumn, cardIO1a);
    },
    () => {
      cardT1.classList.add("loop-status");
    },
    () => {
      cardT1.classList.remove("loop-status");
      setCardStatus(cardT1, "running");
    },
    () => {
      cardT1.querySelector(".line-2").classList.remove("highlight");
      cardT1.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT1);
      cardT1.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-5").classList.remove("highlight");
      cardMain.querySelector(".line-6").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
    },
    () => {
      cardIO2a.querySelector(".spinner").remove();
      setCardStatus(cardIO2a, "complete");
    },
    () => {
      setCardStatus(cardT2, "ready");
      removeCard(elements.ioColumn, cardIO2a);
    },
    () => {
      cardT2.classList.add("loop-status");
    },
    () => {
      cardT2.classList.remove("loop-status");
      setCardStatus(cardT2, "running");
    },
    () => {
      cardT2.querySelector(".line-2").classList.remove("highlight");
      cardT2.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT2);
      cardT2.querySelector(".line-3").classList.remove("highlight");
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
      elements.outputLine1.innerHTML = `Task 1 and 2 awaited results: ['Result of 1', 'Result of 2']`;
    },
    // SECTION 2: Gather Coroutines
    () => {
      cardMain.querySelector(".line-7").classList.remove("highlight");
      cardMain.querySelector(".line-8").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-8").classList.remove("highlight");
      cardMain.querySelector(".line-9").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-9").classList.remove("highlight");
      cardMain.querySelector(".line-10").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
      setCardStatus(cardT1, "ready");
      setCardStatus(cardT2, "ready");
      addCard(elements.loopColumn, cardT1);
      addCard(elements.loopColumn, cardT2);
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
      setCardStatus(cardIO1b, "IO");
      addCard(elements.ioColumn, cardIO1b);
    },
    () => {
      setCardStatus(cardT1, "suspended");
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
      setCardStatus(cardIO2b, "IO");
      addCard(elements.ioColumn, cardIO2b);
    },
    () => {
      setCardStatus(cardT2, "suspended");
    },
    () => {
      cardIO1b.querySelector(".spinner").remove();
      setCardStatus(cardIO1b, "complete");
    },
    () => {
      setCardStatus(cardT1, "ready");
      removeCard(elements.ioColumn, cardIO1b);
    },
    () => {
      cardT1.classList.add("loop-status");
    },
    () => {
      cardT1.classList.remove("loop-status");
      setCardStatus(cardT1, "running");
    },
    () => {
      cardT1.querySelector(".line-2").classList.remove("highlight");
      cardT1.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "complete");
    },
    () => {
      removeCard(elements.loopColumn, cardT1);
      cardT1.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardIO2b.querySelector(".spinner").remove();
      setCardStatus(cardIO2b, "complete");
    },
    () => {
      setCardStatus(cardT2, "ready");
      removeCard(elements.ioColumn, cardIO2b);
    },
    () => {
      cardT2.classList.add("loop-status");
    },
    () => {
      cardT2.classList.remove("loop-status");
      setCardStatus(cardT2, "running");
    },
    () => {
      cardT2.querySelector(".line-2").classList.remove("highlight");
      cardT2.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT2);
      cardT2.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-10").classList.remove("highlight");
      cardMain.querySelector(".line-11").classList.add("highlight");
    },
    () => {
      elements.outputLine2.innerHTML = `Coroutine Results: ['Result of 1', 'Result of 2']`;
    },
    // SECTION 3: Gather Tasks
    () => {
      cardMain.querySelector(".line-11").classList.remove("highlight");
      cardMain.querySelector(".line-12").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-12").classList.remove("highlight");
      cardMain.querySelector(".line-13").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "ready");
      setCardStatus(cardT2, "ready");
      addCard(elements.loopColumn, cardT1);
      addCard(elements.loopColumn, cardT2);
    },
    () => {
      cardMain.querySelector(".line-13").classList.remove("highlight");
      cardMain.querySelector(".line-14").classList.add("highlight");
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
      setCardStatus(cardIO1c, "IO");
      addCard(elements.ioColumn, cardIO1c);
    },
    () => {
      setCardStatus(cardT1, "suspended");
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
      setCardStatus(cardIO2c, "IO");
      addCard(elements.ioColumn, cardIO2c);
    },
    () => {
      setCardStatus(cardT2, "suspended");
    },
    () => {
      cardIO1c.querySelector(".spinner").remove();
      setCardStatus(cardIO1c, "complete");
    },
    () => {
      setCardStatus(cardT1, "ready");
      removeCard(elements.ioColumn, cardIO1c);
    },
    () => {
      cardT1.classList.add("loop-status");
    },
    () => {
      cardT1.classList.remove("loop-status");
      setCardStatus(cardT1, "running");
    },
    () => {
      cardT1.querySelector(".line-2").classList.remove("highlight");
      cardT1.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "complete");
    },
    () => {
      removeCard(elements.loopColumn, cardT1);
      cardT1.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardIO2c.querySelector(".spinner").remove();
      setCardStatus(cardIO2c, "complete");
    },
    () => {
      setCardStatus(cardT2, "ready");
      removeCard(elements.ioColumn, cardIO2c);
    },
    () => {
      cardT2.classList.add("loop-status");
    },
    () => {
      cardT2.classList.remove("loop-status");
      setCardStatus(cardT2, "running");
    },
    () => {
      cardT2.querySelector(".line-2").classList.remove("highlight");
      cardT2.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT2);
      cardT2.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-14").classList.remove("highlight");
      cardMain.querySelector(".line-15").classList.add("highlight");
    },
    () => {
      elements.outputLine3.innerHTML = `Task Results: ['Result of 1', 'Result of 2']`;
    },
    // SECTION 4: Task Group
    () => {
      cardMain.querySelector(".line-15").classList.remove("highlight");
      cardMain.querySelector(".line-16").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-16").classList.remove("highlight");
      cardMain.querySelector(".line-17").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-17").classList.remove("highlight");
      cardMain.querySelector(".line-18").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "ready");
      setCardStatus(cardT2, "ready");
      addCard(elements.loopColumn, cardT1);
      addCard(elements.loopColumn, cardT2);
    },
    () => {
      cardMain.querySelector(".line-18").classList.remove("highlight");
      cardMain.querySelector(".line-19").classList.add("highlight");
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
      setCardStatus(cardIO1d, "IO");
      addCard(elements.ioColumn, cardIO1d);
    },
    () => {
      setCardStatus(cardT1, "suspended");
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
      setCardStatus(cardIO2d, "IO");
      addCard(elements.ioColumn, cardIO2d);
    },
    () => {
      setCardStatus(cardT2, "suspended");
    },
    () => {
      cardIO1d.querySelector(".spinner").remove();
      setCardStatus(cardIO1d, "complete");
    },
    () => {
      setCardStatus(cardT1, "ready");
      removeCard(elements.ioColumn, cardIO1d);
    },
    () => {
      cardT1.classList.add("loop-status");
    },
    () => {
      cardT1.classList.remove("loop-status");
      setCardStatus(cardT1, "running");
    },
    () => {
      cardT1.querySelector(".line-2").classList.remove("highlight");
      cardT1.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT1, "complete");
    },
    () => {
      removeCard(elements.loopColumn, cardT1);
      cardT1.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardIO2d.querySelector(".spinner").remove();
      setCardStatus(cardIO2d, "complete");
    },
    () => {
      setCardStatus(cardT2, "ready");
      removeCard(elements.ioColumn, cardIO2d);
    },
    () => {
      cardT2.classList.add("loop-status");
    },
    () => {
      cardT2.classList.remove("loop-status");
      setCardStatus(cardT2, "running");
    },
    () => {
      cardT2.querySelector(".line-2").classList.remove("highlight");
      cardT2.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardT2, "complete");
    },
    () => {
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardT2);
      cardT2.querySelector(".line-3").classList.remove("highlight");
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-19").classList.remove("highlight");
      cardMain.querySelector(".line-20").classList.add("highlight");
    },
    () => {
      elements.outputLine4.innerHTML = `Task Group Results: ['Result of 1', 'Result of 2']`;
    },
    () => {
      cardMain.querySelector(".line-20").classList.remove("highlight");
      cardMain.querySelector(".line-21").classList.add("highlight");
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
      elements.outputLine5.innerHTML = `Main Coroutine Done`;
    },
    () => {
      elements.mainLine5.classList.remove("highlight");
    },
  ];

  setupStepper(steps);
});
