console.log("The ORM is ready!")

const connection = require("./connection.js");

const orm = {
    select: (table, cb) => {
        let query = "SELECT * FROM burger_db";

        connection.query(query, [table], (err, results) => {
            if(err) {
                throw err;
            }
            console.log("ORM is displaying all burgers")
            console.log(results);
            cb(results)
        });
    }
};

module.exports = orm;