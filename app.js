const express = require("express");
const app = express();

var cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const stats = require("./routes/stats");
const leaderboards = require("./routes/leaderboards");
app.use("/stats", stats);
app.use("/leaderboards", leaderboards);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
