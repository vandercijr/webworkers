/* global self */
self.addEventListener("message", (e) => {
  console.log("Worker: Message received do browser");

  const multiply = (a, b) => a * b;

  const url = "http://localhost:5000/file.json"; //A local page

  const request = (url, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.response);
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  };
  postMessage({ resultmultiply: multiply(e.data[0], e.data[1]) });

  request(url, (response) => {
    postMessage({ resultajax: JSON.parse(response) });
  });

  postMessage({ resultlong: "rodando algoritmo demorado" });
});
