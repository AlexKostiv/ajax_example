/**
 * Created by IlyaLitvinov on 30.12.16.
 */
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
export {TaskModel}
// angular.module("todoList")
//     .service('taskModel', TaskModel);
