"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TodoTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TodoTasks.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
        },
      });
      TodoTasks.hasOne(models.Comment, {
        foreignKey: {
          name: "taskId",
        },
      });
    }
  }
  TodoTasks.init(
    {
      taskName: DataTypes.STRING,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "TodoTasks",
    }
  );
  return TodoTasks;
};
