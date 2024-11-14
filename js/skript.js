
let tovarImg = document.querySelector(".tovar-img")
let tovarH3 = document.querySelector(".tovar-h3")
let tovarH4 = document.querySelector(".tovar-h4")
let tovarOldPrice = document.querySelector(".old-price")
let tovarP = document.querySelector(".tovar-p")
let contentTovary = document.querySelector(".content-tovary")
let struktura = ""
let button = document.querySelector(".poisk-ok")
let tovary_v_magazine = document.querySelector(".tovary-v-magazine")

fillpage ()

let figurky = document.querySelector("#figurky")
figurky.addEventListener("click", () => {
    updateItems("Фигурки")
})
let nakleuky = document.querySelector("#nakleyki")
nakleuky.addEventListener("click", () => {
    updateItems("Наклейки")
})
let knigi = document.querySelector("#knigi")
knigi.addEventListener("click", () => {
    updateItems("Книги")
})
let kancilaria = document.querySelector("#kancilaria")
kancilaria.addEventListener("click", () => {
    updateItems("Канцелярия")
})
let semena_rasteniu = document.querySelector("#semena-rasteniu")
semena_rasteniu.addEventListener("click", () => {
    updateItems("Семена растений")
})
let rastenia = document.querySelector("#rastenia")
rastenia.addEventListener("click", () => {
    updateItems("Растения")
})
let otkritky = document.querySelector("#otkritky")
otkritky.addEventListener("click", () => {
    updateItems("Открытки")
})
let mineral = document.querySelector("#mineraly-i-kristaly")
mineral.addEventListener("click", () => {
    updateItems("Минералы, кристаллы и горные породы")
})
let riby = document.querySelector("#riby")
riby.addEventListener("click", () => {
    updateItems("Рыбы")
})

let magnit = document.querySelector("#magnit")
magnit.addEventListener("click", () => {
    updateItems("Магниты")
})
let kitchen = document.querySelector("#kitchen")
kitchen.addEventListener("click", () => {
    updateItems("Кухонные приборы")
})
let vse_tovary = document.querySelector("#vse-tovary")
vse_tovary.addEventListener("click", () => {
    //contentTovary.innerHTML = ' '
    tovary_v_magazine.textContent = "Товары в магазине"
    struktura = ""
    for (let i = 0; i < tovary.length; i++) {

        struktura += `  <div class="tovar"><img class="tovar-img" src="img/${tovary[i].img}" alt=""><h3 class="tovar-h3">${tovary[i].title}</h3><h4 class="tovar-h4">${tovary[i].price} <span class="old-price">${tovary[i].old_price}</span></h4><p class="tovar-p">${tovary[i].sklad}</p></div>`

    }
    console.log(struktura)
    contentTovary.innerHTML = struktura

})
button.addEventListener("click", () => {
    struktura = ""
    let input = document.querySelector("input").value.toLowerCase()
    for (let i = 0; i < tovary.length; i++) {
        if (tovary[i].title.toLowerCase().includes(input)) {
            struktura += `  <div class="tovar"><img class="tovar-img" src="img/${tovary[i].img}" alt=""><h3 class="tovar-h3">${tovary[i].title}</h3><h4 class="tovar-h4">${tovary[i].price} <span class="old-price">${tovary[i].old_price}</span></h4><p class="tovar-p">${tovary[i].sklad}</p></div>`
        }
    }
    if (struktura) {
        contentTovary.innerHTML = struktura
    }
    else {
        contentTovary.textContent = "Товар не найден"
    }
})

let burger_menu = document.querySelector(".burger")
burger_menu.addEventListener("click", () => {
    let vrapper = document.querySelector(".vrapper")
    console.log(typeof vrapper.style.left)
    if (vrapper.style.left === "0px") {
        vrapper.style.left = "-300px"
    }
    else {
        vrapper.style.left = "0px"
    }
    let menu = document.querySelector(".menu")
    menu.style.display = "flex"
}
)
function updateItems(category) {
    tovary_v_magazine.textContent = category
    struktura = ""
    for (let i = 0; i < tovary.length; i++) {
        if (tovary[i].category === category) {
            struktura += `  <div class="tovar"><img class="tovar-img" src="img/${tovary[i].img}" alt=""><h3 class="tovar-h3">${tovary[i].title}</h3><h4 class="tovar-h4">${tovary[i].price} <span class="old-price">${tovary[i].old_price}</span></h4><p class="tovar-p">${tovary[i].sklad}</p></div>`
        }
    }
    contentTovary.innerHTML = struktura
}
function fillpage() {
    // tovary_v_magazine.textContent = category
    struktura = ""
    for (let i = 0; i < tovary.length; i++) {

        struktura += `  <div class="tovar"><img class="tovar-img" src="img/${tovary[i].img}" alt=""><h3 class="tovar-h3">${tovary[i].title}</h3><h4 class="tovar-h4">${tovary[i].price} <span class="old-price">${tovary[i].old_price}</span></h4><p class="tovar-p">${tovary[i].sklad}</p></div>`

    }
    contentTovary.innerHTML = struktura
}
function check_of_goods (e) {
    console.log(e.target)
    if(e.target.className === "tovar") {

        console.log(1)
    }
}
console.log(document.querySelector(".tovar").className)
window.onclick = check_of_goods