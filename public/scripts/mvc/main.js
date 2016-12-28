( () => {
    const ajaxApi = new API();
    // const todoList = new List('.widget', 'Tasks list', 'Enter new tasks', ajaxApi);
    const view = new View('.widget', 'Tasks list', 'Enter new tasks');
    const model =  new Model(ajaxApi);
    const controller = new Controller(view, model);
})();

