const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://ranitaghosh04:oBr7xt1gnL5llEeE@cluster0.7tub4nx.mongodb.net/netflixclone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
//   .catch((err) => {
//     console.log(err.message);
//   });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log("server started on port 5000");
});