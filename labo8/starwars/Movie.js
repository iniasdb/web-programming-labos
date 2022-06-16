class Movie {
    constructor(name, duration, review) {
        this.name = name;
        this.duration = duration;
        this.review = review;
    }

    getName() {
        return this.name;
    }

    getDuration() {
        return this.duration;
    }

    getReview() {
        return this.review;
    }
}

module.exports = {Movie}