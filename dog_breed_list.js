const apiKey = import.meta.env.VITE_DOG_API;

const fetchPromise = fetch(
    "https://api.thedogapi.com/v1/breeds", {
      headers: {"x-api-key": apiKey},
    }
);


fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      const breedList = document.getElementById("breed-list");

      data.forEach((breed) => {
        const listItem = document.createElement("li");
        listItem.textContent = breed.name;
        breedList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error(`Could not get pet breeds: ${error}`);
    });