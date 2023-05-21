import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    // await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({ force: true });

    app.listen(4444);
    console.log("Server is listening on port", 4444);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
