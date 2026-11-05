
const button = document.getElementById("btn");
const title = document.getElementById("title");

button.addEventListener("click", function() {
    title.textContent = "Hello, Developer!";

    button.textContent = "Nice to meet you!";
});
