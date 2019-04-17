const orm = {
    selectAll: function (table) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function (table, column, value) {
        const queryString = "INSERT INTO ?? (?) VALUES (?)";
        connection.query(queryString, [table, column, value], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function (table, column, condition) {
        const queryString = "UPDATE table SET column WHERE condition";
        connection.query(queryString, [table, column, value], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
}

module.exports = orm;