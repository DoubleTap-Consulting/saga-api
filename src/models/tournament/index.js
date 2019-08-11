let tournamentModel = {};
let Tournament = require('../../db').tournaments;

tournamentModel.GET_TOURNAMENTS = tournament_id => {
  return Tournament.findAll({
    where: {
      tournament_id,
    },
  }).then(tournaments => tournaments);
};

tournamentModel.GET_TOURNAMENT = id => {
  return Tournament.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(tournament => tournament);
};

tournamentModel.CREATE_TOURNAMENT = tournament => {
  return Tournament.create(tournament).then(tournament => {
    return tournament;
  });
};

tournamentModel.UPDATE_TOURNAMENT = (id, tournamentDataToUpdate) => {
  return Tournament.update(tournamentDataToUpdate, {
    returning: true,
    where: { id },
    attributes: { exclude: ['updatedAt', 'createdAt'] },
  }).then(tournament => tournament);
};

tournamentModel.DELETE_TOURNAMENT = id => {
  return Tournament.destroy({
    where: {
      id,
    },
  }).then(tournament => tournament);
};

module.exports = tournamentModel;
