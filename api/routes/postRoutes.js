const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
    cb(null, file.originalname);
    }
   });

  const uploads = multer({
    storage: storage
   });
module.exports = function(app){
    const postRoute = require('../controllers/postController');
    const commentRoute = require('../controllers/commentController');

   
    app.route('/')
        .get(postRoute.list_fake_posts);
    app.route('/api/home')
        .get(postRoute.list_all_posts);
    app.route('/home')
        .get(postRoute.display_all_posts);
    app.route('/new-skrawl')
        .get(postRoute.display_compose_skrawl)
        .post(uploads.single('featured'),postRoute.post_skrawl);
    app.route("/posts/:postId")
        .get(postRoute.display_single_post);

    app.route("/posts/:postId/comments").post(commentRoute.post_comment);
    
};
