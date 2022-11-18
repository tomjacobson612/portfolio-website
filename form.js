let main = document.querySelector("main");
let form = document.querySelector("form");
form.style.color = "#121212";

form.addEventListener("submit", (event) => {
  form.remove();
  let submitted = document.createElement("p");
  submitted.textContent = `Thank you for your submission!`;
  let line2 = document.createElement("p");
  line2.textContent = `You will be redirected shortly.`;
  submitted.append(line2);
  submitted.style.color = "#fbfaf5";
  submitted.style.textAlign = "center";
  submitted.style.fontSize = "26px";
  submitted.style.margin = "3em";
  main.append(submitted);

  url = document.createElement("a");
  url.href = "index.html";
  setTimeout(() => {
    window.location.href = url;
  }, 2000);
});

form.addEventListener("reset", (event) => {
  if (!confirm("Are you sure?")) {
    event.preventDefault();
  }
});

let recipient = document.querySelector(".recipient");
let contact = document.querySelector(".contact-info");
contact.style.display = "none";

recipient.addEventListener("click", (event) => {
  if (contact.style.display === "none") {
    contact.style.display = "block";
  } else {
    contact.style.display = "none";
  }
});
