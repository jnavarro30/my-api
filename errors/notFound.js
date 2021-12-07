const notFound = (req, res, next) => {
    next({
        status: 404,
        message: `The route ${req.path} doest not exist.`
    })
}

module.exports = notFound