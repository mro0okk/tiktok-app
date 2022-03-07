module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Posts', 'thumbnail', {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Posts', 'thumbnail', {
                type: Sequelize.BLOB,

            }),

        ])
    }
};