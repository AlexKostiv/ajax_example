(function () {
    var api = new Api('http://localhost:4001/list');
    // var list = new List('.test', 'Список покупок', api);
    // list.init();
    // var api = new Api('http://localhost:4001/comments');
    // var comment = new Comment('.test', 'test', 'test', api);
    // comment.init();
    var model = new window.Model(api);
    var view = new View('.test');
    var control = new Controller(view, model);
    control.init();


})();