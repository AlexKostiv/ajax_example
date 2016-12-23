( () => {
    const ajaxApi = new API();
    const todoList = new List('.widget', 'Tasks list', 'Enter new tasks', ajaxApi);
})();

