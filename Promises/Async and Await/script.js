async function getData(ID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting data", ID)
            resolve("Success")
        }, 2000);
    })
}

async function getAllData() {
    await getData(1)        //Await makes the remaining functions keep waiting. 
    await getData(2)
    await getData(3)
}

getAllData()