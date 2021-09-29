const express = require("express");
const httpStatus = require("http-status");

module.exports = () => {
  PORT = process.env.PORT;
  const server = express();
  server.listen(PORT, () => {
    console.log(`server is initalized on port ${PORT}`);
  });

  server.get("/", (req, res) => {
    res.status(httpStatus.OK).send(`Who are the best in the town`);
  });
};
