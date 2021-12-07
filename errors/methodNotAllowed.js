const methodNotAllowed = (req, res, next) => {
    next({
        status: 405,
        message: `The method ${req.method} is not allowed for ${req.originalUrl}`
    })
}

module.exports = methodNotAllowed