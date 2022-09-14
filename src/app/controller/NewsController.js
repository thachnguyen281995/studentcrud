const Courses = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
class NewsController {
    index(req, res, next) {
        Courses.find({})
            .then((users) => {
                // C1: // users = users.map((user) => user.toObject());
                users = mutipleMongooseToObject(users);
                res.render("home", { users });
            })
            .catch(next);
    }
    create(req, res, next) {
        const courses = new Courses(req.body);
        courses
            .save()
            .then(() => res.redirect("/"))
            .catch((error) => {});
    }
    edit(req, res, next) {
        Courses.findById(req.params.id)
            .then((user) =>
                res.render("edit", {
                    user: mongooseToObject(user),
                })
            )
            .catch(next);
    }
    update(req, res, next) {
        Courses.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/"))
            .catch(next);
    }
    destroy(req, res, next) {
        Courses.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}
module.exports = new NewsController();
