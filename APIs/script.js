const URL = "https://catfact.ninja/breeds?limit=1"

const getFacts = async () => {
    console.log("Getting facts")
    let response = await fetch(URL)
    console.log(response)
} 
getFacts()