function generatePrompt(event) {
  event.preventDefault();

  new Typewriter("#prompt", {
    strings: "A tiny, magical shop hidden inside a hollowed-out tree stump.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let drawingFormElement = document.querySelector("#drawing-generator-form");
drawingFormElement.addEventListener("submit", generatePrompt);
