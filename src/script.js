function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "`blah blah blah...`",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
