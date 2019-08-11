let Sequelize = require('sequelize');

module.exports = db => {
  const Leagues = db.define(
    'leagues',
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

  return Leagues;
};
