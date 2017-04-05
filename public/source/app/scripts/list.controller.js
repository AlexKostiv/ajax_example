/**
 * Created by IlyaLitvinov on 05.04.17.
 */

class TodoList {
    constructor(param) {
        console.log("Hello world");

    }

    init(selector) {
        const container = document.querySelector(selector);
        container.innerHTML = 'HELLO wolrd';
    }
}

TodoList.create = () => new TodoList();

export {TodoList};