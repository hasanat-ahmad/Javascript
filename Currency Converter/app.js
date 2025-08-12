let BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";//   /aud.json";

let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");

let fromCurr = document.querySelector(".from select")
let toCurr = document.querySelector(".to select")

for(let select of dropdowns){
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "PKR"){
            newOption.selected = "selected";
        }
        select.append(newOption)
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
} 

const exchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue === "" || amtValue < 1) {
        amount.innerText = 1;
        amount.value = 1;
    }
    let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()];
    let subRate = rate[toCurr.value.toLowerCase()];

    let cal = subRate * amtValue;

    let calMsg = document.querySelector(".msg");
    calMsg.innerHTML= `<b>${amtValue} ${fromCurr.value} = ${cal} ${toCurr.value}</b>`;
}

btn.addEventListener(("click"), (evt)=>{
    evt.preventDefault();
    exchangeRate();
});

window.addEventListener("load", () =>{
    exchangeRate();
})

