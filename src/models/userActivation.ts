const { Model } = require('objection');

export class UserActivation extends Model {
  static get tableName(): string {
    return 'userActivation';
  }

  static get relationMappings(): any {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/user`,
        join: {
          from: 'userActivation.userId',
          to: 'user.id',
        },
      },
    };
  }
}
