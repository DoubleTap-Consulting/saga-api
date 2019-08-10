const { Model } = require('objection');

export class UserToken extends Model {
  static get tableName() {
    return 'userToken';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/user`,
        join: {
          from: 'userToken.userId',
          to: 'user.id',
        },
      },
    };
  }
}
