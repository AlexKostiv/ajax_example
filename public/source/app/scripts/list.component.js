/**
 * Created by IlyaLitvinov on 30.12.16.
 */
class ListController {
    constructor(taskModel) {
        console.log("Main cntrl");

        this.options = {
            listHeader: "Passed from parent",
            placeHolderText: "enter task"
        };

        this.tasks = [];

        this.model = taskModel;

        this.model
            .fetchTasks()
            .then(resp => {
                this.tasks = resp.data;
            });
        this.testGreet = "Hello i am injected data to component"
    }

    onAddItem(text) {
        this.model.addTask(text).then(resp => {
            this.tasks.push(resp.data);
        });
    }

    removeItem(id) {
        this.model.removeTask(id).then(resp => {
            if (resp.status === 200) {
                this.tasks = this.tasks.filter((item) => item.id !== id)
            }
        });

    }
}

const ListComponent = {
    template: `
            <div class="app-container">
                <div class="todo_list">
                    <div class="todo_list__head row">
                       <list-head l-header="$ctrl.options.listHeader"
                       l-placeholder="$ctrl.options.placeholder"
                       add-item="$ctrl.onAddItem(text)"></list-head>
                    </div>
                    <div class="todo_list__section row">
                         <list-item class="list__item"
                            ng-repeat="task in $ctrl.tasks" item="task" on-delete="$ctrl.removeItem(id)"></list-item> 
                    </div>
                </div>
            </div>
        `,
    controller: ListController
};

export {ListComponent}

// angular.module("todoList")
//     .component('list', ListComponent);

