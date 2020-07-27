const mongoose = require('mongoose');

const repliesSchema = new mongoose.Schema(
    {
        username: String,
        comment: String
    }
);

const commentSchema = new mongoose.Schema(
    {
        username: String,
        comment: String,
        replies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Reply'
            }
        ]
    }
);

const postSchema = new mongoose.Schema(
    {  
        _id: {type: mongoose.Types.ObjectId, auto: true},
        title: String,
        category: String,
        skrawl: String,
        featuredImage: {
            path: {
                type: String,
                required: true,
                trim: true
                },
                originalname: {
                type: String,
                required: true
                }
        },
        comments: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        
    }
);

module.exports = mongoose.model("Comment", commentSchema);
module.exports = mongoose.model("Post", postSchema);
module.exports = mongoose.model("Reply", repliesSchema);