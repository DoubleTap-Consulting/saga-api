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
      author: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Content;
};
