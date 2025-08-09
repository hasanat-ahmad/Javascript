function asyncFunc() {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            console.log("data")
            resolve("Success")
        }, 3000)
    })
}

console.log("Fetching data...")
let p = asyncFunc()
p.then((resolve) => {
    console.log(resolve)
})   