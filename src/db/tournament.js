let Sequelize = require('sequelize');

module.exports = db => {
  const Tournaments = db.define(
    'tournaments',
    {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Tournaments;
};
