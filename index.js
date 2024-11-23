const reload = document.querySelector(".load");
const req = new XMLHttpRequest();
req.open("GET", "https://catfact.ninja/fact");
req.responseType = "json";

req.onload = () => {
  if (req.status === 200) {
    let fact = req.response;
    let cat = document.getElementById("cat");
    let factCard = document.createElement("div");
    factCard.classList.add("fact");

    factCard.textContent = fact.fact;
    cat.appendChild(factCard);
  } else {
    console.error("response undefined");
  }
};
req.send();
function reloadPage() {
  const reload = document.querySelector(".load");
  reload.textContent = "Loading...";
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}
reload.addEventListener("click", () => {
  reloadPage();
});
