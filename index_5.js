const allNumbers = document.querySelectorAll(`.number`)
const btnsArray = document.querySelectorAll(".btn")
const resultEnd = document.querySelector(".resulte")
const refreshEnd = document.querySelector(".refesh")

let randomnumber = []
// let randomnumber1 = []
let correcresult = 0

for (let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].addEventListener("click", onBtnClick)
}
refreshEnd.addEventListener('click', init)
init()
function init() {
    correcresult = 0
    refreshEnd.style.display = "none"

    for (let i = 0; i < allNumbers.length; i++) {
        const random = Math.round(Math.random() * 20)
        randomnumber.push(random)
        allNumbers[i].textContent = random
        correcresult += random
    }
    let machiffrecouec = gitRandomBetweenNumber(1, 5)

    for (let i = 0; i < btnsArray.length; i++) {

        btnsArray[i].addEventListener("click", onBtnClick)

        if (Math.random() < 0.5) {
            btnsArray[i].textContent = correcresult + machiffrecouec
        }
        else {
            btnsArray[i].textContent = correcresult - machiffrecouec
        }
        machiffrecouec = gitRandomBetweenNumber(machiffrecouec + 1, machiffrecouec + 2)
        // randomnumber1.push(random1)
    }

    let randomPosition = Math.round(Math.random() * (btnsArray.length - 1))
    btnsArray[randomPosition].textContent = correcresult
}

function gitRandomBetweenNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}

function onBtnClick(e) {
    if (e.currentTarget.textContent == correcresult) {
        (resultEnd.textContent = "Bravo")
        refreshEnd.style.display = "block"
    } else {
        (resultEnd.textContent = "Try Again")
        refreshEnd.style.display = "none"
    }
}

// btnsArray[randomPosition].addEventListener("click")

// resultEnd.textContent = "..."
