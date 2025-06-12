const express = require("express");
const Unblocker = require("unblocker");
const app = express();

app.use(Unblocker({ prefix: "/proxy/" }));

app.listen(process.env.PORT || 8080, () => {
  console.log("Unblocker proxy running on port", process.env.PORT || 8080);
});
