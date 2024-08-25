/** Write your code below */

let post = "";

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

const handleInput = () => {
  post = jsInput.value;
  jsDiv.textContent = post;
};

jsInput.oninput = handleInput;
