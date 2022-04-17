const express = require("express");

const router = express.Router();
var request = require("request");

router.get("/", (req, res) => {
  res.send("use /stats/:name to get stats");
});

router.get("/:name", async (req, res_) => {
  var url = "https://api.hyperlandsmc.net/stats/" + req.params.name;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
      } else {
        // data is already parsed as JSON:
        data.skin = "https://api.hyperlandsmc.net/skin/" + req.params.name;
        res_.send(data);
      }
    }
  );
});

module.exports = router;
