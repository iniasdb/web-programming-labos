const log = (req, res, next) => {
    console.log("ja")
    next()
}

module.exports = {log}
    