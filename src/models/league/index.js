let leageModel = {};
let League = require('../../db').league;

leageModel.GET_LEAGUES = league_id => {
  return League.findAll({
    where: {
      league_id,
    },
  }).then(leagues => leagues);
};

leageModel.CREATE_LEAGUE = league => {
  return League.create(league).then(league => {
    return league;
  });
};

leageModel.UPDATE_LEAGUE = (id, leageData) => {
  return League.update(leageData, {
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
