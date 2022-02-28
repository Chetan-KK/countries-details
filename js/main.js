// let searchBox = document.getElementById(`searchBox`)
// searchBox.addEventListener(`input`, () => {
//     console.log(searchBox.value)
// })
let box = document.getElementById(`box`)

fetch("https://restcountries.com/v3.1/all", {
    "method": "GET"
}).then((Response) => Response.json())
    .then(response => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            let countryName = document.createElement(`h1`)
            countryName.innerText = (i + 1) + ") " + response[i].name.common;
            box.appendChild(countryName)
            // console.log(response[i].coatOfArms.png);
            let countryFlag = document.createElement(`img`)
            countryFlag.setAttribute(`src`, response[i].coatOfArms.svg)
            box.appendChild(countryFlag)
        }
    })
    .catch(err => {
        console.error(err);
    });