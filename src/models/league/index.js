let leageModel = {};
let League = require('../../db').league;

leageModel.GET_LEAGUES = () => {
  return League.findAll({
  }).then(leagues => leagues);
};

leageModel.CREATE_LEAGUE = leagueData => {
  return League.create(leagueData).then(league => {
    return league;
  });
};

leageModel.UPDATE_LEAGUE = (id, leagueData) => {
  return League.update(leagueData, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(league => league);
};

leageModel.DELETE_LEAGUE = id => {
  return League.destroy({
    where: {
      id,
    },
  }).then(league => league);
};

module.exports = leageModel;
