const orm = require("../config/orm");

const burger = {
    select: (cb) => {
        orm.select("burgers", (results) => {
            cb(results);
        });
    },
    create: (column, values, cb) => {
        orm.create("burgers", column, values, (results) => {
            cb(results);
        });
    }
}

module.exports = burger;