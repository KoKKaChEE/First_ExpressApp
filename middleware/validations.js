const { body, validationResult,param } = require('express-validator');


const exampleValidation = () => {
    return [
        body("field").not().isEmpty().withMessage("mustNotBeEmpty"),
        applyValidationMiddleware()
    ]
}

const userInfo = () => {
    return [
        body("username").not().isEmpty().withMessage("mustNotBeEmpty"),
        body("password").not().isEmpty().withMessage("mustNotBeEmpty"),
        applyValidationMiddleware()
    ]
}

const userDetailsInfo = () => {
    return [
        param("username").not().isEmpty().withMessage("mustNotBeEmpty"),
        applyValidationMiddleware()
    ]
}

module.exports.userInfo = userInfo
module.exports.userDetailsInfo = userDetailsInfo
module.exports.exampleValidation = exampleValidation; 

const applyValidationMiddleware = () => {
    return (req,res,next) => {
        const errors = validationResult(req)
        if(errors.isEmpty()) {
            return next()
        } else {
            res.status(400)
            res.json(errors)
        }
    }
}