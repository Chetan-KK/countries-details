let searchBox = document.getElementById(`searchBox`)
let countryBox = document.getElementById(`box`)

fetch("https://restcountries.com/v3.1/all", {
    "method": "GET"
}).then((Response) => Response.json())
    .then(response => {
        console.log(response[233]);
        for (let i = 0; i < response.length; i++) {
            let country = document.createElement(`div`)
            country.setAttribute(`class`, `country`)
            let countryName = document.createElement(`h3`)
            countryName.innerText = (i + 1) + ") " + response[i].name.common;
            country.appendChild(countryName)
            if (response[i].coatOfArms.svg) {
                let countryFlag = document.createElement(`img`)
                countryFlag.setAttribute(`src`, response[i].coatOfArms.svg)
                countryFlag.setAttribute(`class`, `countryFlag`)
                countryName.appendChild(countryFlag)
            }

            // console.log(response[233].capital[0]);

            if (response[i].capital) {

                let countryCapital = document.createElement(`h4`)
                countryCapital.innerText = "Capital: " + response[i].capital[0];
                country.appendChild(countryCapital)
            }

            countryBox.appendChild(country)
        }
    })
    .catch(err => {
        console.error(err);
    });



searchBox.addEventListener(`input`, () => {
    console.log(searchBox.value)
})