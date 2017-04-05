(function () {
    var api = new Api('http://localhost:4001/list');
    // var list = new List('.test', 'Список покупок', api);

    var listView = new window.list.View('.test','Список покупок');
    var listModel = new window.list.Model(api);
    var listController = new window.list.Controller(listView, listModel);
    listController.init();
})();