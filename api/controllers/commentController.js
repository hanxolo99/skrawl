const mongoose = require('mongoose'),
Post = mongoose.model('Post');
Comment = mongoose.model('Comment');


exports.post_comment = function(req , res, next){
    const requestedPostId = req.params.postId;
    console.log(requestedPostId);
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment
    });

    comment.save(function(err){

        if(!err){
            Post.findOne({_id: requestedPostId}, function(err, post){
                post.comments.unshift(comment);
                post.save().then(
                    res.redirect('/posts/' + requestedPostId + '#comments')
                );
                
            }
        
   ) } else{
       console.log(err);
   }

});
}