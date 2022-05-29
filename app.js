const url = "https://icanhazdadjoke.com/"

// select btn, result
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

// listen for click events
btn.addEventListener("click", () => {
    fetchDadJoke()
})

// create async function
const fetchDadJoke = async () => {
    // set result.textContent = joke
    // set result equal to - 'Loading...'
    result.textContent = "Loading..."
    try {
        // setup fetch
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "learning app",
            }
        })
        if (!response.ok) {
            throw new Error("error")
        }
        const data = await response.json()

        result.textContent = data.joke
        // try/catch block
    } catch (error) {
        console.log(error.message)
        // set result equal to - 'There was an error..'
        result.textContent = "There was an error..."
    }
}

fetchDadJoke()

// console.log('Dad Jokes Starter');
