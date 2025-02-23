function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4803ot8c9fd9dff8badfdbb0cad06ef2";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include title to the poem. Sign the poem with 'sheCodes AI' inside a <strong> element";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
