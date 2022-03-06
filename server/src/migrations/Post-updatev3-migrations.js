module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('User', 'avatar', {
                type: Sequelize.BLOB,

            }),
            queryInterface.changeColumn('Posts', 'thumbnail', {
                type: Sequelize.STRING,

            }),
            queryInterface.changeColumn('Posts', 'url', {
                type: Sequelize.STRING,
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
                type: Sequelize.BLOB("long"),

            }),
            queryInterface.changeColumn('Posts', 'url', {
                type: Sequelize.BLOB("long"),
                allowNull: false,

            }),

        ])
    }
};