let Sequelize = require('sequelize');

module.exports = db => {
  const Users = db.define(
    'users',
    {
      name: {
        type: Sequelize.STRING,
      },
      selected_game: {
        type: Sequelize.STRING,
      },
      gaming_level: {
        type: Sequelize.STRING,
      },
      perspective_preference: {
        type: Sequelize.STRING,
      },
      heading: {
        type: Sequelize.STRING,
        defaultValue: '',
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
      profile_views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'user',
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      avatar: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      twitter_url: {
        type: Sequelize.STRING,
      },
      instagram_url: {
        type: Sequelize.STRING,
      },
      twitch_url: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      highlight_video: {
        type: Sequelize.STRING,
      },
      summary: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      birthday: {
        type: Sequelize.DATE,
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      peripherals: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      schedule: {
        type: Sequelize.JSON,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Users;
};
