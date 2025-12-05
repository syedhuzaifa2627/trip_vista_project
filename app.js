
function Destinations(name, continent, price, weather, img, desc) {
    this.name = name
    this.continent = continent
    this.price = price
    this.weather = weather
    this.img = img
    this.desc = desc
}

let d1 = new Destinations(
    "Thailand", "Asia", 4000, "Warm",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    "Street food, islands and affordable travel."
)

let d2 = new Destinations(
    "Paris", "Europe", 8000, "Cold",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    "City of love, art, culture and history."
)

let d3 = new Destinations(
    "Bali", "Asia", 3000, "Warm",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "Beautiful beaches, temples and paradise."
)
let d4 = new Destinations(
    "Switzerland", "Europe", 12000, "Cold",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "Snowy mountains and breathtaking views."
)
let d5 = new Destinations(
    "Dubai", "Asia", 3000, "Warm",
    "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba",
    "Luxury, skyscrapers and desert fun."
)
let d6 = new Destinations(
    "Japan", "Asia", 7000, "Cold",
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    "A mix of tradition, futuristic cities and beautiful nature."
)

let d7 = new Destinations(
    "New York", "North America", 9000, "Cold",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "Iconic landmarks, skyscrapers and diverse culture."
)

let d8 = new Destinations(
    "Hawaii", "North America", 11000, "Warm",
    "https://images.unsplash.com/photo-1504600770771-fb03a6961d33",
    "Volcanoes, beaches and breathtaking tropical beauty."
)

let d9 = new Destinations(
    "Canada", "North America", 8000, "Cold",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "Lakes, forests, mountains and peaceful scenery."
)

let d10 = new Destinations(
    "Egypt", "Africa", 5000, "Warm",
    "https://images.unsplash.com/photo-1544986581-efac024faf62",
    "Ancient pyramids, temples and desert adventures."
)

let d11 = new Destinations(
    "South Africa", "Africa", 6000, "Warm",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    "Safari experience, wildlife and stunning landscapes."
)

let d12 = new Destinations(
    "Greece", "Europe", 6800, "Warm",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d",
    "Famous for its islands, ancient history, blue seas and amazing food."
)

let d13 = new Destinations(
    "Spain", "Europe", 7000, "Cold",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "Beautiful beaches, culture, festivals and amazing food."
)
let d14 = new Destinations(
    "Kenya", "Africa", 5500, "Warm",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    "Famous for safari adventures, wildlife, and stunning savannah landscapes."
)

let d15 = new Destinations(
    "Italy", "Europe", 7500, "Cold",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    "Historic cities, beautiful coastlines, delicious food and rich culture."
)

let destinations = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15]

// console.log(destinations)

let card = document.getElementById("destinationCard")
let buttons = document.querySelectorAll(".buttons")

function displayDestinations(list) {
    let source = list
        .map(place => {
            return `
        <div class="card">
          <img src="${place.img}" alt="${place.name}">
          <div class="card-body">
            <h3>${place.name}</h3>
            <p>${place.desc}</p>
            <span class="tag continent">${place.continent}</span>
            <span class="tag weather">${place.weather}</span>
            <div class="price">Rs. ${place.price}</div>
          </div>
        </div>
      `
        })
        .join("")
    card.innerHTML = source

    // console.log(list)
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => userChoice(btn.innerText))
})


function userChoice(btnValue) {
    //  console.log(btnValue)
    if (btnValue === "All") {
        displayDestinations(destinations)
    }
    else if (btnValue === "Budget Friendly") {
        let cheap = destinations.filter(place => place.price <= 7000)
        // console.log(cheap)
        displayDestinations(cheap)
    }
    else if (btnValue === "Warm" || btnValue === "Cold") {
        let weatherType = destinations.filter(place => place.weather === btnValue)
        // console.log(weatherType)

        displayDestinations(weatherType)
    }
    else {
        let selectedContinent = destinations.filter(place => place.continent === btnValue)
        // console.log(selectedContinent)
        displayDestinations(selectedContinent)
    }
}

displayDestinations(destinations)
