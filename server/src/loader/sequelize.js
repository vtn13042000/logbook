const Sequelize = require("sequelize");
const repository = require("../model/repository");

module.exports = async () => {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    }
  );

  try {
    await sequelize.authenticate();

    console.log(
      `Connection has been successfully established on host ${process.env.DB_HOST}`
    );
  } catch {
    console.log(
      `failed to connected to database on host ${process.env.DB_HOST}`
    );
  }
};
