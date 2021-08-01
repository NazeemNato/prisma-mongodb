const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running ");
});

readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
