const express = require("express")
const routes = require("./routes/index")

const createServer = () => {

    const app = express();
    app.use(express.json());

    routes.appRoute(app);
    return app;
}

module.exports.createServer = createServer;