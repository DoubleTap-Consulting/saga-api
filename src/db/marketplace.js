let Sequelize = require('sequelize');

module.exports = db => {
  const Marketplace = db.define(
    'marketplace',
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

  return Marketplace;
};
