const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeList = [{
    morning: 'Good Morning!',
    afternoon: 'Good Afternoon!',
    evening: 'Good Evening!'
}]

const welcome = document.querySelector('#welcome') 

welcomeList.forEach(greet => {
    if (isMorning) {
        welcome.innerHTML = `<h2 class="text-center text-white">${greet.morning}</h2>`
    }
    if (isAfternoon) {
        welcome.innerHTML = `<h2 class="text-center text-white">${greet.afternoon}</h2>`
    }
    if (isEvening) {
        welcome.innerHTML = `<h2 class="text-center text-white">${greet.evening}</h2>`
    }
})
