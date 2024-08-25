/** Write your code below */

let posts = [];
let post;

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
jsDiv.appendChild(submitButton);

const handleInput = () => {
  post = jsInput.value;
};

const dataToView = () => {
  if (post === undefined) {
    jsInput.value = "What's on your mind";
  }

  if (posts.length > 0) {
    const postList = document.querySelectorAll(".post");
    postList.forEach((post) => post.remove());
  }

  posts.forEach((postContent) => {
    const postDiv = document.createElement("div");
    postDiv.textContent = postContent;
    postDiv.classList.add("post");
    jsDiv.appendChild(postDiv);
  });
};

const createPost = () => {
  if (post !== "") {
    posts.push(post);
    // reset
    post = "";
    jsInput.value = "";
    dataToView();
  }
};

jsInput.oninput = handleInput;
submitButton.onclick = createPost;

dataToView();
// setInterval(dataToView, 15);
