import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

export const Score = sequelize.define("Score", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Score.sync();

export default Score;