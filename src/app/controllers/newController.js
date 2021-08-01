class NewsController {


    // [get] / news
    index(req, res) {
            res.render('news');
        }
        // [Get] /new/:slug
    show(req, res) {
        res.send('hellocu');
    }

}
module.exports = new NewsController;

// const