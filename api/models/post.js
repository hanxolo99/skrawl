// const mongoose = require("mongoose");

// class PostModel {
//   schema = new mongoose.Schema({
//     title: String,
//     category: String,
//     skrawl: String,
//     featuredImage: {
//       path: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//       originalname: {
//         type: String,
//         required: true,
//       },
//     },
//   });

//   getPosts() {
//     return new mongoose.model("Post", this.schema).find();
//   }
//   createPosts(){
//     return new mongoose.model("Post", this.schema).find();
//   }
// }

// module.exports = PostModel;