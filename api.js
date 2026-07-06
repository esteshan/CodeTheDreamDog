const apiKey = import.meta.env.VITE_DOG_API;

const fetchPromise = fetch(
    "https://api.thedogapi.com/v1/breeds", {
      headers: { "x-api-key": apiKey },
    }
);

// State of the fetchPromise
console.log(fetchPromise);
// Let user know that data is being fetched
console.log("Fetching data...");

fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get pet breeds: ${error}`);
    });