const express = require("express");

const router = express.Router();
var request = require("request");

router.get("/", async (req, res_) => {
  var url = "https://api.hyperlandsmc.net/leaderboards/";
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
        res_.send({ error: "Error: " + res.statusCode });
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
        res_.send({ error: "Error: " + res.statusCode });
      } else {
        // data is already parsed as JSON:
        res_.send(data);
      }
    }
  );
});

module.exports = router;
