function displayPoem(response) {
  console.log("poem generated :)");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "fte5f4o35f8ba2b321d1c0ebb3adf4a1";
  let prompt = `Generate a poem about ${userPrompt.value}`;
  let context =
    "You are an AI poem generator that creates short, original, and expressive poems based on user input. Adapt tone, style, and structure to match the prompt, using vivid imagery and natural rhythm. Ensure each poem feels unique, emotionally engaging, and human-like. Your mission is to generate a 8 line poem and a heading using basic HTML structure. Don't show HTML and separate each line.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem..");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
