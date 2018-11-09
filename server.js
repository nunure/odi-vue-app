const express = require("express");
const history = require("connect-history-api-fallback");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

// connect-history-api-fallback middleware handle vue-router in deployed application
app.use(history({ verbose: true }));
app.use(serveStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
