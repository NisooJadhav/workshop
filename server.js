require("dotenv").config();
const path = require("path");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { resolveSoa } = require("dns");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3001;

//DB configs
mongoose
  .connect(process.env.MONGO_URI).then(() => console.log("connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  fromDate: Date,
  toDate: Date,
  instructor: String,
});

const Post = mongoose.model("Post", postSchema);


app.post("/create", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    fromDate: req.body.fromDate,
    toDate: req.body.toDate,
    instructor: req.body.instructor,
  });

  newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.post("/search", async (req, res) => {
  let payload = req.body.payload.trim();
  console.log(payload);

  let search = await Post.find({ title: { $regex: new RegExp('^' + payload + '.*', 'i') } }).exec();

  //limit search
  search = search.slice(0, 10);
  res.send({ payload: search });
});

app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      content: req.body.content,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      instructor: req.body.instructor,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 3001, function () {
  console.log(`workshop's server is running at port ${port}`);
});