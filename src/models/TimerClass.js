export default class Timer {
    #time

    constructor(time) {
        this.#time = time
    }

    getTime() {
        return this.#time
    }

    decrementTime() {
        this.#time--
    }
}