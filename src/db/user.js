let Sequelize = require('sequelize');

module.exports = db => {
  const Users = db.define(
    'users',
    {
      name: {
        type: Sequelize.STRING,
      },
      team: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Users;
};
