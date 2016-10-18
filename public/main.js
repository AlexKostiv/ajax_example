(function () {
    var app = new TodoList({
        rootEl: ".container",
        headerText: "Tasks",
        baseUrl: "http://localhost:4001/list",
        ajax: new Ajax()
        // placeholderText: "Some cool todo list"
    });
})();