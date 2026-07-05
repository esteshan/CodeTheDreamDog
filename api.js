const fetchPromise = fetch(
    "https://api.thedogapi.com/v1/breeds"
)

// State of the fetchPromise
console.log(fetchPromise)
// Let user know that data is being fetched
console.log("Fetching data...")

// Get response status
/*fetchPromise.then((response) => {
    console.log(`Received response ${response.status}`)
});*/


// Get response data as JSON
fetchPromise.then((response) => {
    const jsonPromise = response.json()

    jsonPromise.then((data) => {
        console.log(data)
    })
});