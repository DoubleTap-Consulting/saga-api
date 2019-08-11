let Sequelize = require('sequelize');

module.exports = db => {
  const Content = db.define(
    'content',
    {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.JSON,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Content;
};
