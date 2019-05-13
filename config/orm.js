const connection = require("./connection");

const orm = {
    selectAll: function (table, cb) {
        console.log(table);
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, column, value, cb) {
        const queryString = "INSERT INTO ?? (?) VALUES (?)";
        connection.query(queryString, [table, column, value], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, column, condition, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, column, value], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    
}

module.exports = orm;