let Sequelize = require('sequelize');

module.exports = db => {
  const Featured = db.define(
    'featured',
    {
      user_id: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Featured;
};
