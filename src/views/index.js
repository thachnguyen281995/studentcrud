const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(methodOverride("_method"));
db.connect();
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
