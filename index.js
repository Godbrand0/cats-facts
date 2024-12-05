const reload = document.querySelector(".load");
let cat = document.getElementById("cat");

function reloadPage() {
  cat.textContent = "";

  reload.textContent = "Loading...";
  reload.disabled = true;

  // Fetch a new fact using XMLHttpRequest
  const req = new XMLHttpRequest();
  req.open("GET", "https://catfact.ninja/fact");

  req.onload = () => {
    if (req.status === 200) {
      try {
        // Parse the JSON response
        const fact = JSON.parse(req.response);

        const factCard = document.createElement("div");
        factCard.classList.add("fact");
        factCard.textContent = fact.fact;

        cat.appendChild(factCard);

        // Reset button text
        reload.textContent = "Reload Fact";
        reload.disabled = false;
      } catch (error) {
        // Handle JSON parsing errors
        console.error("Error parsing JSON:", error);
        showError("Failed to parse response. Try again.");
      }
    } else {
      // Handle HTTP errors
      console.error("Failed to fetch fact, status:", req.status);
      showError("Failed to load fact. Try again.");
    }
  };

  req.send();
}

reload.textContent = "Reload Fact";
reload.disabled = false;
reload.addEventListener("click", reloadPage);

// const name = new XMLHttpRequest();
// name.open("POST", "https://api.restful-api.dev/objects");
// fetch("https://api.restful-api.dev/objects")
//   .then(response.json())
//   .then((result) => console.log(result));

// async function getFacts() {
//   result = await fetch("https://api.restful-api.dev/objects");
//   result = await result.json();
//   console.log(result);
// }
// getFacts();

// fetch("https://api.restful-api.dev/objects", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "content-type": "application",
//   },
// }).then((response) => response.json());
