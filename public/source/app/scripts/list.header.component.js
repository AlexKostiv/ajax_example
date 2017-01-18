/**
 * Created by IlyaLitvinov on 30.12.16.
 */
class HeadController {
    constructor() {
        this.inputField = "";
    }

    _addItem(e) {
        if (e.keyCode === 13) {
            this.addItem({text: this.inputField});
            this.inputField = "";
        }
    }
}

const HeadComponent = {
    bindings: {
        lHeader: "<",
        lPlaceholder: "<",
        addItem: '&'
    },
    template: `
            <h3 hide-element class="teal-text text-darken-2">{{$ctrl.lHeader}}</h3>
            <div class="todo_list__head_input input-field col s12">
                <input class="todo_list__head_input__field"
                       type="text"
                       id="todo_list__head_input__field"
                       ng-model="$ctrl.inputField"
                       ng-keypress="$ctrl._addItem($event)">
                <label for="todo_list__head_input__field">{{$ctrl.options.placeholder}}</label>
            </div>
        `,
    controller: HeadController
};

export {HeadComponent};

// angular.module("todoList")
//     .component('listHead', component);