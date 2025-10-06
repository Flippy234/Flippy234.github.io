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

const secretMessage = localStorage.setItem("It's a secret to everybody.", "You have found me!")

// Carousel Assignment JS
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })


let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
    console.log('previous button clicked')
    currentImage--
    showImages()
});

const next = document.querySelector('#next')
next.addEventListener('click', () => {
    console.log('next button clicked')
    currentImage++
    showImages()
});

setInterval(() => {
    currentImage++
    showImages()
}, 5000)
