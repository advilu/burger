const orm = require("./../config/orm");

const burger = {
    all: cb => {
        orm.all('burgers', res => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
                name, false
            ], cb);
    },
    update: (id, cb) => {
        var identification = "id: " + id;
        orm.update("burgers", {
            devoured: true
        }, identification, cb);
    },
delete: (id, cb) => {
    orm.delete("burgers", {
        
    }, cb);
    }
}

module.exports = burger;