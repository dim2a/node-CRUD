const express = require("express");
const sequelize = require("./util/database");
const app = express();
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/user/", routes);

const start = async () => {
  try {
    await sequelize.sync({ force: false });
  } catch (e) {
    console.log(e);
  }
};

start();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
