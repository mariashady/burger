const orm = require("../config/orm");

const burger = {
    select: (cb) => {
        orm.select("burgers", (results) => {
            cb(results);
        });
    },
    create: (value, cb) => {
        orm.create("burgers", ["burger_name", "devoured"], [value, false], (results) => {
            cb(results);
        });
    },
    update: function(column, condition, cb) {
        orm.update("burgers", column, condition, function(res) {
          cb(res);
        });
      },
}

module.exports = burger;