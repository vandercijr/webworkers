/* global self */
self.addEventListener("message", (e) => {
  console.log("Worker 2: Message received do browser");

  const longExecution = () => {
    let c;
    for (c = 0; c < parseInt(e.data[0]); c++) {}
    return c;
  };

  postMessage({ resultlong: "contando" });
  postMessage({ resultlong: "terminou de contar até " + longExecution() });
});
