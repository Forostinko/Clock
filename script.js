function clock() {
    const hoursArrow = document.querySelector('.hours')
    const minutesArrow = document.querySelector('.minutes')
    const secondsArrow = document.querySelector('.seconds')
    // degrees 360:60=6
    const deg = 6

    setInterval(() => {
        const day = new Date()
        console.log('tick')

        const hours = day.getHours() * 30
        const minutes = day.getMinutes() * deg
        const seconds = day.getSeconds() * deg

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`

    }, 1000)
}
clock()