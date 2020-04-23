const mongoose = require('mongoose'),
// const Post = require('../models/postModel');
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
                post.save();
                res.redirect('/home');
            }
        
   ) } else{
       console.log(err);
   }


});
    // .then(
    //     function comment(){
    //         })
    // .then(
    //     function post(){
       
    //     // Post.comments.unshift(comment);
    //     // return post.save();
    // })
    // .then(function post(){
    //     res.redirect('/');
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    // comment.save()
    // .then(comment =>{
    //     return Post.findById(req.params.postId);
    // })
    // .then(post => {
    //     post.comments.unshift(comment);
    //     return post.save();
    // })
    // .then(post => {
    //     res.redirect('/');
    // })
   
    // comment.save(function(err){
    //     if(err){
    //         console.log(err);
    //     } else{
    //         res.redirect('/home');
    //     }
    // });
}