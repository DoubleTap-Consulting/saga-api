const { Model } = require('objection');

export class UserToken extends Model {
  static get tableName(): string {
    return 'userToken';
  }

  static get relationMappings(): any {
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
