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
      price: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      seller_id: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Marketplace;
};
