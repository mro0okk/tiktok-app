module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('User', 'avatar', {
                type: Sequelize.BLOB("long"),

            }),
            queryInterface.changeColumn('Posts', 'thumbnail', {
                type: Sequelize.BLOB("long"),

            }),
            queryInterface.changeColumn('Posts', 'url', {
                type: Sequelize.BLOB("long"),
                allowNull: false,

            }),

        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('User', 'avatar', {
                type: Sequelize.BLOB,

            }),
            queryInterface.changeColumn('Posts', 'thumbnail', {
                type: Sequelize.BLOB,

            }),
            queryInterface.changeColumn('Posts', 'url', {
                type: Sequelize.BLOB("long"),
                allowNull: false,
            }),
        ])
    }
};