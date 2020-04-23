const mongoose = require('mongoose'),

 Post = mongoose.model('Post');
 Comment = mongoose.model('Comment');

exports.list_fake_posts = function(req, res){
    res.render('limitedhome');
};

exports.list_all_posts = function(req, res){
    Post.find(function(err, post){
        if(err){
          console.log(err);
          res.send(err);
        }else{
            res.json(post);
        }
      });
};
exports.display_all_posts = function(req, res){
    Post.find(function(err, post){
        if(err){
          console.log(err);
          res.send(err);
        }else{
            res.render('home',{posts: post});
        }
      });
};

exports.display_compose_skrawl = function(req, res){
    res.render('compose');
};

exports.post_skrawl = function(req, res, next){
    const post = new Post({
        title: req.body.title,
        category: req.body.category,
        skrawl: req.body.skrawl,
        featuredImage: req.file,
    });

    post.save(function(err){
        if(err){
            console.log(err);
        } else{
            res.redirect('/home');
        }
    });
};

exports.display_single_post = function(req, res){
    const requestedPostId = req.params.postId;
    
      Post.findOne({_id: requestedPostId}).populate('comments').exec(function(err, post){
        res.render("post", {
          title: post.title,
          category: post.category,
          skrawl: post.skrawl,
          featuredImage: post.featuredImage,
          postId : post._id,
          comments: post.comments
        

        });
      });
};





// app.get("/posts/:postId", function(req, res){

//     const requestedPostId = req.params.postId;
    
//       Post.findOne({_id: requestedPostId}, function(err, post){
//         res.render("post", {
//           title: post.title,
//           content: post.content
//         });
//       });
    
//     });
