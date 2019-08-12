let Sequelize = require('sequelize');

module.exports = db => {
  const Users = db.define(
    'users',
    {
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      selected_game: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      gamerTag: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      gaming_level: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      perspective_preference: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      heading: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      team: {
        type: Sequelize.STRING,
        defaultValue: '',
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
      pubgId: {
        type: Sequelize.STRING,
      },
      fortnite_gamertag: {
        type: Sequelize.STRING,
      },
      hacker: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      avatar: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      twitter_url: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      instagram_url: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      twitch_url: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      experience: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      highlight_video: {
        type: Sequelize.STRING,
        defaultValue: '',
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
        type: Sequelize.JSON,
        defaultValue: {
          headphones: '',
          keyboard: '',
          motherboard: '',
          graphics_card: '',
          cpu: '',
          ram: '',
          power_supply: '',
          fans: '',
          case: '',
        },
      },
      schedule: {
        type: Sequelize.JSON,
        defaultValue: {
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
          Sunday: [],
        },
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Users;
};
