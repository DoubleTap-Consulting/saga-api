let Sequelize = require('sequelize');

module.exports = db => {
  const Featured = db.define(
    'featured',
    {
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.JSON,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Featured;
};
