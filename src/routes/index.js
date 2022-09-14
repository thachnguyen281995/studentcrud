const routerNew = require("./news");
function route(app) {
    // app.get("/", (req, res) => {
    //     res.render("home");
    // });
    app.use("/news", (req, res) => {
        res.render("news");
    });
    app.use("/", routerNew);
}
module.exports = route;
