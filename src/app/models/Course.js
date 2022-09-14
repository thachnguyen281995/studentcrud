const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
    hoten: { type: String, maxlength: 255 },
    masv: { type: String, maxlength: 255 },
    lop: { type: String, maxlength: 255 },
});
module.exports = mongoose.model("Users", Course);
