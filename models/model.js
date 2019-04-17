burger.define ({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    burgerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    devoured: {
        type: Sequelize.STRING,
        allowNull: true
    }
})