class UserInput {
    _input

    record(message) {
        this._input = prompt(message).toLowerCase().trim()
    }

    get() {
        return this._input
    }

    compare(...criteria) {
        return criteria.some((crit) => crit.test(this._input))
    }
}

export default UserInput