function asyncFunc1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            console.log("data")
            resolve("Success")
        }, 3000)
    })
}

console.log("Fetching data1...")
let p1 = asyncFunc1()
p1.then((resolve) => {
    console.log(resolve)            //Data2 is fetched after data1. This is called promise chaining.
    p2 = asyncFunc2()
    console.log("Fetching data2...")
    p2.then((resolve) => {
        console.log(resolve)
    })
})   

function asyncFunc2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            console.log("data")
            resolve("Success")
        }, 3000)
    })
}

// console.log("Fetching data2...")
// let p2 = asyncFunc2()
// p2.then((resolve) => {
//     console.log(resolve)
// }) 