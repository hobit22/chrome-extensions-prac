document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("myButton");
  myButton.addEventListener("click", () => {
    console.log("Button clicked!");
    alert("Button clicked!");
  });
});
