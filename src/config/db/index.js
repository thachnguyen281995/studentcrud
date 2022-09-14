const mongoose = require("mongoose");
async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/node_crud");
        console.log("Connect Successfully!!");
    } catch (err) {
        console.log("Fail");
    }
}
module.exports = { connect };
