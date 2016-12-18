( () => {
    const ajaxApi = new AjaxAPI('');
    const app = new TodoList({
        rootEl: ".container",
        title: "Todo list",
        placeholder: "Enter todo list...",
        ajaxApi
        // placeholderText: "Some cool todo list"
    });

})();