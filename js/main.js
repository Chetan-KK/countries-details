let searchBox = document.getElementById(`searchBox`)
let countryBox = document.getElementById(`box`)

fetch("https://restcountries.com/v3.1/all", {
    "method": "GET"
}).then((Response) => Response.json())
    .then(response => {

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


            if (response[i].capital) {

                let countryCapital = document.createElement(`h4`)
                countryCapital.innerText = "Capital: " + response[i].capital[0];
                country.appendChild(countryCapital)
            }


            let countryMoreDetails = document.createElement(`div`)
            countryMoreDetails.setAttribute(`class`, `countryMoreDetails`)

            if (response[i].population) {

                let countryPopulation = document.createElement(`h4`)
                countryPopulation.innerText = "Population: " + response[i].population;
                countryMoreDetails.appendChild(countryPopulation)
            }

            if (response[i].region) {

                let countryregion = document.createElement(`h4`)
                countryregion.innerText = "Region: " + response[i].region;
                countryMoreDetails.appendChild(countryregion)
            }

            if (response[i].area) {

                let countryarea = document.createElement(`h4`)
                countryarea.innerHTML = "area: " + response[i].area + " KM<sup>2</sup>";
                countryMoreDetails.appendChild(countryarea)
            }

            if (response[i].languages) {

                let countrylanguages = document.createElement(`h4`)
                var allLanguages = "";
                // console.log(typeof(response[i].languages));


                for (let langs in response[i].languages) {
                    allLanguages += response[i].languages[langs] + ", ";
                }
                countrylanguages.innerHTML = allLanguages;


                countryMoreDetails.appendChild(countrylanguages)
            }


            country.appendChild(countryMoreDetails)
            countryBox.appendChild(country)
        }
    })
    .catch(err => {
        console.error(err);
    });



searchBox.addEventListener(`keyup`, () => {
    let country = document.querySelectorAll(`.country`)
    let filter = searchBox.value.toUpperCase();

    var namesForSearch = countryBox.getElementsByTagName(`h3`)

    var inner, txtValue;

    for (i = 0; i < namesForSearch.length; i++) {
        inner = namesForSearch[i]
        txtValue = inner.textContent || inner.innerText

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            country[i].style.display = "";
        }
        else {
            country[i].style.display = "none";

        }
    }

})
