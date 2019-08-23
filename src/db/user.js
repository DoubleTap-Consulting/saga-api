let Sequelize = require('sequelize');

module.exports = db => {
  const Users = db.define(
    'users',
    {
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      tagline: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      game: {
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
      twitter_username: {
        type: Sequelize.STRING,
      },
      instagram_username: {
        type: Sequelize.STRING,
      },
      twitch_username: {
        type: Sequelize.STRING,
      },
      discord_url: {
        type: Sequelize.STRING,
      },
      discord_username: {
        type: Sequelize.STRING,
      },
      highlight_video: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      experiences: {
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
        defaultValue: [
          { name: '', type: 'Headphones' },
          { name: '', type: 'Keyboard' },
          { name: '', type: 'Keyboard' },
          { name: '', type: 'Motherboard' },
          { name: '', type: 'Graphics Card' },
          { name: '', type: 'CPU' },
          { name: '', type: 'RAM' },
          { name: '', type: 'Power Supply' },
          { name: '', type: 'Fans' },
          { name: '', type: 'Case' },
        ],
      },
      schedule: {
        type: Sequelize.JSON,
        defaultValue: {
          Monday: '',
          Tuesday: '',
          Wednesday: '',
          Thursday: '',
          Friday: '',
          Saturday: '',
          Sunday: '',
        },
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Users;
};
