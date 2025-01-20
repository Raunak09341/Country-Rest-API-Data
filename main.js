let center = document.querySelector(".center")
let second = document.querySelector(".second")

function crate(table, key, value) {
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.innerHTML = key
    let td = document.createElement("td")

      if(key=='Flag'){
        let img= document.createElement('img')
        img.src=value
        td.appendChild(img)
      }
      else if(key=='Map'){
        let a = document.createElement("a")
        a.href=value
        a.innerHTML="Open Map"
        a.terget="_blank"
        td.appendChild(a)
      }
      else

    td.innerHTML = value
    tr.appendChild(th)
    tr.appendChild(td)
    table.appendChild(tr)
}

function getAPIData() {
    let input = document.getElementById("name")
    let name = input.value!==""?input.value:"Bharat"
    const request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/"+name)
    request.send()

    center.removeChild(second)
    second = document.createElement("div")
    second .classList.add("second")
    center.appendChild(second)

    request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText)
        let table = document.createElement("table")
        for (let item of data) {
            crate(table, "official Name", item.name.official)



            crate(table, "Official Name", item.name.official)
            crate(table, "Capital", item.capital)
            crate(table, "Flag", item.flags.svg)
            crate(table, "Population", item.population)
            crate(table, "Area", item.area)
            crate(table, "Region", item.region)
            crate(table, "Sub-Region", item.subregion)
            crate(table, "Continents", item.continents)
            crate(table, "Landlocked", item.landlocked)
            crate(table, "Independent", item.independent)
            crate(table, "Timezones", item.timezones)
            crate(table, "Borders", item.borders)
            crate(table, "Map", item.maps.googleMaps)
            second.appendChild(table)
        }
    })
}
getAPIData()