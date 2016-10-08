(function () {
    var ajax = new AJAX ('http://localhost:4001/');
    var lighter = new TodoList('.container', {},ajax);
})();