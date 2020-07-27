const mongoose = require('mongoose');
Post = mongoose.model('Post');
Comment = mongoose.model('Comment');
Reply = mongoose.model('Reply');

exports.comment_reply = function(req, res, next){
    const requestedCommentId = req.params.commentId;
    const requestedPostId = req.params.postId;
    console.log(requestedCommentId);

    const reply = new Reply({
        username: req.body.username,
        comment: req.body.comment
    });
    reply.save(function(err){
        if(!err){
            Comment.findOne({_id: requestedCommentId}, function(err, comment){
                comment.replies.unshift(reply);
                comment.save().then(
                    res.redirect('/posts/' + requestedPostId + '#comments')
                );
            })
        } else{
            console.log(err);
        }
    })
}