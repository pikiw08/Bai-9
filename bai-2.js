function fetchPokemon() {
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("name").innerText = data.name;
      document.getElementById("type").innerText = data.types
        .map((typeInfo) => typeInfo.type.name)
        .join(", ");
      document.getElementById("height").innerText = data.height;
      document.getElementById("weight").innerText = data.weight;
      document.getElementById("pokemonImage").src = data.sprites.front_default;

      fetch(data.species.url)
        .then((response) => response.json())
        .then((speciesData) => {
          const bio = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          );
          document.getElementById("bio").innerText = bio
            ? bio.flavor_text
            : "No bio available";
        });
    })
    .catch((error) => {
      document.getElementById("name").innerText = "--";
      document.getElementById("type").innerText = "--";
      document.getElementById("height").innerText = "--";
      document.getElementById("weight").innerText = "--";
      document.getElementById("bio").innerText = "--";
      document.getElementById("pokemonImage").src = "";
      alert("Pokemon not found!");
    });
}
