let Sequelize = require('sequelize');

module.exports = db => {
  const Leagues = db.define(
    'leagues',
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teams: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      game: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Leagues;
};
