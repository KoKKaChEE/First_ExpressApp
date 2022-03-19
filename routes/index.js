const express = require("express")
const ctrl = require('../controllers/controller')
const validate = require('../middleware/validations')

const basePath = '/interview';
const userBasePath = '/user';

const userroutes = () => {
    const router = express.Router();
    router.route('/create')
        .post(validate.userInfo(), ctrl.createUser)
        router.route('/login')
        .post(validate.userInfo(), ctrl.validateLogin)
    router.route('/details/:username')
        .get(validate.userDetailsInfo(), ctrl.getUserDetails)
    return router;
}

const routes = () => {
    const router = express.Router();
    router.route('/hello')
        .post(validate.exampleValidation(), ctrl.sendResponseforPost)
    return router;
}

const appRoute = (app) => {
    app.use(basePath, routes());
    app.use(userBasePath, userroutes())
}

module.exports.appRoute = appRoute