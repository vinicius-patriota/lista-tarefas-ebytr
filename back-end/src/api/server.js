require('dotenv').config();

const server = require("./routes");

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log("listening on port", PORT));