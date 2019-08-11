let Sequelize = require('sequelize');

module.exports = db => {
  const Tournaments = db.define(
    'tournaments',
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      length: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prize_pool: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leaderboard: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Tournaments;
};
