/**
 * Created by IlyaLitvinov on 27.12.16.
 */
class MainController {
    constructor(taskModel) {
        console.log("Main cntrl");
        this.listHeader = "Todo list";
        this.tasks = [
            {
                "completed": false,
                "title": "Test",
                "id": 1482858912997
            },
            {
                "completed": true,
                "title": "Test2",
                "id": 1482858913002
            }
        ];
        this.inputField = "";
        this.model = taskModel;

        this.model
            .fetchTasks()
            .then( resp => {
                this.tasks = resp.data;
            });
    }

    getTest() {
        return 'test';
    }

    addItem(e) {
        if (e.keyCode === 13) {
            this.tasks.push();
            this.model.addTask(this.inputField).then(resp => {
                this.tasks.push(resp.data);
            });
            this.inputField = "";
        }
    }

    removeItem(id) {
        this.model.removeTask(id).then(resp => {
            debugger;
            if(resp.status === 200) {
                this.tasks = this.tasks.filter((item) => item.id !== id)
            }
        });

    }
}

class TaskModel {
    constructor($http) {
        this.baseUrl = "http://localhost:4001/list";
        this.$http = $http;
    }

    fetchTasks() {
        return this.$http.get(this.baseUrl);
    }

    addTask(text) {
        const newTaskObj = {
            "completed": false,
            "title": text,
        };

        return this.$http.post(this.baseUrl, newTaskObj);
    }
    removeTask(id) {
        return this.$http.delete(this.baseUrl + `/${id}`);
    }
}

angular.module("todoList", [])
    .controller('mainCtrl', MainController)
    .service('taskModel', TaskModel);
