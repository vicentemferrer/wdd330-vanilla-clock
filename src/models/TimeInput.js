import UserInput from "./UserInput.js";

class TimeInput extends UserInput {
    constructor() { super() }

    #split(separator) {
        return this._input.split(separator)
    }

    #parse([amount, setting]) {
        switch (setting) {
            case 'minute':
            case 'minutes':
                return parseInt(amount) * 60
            case 'second':
            case 'seconds':
                return parseInt(amount)
        }
    }

    compareTime(limit) {
        return this.getTime() > limit
    }

    getTime() {
        return this.#parse(this.#split(' '))
    }
}

export default TimeInput