let mainRow = document.querySelector( ".hero-main" )
let searchInput = document.querySelector( ".the-search-input" )
let card = document.querySelector( ".the-search-input" )



let search = "";

let ENDPOINT

if ( search.length === 0 ) {
  ENDPOINT = "https://restcountries.com/v3.1/all"
} else {
  ENDPOINT = `https://restcountries.com/v3.1/name/${search}`
}

async function getCountries() {
  try {
    let data = await getData( "https://restcountries.com/v3.1/all" ) //https://ap-countries-api.vercel.app/all
    

   

    let dataSearch = data.filter( ( el ) => el.name.common.toLowerCase().includes( search ) )

    console.log(dataSearch);
    mainRow.innerHTML = ""
    dataSearch.map( ( el ) => {
      // console.log(el.name);
      mainRow.innerHTML += `
      <div class="hero-card">
        <div class="hero-card-image">
          <img
            class="flag-image"
            src="${el.flags.png}"
            alt="an img"
          />
        </div>
        <div class="hero-card-body">
          <h3>${el.name.common}</h3>
          <div class="population-div">
            <p class="population">Population: &nbsp;</p>
            <p class="population-count">${el.population}</p>
          </div>
          <div class="region-div">
            <p class="region">Region: &nbsp;</p>
            <p class="region-count">${el.region}</p>
          </div>
          <div class="capital-div">
            <p class="capital">Capital: &nbsp;</p>
            <p class="capital-count">${el.capital}</p>
          </div>
        </div>
      </div>
      `
    } )

  } catch ( err ) {
    alert( err )
  }
}

getCountries()

// search

searchInput.addEventListener( "keyup", function () {
  search = this.value
  console.log(search);
  getCountries()
} )

// 




