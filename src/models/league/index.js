let leagueModel = {};
let League = require('../../db').league;

leagueModel.GET_LEAGUES = () => {
  return League.findAll({
  }).then(leagues => leagues);
};

leagueModel.CREATE_LEAGUE = leagueData => {
  return League.create(leagueData).then(league => {
    return league;
  });
};

leagueModel.UPDATE_LEAGUE = (id, leagueData) => {
  return League.update(leagueData, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(league => league);
};

leagueModel.DELETE_LEAGUE = id => {
  return League.destroy({
    where: {
      id,
    },
  }).then(league => league);
};

module.exports = leagueModel;
