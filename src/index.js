function displayPrompt(response) {
  console.log("poem generated");

  new Typewriter("#prompt", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePrompt(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "abdo3735t57dabf46f1435bfa9b430dd";
  let prompt = `Generate a short, creative drawing prompt about "${instructionsInput.value}"`;
  let context =
    "You are a creative art director. Your mission is to provide concise, inspiring drawing prompts. " +
    "Format: [Subject] + [Atmosphere/Action/Setting]. " +
    "Examples: 'A neon-lit cyberpunk cat,' 'A ghost drinking tea in a forest.' " +
    "Keep it under 15 words. Avoid flowery language; focus on visual impact.";
  let ApiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem...");
  console.log(`prompt is ${prompt}`);
  console.log(`context is ${context}`);

  axios.get(ApiURL).then(displayPrompt);
}

let drawingFormElement = document.querySelector("#drawing-generator-form");
drawingFormElement.addEventListener("submit", generatePrompt);
