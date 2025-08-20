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
    mainLine7: document.getElementById("main-line-7"),
    mainLine8: document.getElementById("main-line-8"),
    outputLine1: document.getElementById("output-line-1"),
    outputLine2: document.getElementById("output-line-2"),
    outputLine3: document.getElementById("output-line-3"),
    outputLine4: document.getElementById("output-line-4"),
    outputLine5: document.getElementById("output-line-5"),
    outputLine6: document.getElementById("output-line-6"),
    outputLine7: document.getElementById("output-line-7"),
    outputLine8: document.getElementById("output-line-8"),
    outputLine9: document.getElementById("output-line-9"),
    outputLine10: document.getElementById("output-line-10"),
    outputLine11: document.getElementById("output-line-11"),
    outputLine12: document.getElementById("output-line-12"),
    outputLine13: document.getElementById("output-line-13"),
  };

  // MAIN COROUTINE
  const cardMain = createCard("card-main");
  cardMain.querySelector("h3").textContent = "main()";
  cardMain.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">async def main():</span>
    <span class="line-2"># Run in Threads</span>
    <span class="line-3">task1 = asyncio.create_task(asyncio.to_thread(fetch_data, 1))</span>
    <span class="line-4">task2 = asyncio.create_task(asyncio.to_thread(fetch_data, 2))</span>
    <span class="line-5">result1 = await task1</span>
    <span class="line-6">print("Thread 1 fully completed")</span>
    <span class="line-7">result2 = await task2</span>
    <span class="line-8">print("Thread 2 fully completed")</span>

    <span class="line-9"># Run in Process Pool</span>
    <span class="line-10">loop = asyncio.get_running_loop()</span>
    <span class="line-11">with ProcessPoolExecutor() as executor:</span>
    <span class="line-12">    task1 = loop.run_in_executor(executor, fetch_data, 1)</span>
    <span class="line-13">    task2 = loop.run_in_executor(executor, fetch_data, 2)</span>
    <span class="line-14">    result1 = await task1</span>
    <span class="line-15">    print("Process 1 fully completed")</span>
    <span class="line-16">    result2 = await task2</span>
    <span class="line-17">    print("Process 2 fully completed")</span>

    <span class="line-18">return [result1, result2]</span></code></pre>`;

  // CARD - THREAD TASK 1
  const cardThreadTask1 = createCard("card-thread-task1");
  cardThreadTask1.querySelector("h3").textContent = `to_thread(fetch_data, 1)`;
  cardThreadTask1.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">Running in thread pool...</span></code></pre>`;

  // CARD - THREAD TASK 2
  const cardThreadTask2 = createCard("card-thread-task2");
  cardThreadTask2.querySelector("h3").textContent = `to_thread(fetch_data, 2)`;
  cardThreadTask2.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">Running in thread pool...</span></code></pre>`;

  // CARD - PROCESS TASK 1
  const cardProcessTask1 = createCard("card-process-task1");
  cardProcessTask1.querySelector(
    "h3"
  ).textContent = `run_in_executor(fetch_data, 1)`;
  cardProcessTask1.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">Running in process pool...</span></code></pre>`;

  // CARD - PROCESS TASK 2
  const cardProcessTask2 = createCard("card-process-task2");
  cardProcessTask2.querySelector(
    "h3"
  ).textContent = `run_in_executor(fetch_data, 2)`;
  cardProcessTask2.querySelector(".card-body").innerHTML = `
        <pre class="card-code-block">
<code><span class="line-1">Running in process pool...</span></code></pre>`;

  // CARD - BACKGROUND I/O FOR THREADS - fetch_data(1)
  const cardThreadIO1 = createCard("card-thread-io1", true);
  cardThreadIO1.querySelector("h3").textContent = `Thread: fetch_data(1)`;
  cardThreadIO1.querySelector(".card-body").remove();

  // CARD - BACKGROUND I/O FOR THREADS - fetch_data(2)
  const cardThreadIO2 = createCard("card-thread-io2", true);
  cardThreadIO2.querySelector("h3").textContent = `Thread: fetch_data(2)`;
  cardThreadIO2.querySelector(".card-body").remove();

  // CARD - BACKGROUND I/O FOR PROCESSES - fetch_data(1)
  const cardProcessIO1 = createCard("card-process-io1", true);
  cardProcessIO1.querySelector("h3").textContent = `Process: fetch_data(1)`;
  cardProcessIO1.querySelector(".card-body").remove();

  // CARD - BACKGROUND I/O FOR PROCESSES - fetch_data(2)
  const cardProcessIO2 = createCard("card-process-io2", true);
  cardProcessIO2.querySelector("h3").textContent = `Process: fetch_data(2)`;
  cardProcessIO2.querySelector(".card-body").remove();

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
      elements.mainLine5.classList.remove("highlight");
      elements.mainLine6.classList.add("highlight");
    },
    () => {
      elements.mainLine6.classList.remove("highlight");
      elements.mainLine7.classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "running");
      addCard(elements.loopColumn, cardMain);
      cardMain.querySelector(".line-1").classList.add("highlight");
    },
    // SECTION 1: Run in Threads
    () => {
      cardMain.querySelector(".line-1").classList.remove("highlight");
      cardMain.querySelector(".line-2").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-2").classList.remove("highlight");
      cardMain.querySelector(".line-3").classList.add("highlight");
    },
    () => {
      setCardStatus(cardThreadTask1, "ready");
      addCard(elements.loopColumn, cardThreadTask1);
    },
    () => {
      cardMain.querySelector(".line-3").classList.remove("highlight");
      cardMain.querySelector(".line-4").classList.add("highlight");
    },
    () => {
      setCardStatus(cardThreadTask2, "ready");
      addCard(elements.loopColumn, cardThreadTask2);
    },
    () => {
      cardMain.querySelector(".line-4").classList.remove("highlight");
      cardMain.querySelector(".line-5").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
    },
    () => {
      cardThreadTask1.classList.add("loop-status");
    },
    () => {
      cardThreadTask1.classList.remove("loop-status");
      setCardStatus(cardThreadTask1, "running");
      cardThreadTask1.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      setCardStatus(cardThreadIO1, "IO");
      addCard(elements.ioColumn, cardThreadIO1);
    },
    () => {
      setCardStatus(cardThreadTask1, "suspended");
    },
    () => {
      elements.outputLine1.innerHTML = `Do something with 1...`;
    },
    () => {
      cardThreadTask2.classList.add("loop-status");
    },
    () => {
      cardThreadTask2.classList.remove("loop-status");
      setCardStatus(cardThreadTask2, "running");
      cardThreadTask2.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      setCardStatus(cardThreadIO2, "IO");
      addCard(elements.ioColumn, cardThreadIO2);
    },
    () => {
      setCardStatus(cardThreadTask2, "suspended");
    },
    () => {
      elements.outputLine2.innerHTML = `Do something with 2...`;
    },
    () => {
      elements.outputLine3.innerHTML = `Done with 1`;
    },
    () => {
      cardThreadIO1.querySelector(".spinner").remove();
      setCardStatus(cardThreadIO1, "complete");
    },
    () => {
      setCardStatus(cardThreadTask1, "ready");
      removeCard(elements.ioColumn, cardThreadIO1);
    },
    () => {
      cardThreadTask1.classList.add("loop-status");
    },
    () => {
      cardThreadTask1.classList.remove("loop-status");
      setCardStatus(cardThreadTask1, "running");
    },
    () => {
      setCardStatus(cardThreadTask1, "complete");
    },
    () => {
      // Clear highlights before removing card
      cardThreadTask1.querySelector(".line-1").classList.remove("highlight");
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardThreadTask1);
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
      elements.outputLine4.innerHTML = `Thread 1 fully completed`;
    },
    () => {
      cardMain.querySelector(".line-6").classList.remove("highlight");
      cardMain.querySelector(".line-7").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
    },
    () => {
      elements.outputLine5.innerHTML = `Done with 2`;
    },
    () => {
      cardThreadIO2.querySelector(".spinner").remove();
      setCardStatus(cardThreadIO2, "complete");
    },
    () => {
      setCardStatus(cardThreadTask2, "ready");
      removeCard(elements.ioColumn, cardThreadIO2);
    },
    () => {
      cardThreadTask2.classList.add("loop-status");
    },
    () => {
      cardThreadTask2.classList.remove("loop-status");
      setCardStatus(cardThreadTask2, "running");
    },
    () => {
      setCardStatus(cardThreadTask2, "complete");
    },
    () => {
      // Clear highlights before removing card
      cardThreadTask2.querySelector(".line-1").classList.remove("highlight");
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardThreadTask2);
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-7").classList.remove("highlight");
      cardMain.querySelector(".line-8").classList.add("highlight");
    },
    () => {
      elements.outputLine6.innerHTML = `Thread 2 fully completed`;
    },
    // SECTION 2: Run in Process Pool
    () => {
      cardMain.querySelector(".line-8").classList.remove("highlight");
      cardMain.querySelector(".line-9").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-9").classList.remove("highlight");
      cardMain.querySelector(".line-10").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-10").classList.remove("highlight");
      cardMain.querySelector(".line-11").classList.add("highlight");
    },
    () => {
      cardMain.querySelector(".line-11").classList.remove("highlight");
      cardMain.querySelector(".line-12").classList.add("highlight");
    },
    () => {
      setCardStatus(cardProcessTask1, "ready");
      addCard(elements.loopColumn, cardProcessTask1);
    },
    () => {
      cardMain.querySelector(".line-12").classList.remove("highlight");
      cardMain.querySelector(".line-13").classList.add("highlight");
    },
    () => {
      setCardStatus(cardProcessTask2, "ready");
      addCard(elements.loopColumn, cardProcessTask2);
    },
    () => {
      cardMain.querySelector(".line-13").classList.remove("highlight");
      cardMain.querySelector(".line-14").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
    },
    () => {
      cardProcessTask1.classList.add("loop-status");
    },
    () => {
      cardProcessTask1.classList.remove("loop-status");
      setCardStatus(cardProcessTask1, "running");
      cardProcessTask1.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      setCardStatus(cardProcessIO1, "IO");
      addCard(elements.ioColumn, cardProcessIO1);
    },
    () => {
      setCardStatus(cardProcessTask1, "suspended");
    },
    () => {
      elements.outputLine7.innerHTML = `Do something with 1...`;
    },
    () => {
      cardProcessTask2.classList.add("loop-status");
    },
    () => {
      cardProcessTask2.classList.remove("loop-status");
      setCardStatus(cardProcessTask2, "running");
      cardProcessTask2.querySelector(".line-1").classList.add("highlight");
    },
    () => {
      setCardStatus(cardProcessIO2, "IO");
      addCard(elements.ioColumn, cardProcessIO2);
    },
    () => {
      setCardStatus(cardProcessTask2, "suspended");
    },
    () => {
      elements.outputLine8.innerHTML = `Do something with 2...`;
    },
    () => {
      elements.outputLine9.innerHTML = `Done with 1`;
    },
    () => {
      cardProcessIO1.querySelector(".spinner").remove();
      setCardStatus(cardProcessIO1, "complete");
    },
    () => {
      setCardStatus(cardProcessTask1, "ready");
      removeCard(elements.ioColumn, cardProcessIO1);
    },
    () => {
      cardProcessTask1.classList.add("loop-status");
    },
    () => {
      cardProcessTask1.classList.remove("loop-status");
      setCardStatus(cardProcessTask1, "running");
    },
    () => {
      setCardStatus(cardProcessTask1, "complete");
    },
    () => {
      // Clear highlights before removing card
      cardProcessTask1.querySelector(".line-1").classList.remove("highlight");
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardProcessTask1);
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
      elements.outputLine10.innerHTML = `Process 1 fully completed`;
    },
    () => {
      cardMain.querySelector(".line-15").classList.remove("highlight");
      cardMain.querySelector(".line-16").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "suspended");
    },
    () => {
      elements.outputLine11.innerHTML = `Done with 2`;
    },
    () => {
      cardProcessIO2.querySelector(".spinner").remove();
      setCardStatus(cardProcessIO2, "complete");
    },
    () => {
      setCardStatus(cardProcessTask2, "ready");
      removeCard(elements.ioColumn, cardProcessIO2);
    },
    () => {
      cardProcessTask2.classList.add("loop-status");
    },
    () => {
      cardProcessTask2.classList.remove("loop-status");
      setCardStatus(cardProcessTask2, "running");
    },
    () => {
      setCardStatus(cardProcessTask2, "complete");
    },
    () => {
      // Clear highlights before removing card
      cardProcessTask2.querySelector(".line-1").classList.remove("highlight");
      setCardStatus(cardMain, "ready");
      removeCard(elements.loopColumn, cardProcessTask2);
    },
    () => {
      cardMain.classList.add("loop-status");
    },
    () => {
      cardMain.classList.remove("loop-status");
      setCardStatus(cardMain, "running");
    },
    () => {
      cardMain.querySelector(".line-16").classList.remove("highlight");
      cardMain.querySelector(".line-17").classList.add("highlight");
    },
    () => {
      elements.outputLine12.innerHTML = `Process 2 fully completed`;
    },
    () => {
      cardMain.querySelector(".line-17").classList.remove("highlight");
      cardMain.querySelector(".line-18").classList.add("highlight");
    },
    () => {
      setCardStatus(cardMain, "complete");
    },
    () => {
      removeCard(elements.loopColumn, cardMain);
    },
    () => {
      elements.mainLine7.classList.remove("highlight");
      elements.mainLine8.classList.add("highlight");
    },
    () => {
      elements.outputLine13.innerHTML = `['Result of 1', 'Result of 2']`;
    },
    () => {
      elements.mainLine8.classList.remove("highlight");
    },
  ];

  setupStepper(steps);
});
