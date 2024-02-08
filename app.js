const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Button event listener
let button = document.querySelector(".btn");
let name = document.querySelector("")

button.addEventListener("click", async () => {
    let inpWord = document.getElementById("inp-bar").value;
    console.log(inpWord);

    // Call the word function with the input value
    await word(inpWord);
});

// Function to fetch data from the API
async function word(inpWord) {
    try {
        let res = await axios.get(url + inpWord);
        console.log(res.data); // Log the API response data
    }
     catch (err) {
        console.log("Error ", err);
        return "Text not found";
    }
}
