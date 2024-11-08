import Timer from "./TimerClass.js"

function parse(number) {
    return number.toString().length === 1 ? `0${number}` : number
}

class TimerInterface {
    #timer
    #displayElement
    #innerTimeout
    #innerInterval

    constructor(displayElement, time) {
        this.#timer = new Timer(time)
        this.#displayElement = displayElement
    }

    static #timeParser(time) {
        const minutes = parse(Math.floor(time / 60))
        const seconds = parse(time % 60)

        return `${minutes}:${seconds}`
    }

    display() {
        this.#displayElement.textContent = TimerInterface.#timeParser(this.#timer.getTime())
    }

    start() {
        this.#innerInterval = setInterval(() => {
            if (this.#timer.getTime() >= 0) {
                this.#timer.decrementTime()
                this.display()
            }
        }, 1000)

        this.#innerTimeout = setTimeout(() => {
            this.stop()
            alert('Time\'s up!')
        }, this.#timer.getTime() * 1000)
    }

    stop() {
        clearTimeout(this.#innerTimeout)
        clearInterval(this.#innerInterval)
    }
}

export default TimerInterface