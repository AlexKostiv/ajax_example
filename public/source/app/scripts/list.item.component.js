/**
 * Created by IlyaLitvinov on 30.12.16.
 */
class Controller {
    constructor() {
        this.painted = false;
    }

    removeItem(id) {
        this.onDelete({id});
    }

    paint() {
        this.painted = !this.painted;
    }
}

const ItemComponent = {
    template: `
            <li class="card-panel todo_list__todo_item row"
                <div class="col s1 m1 l1 checkbox">
                    <input type="checkbox" ng-model="$ctrl.item.completed" id="{{item.id}}" ng-checked="$ctrl.item.completed"/>
                    <label for="{{$ctrl.item.id}}" class="todo_list__checkbox"></label>
                </div>
                <div class="todo_list__todo_item__title" 
                    ng-class="{painted: $ctrl.painted}"
                    ng-click="$ctrl.paint()"
                >{{$ctrl.item.title}}</div>
                <a ng-click="$ctrl.removeItem($ctrl.item.id)" class="btn-floating btn-large waves-effect waves-light red">
                    <i class="material-icons todo_list__btn_delete">X</i>
                </a>
            </li>
        `,
    controller: Controller,
    bindings: {
        item: '<',
        onDelete: '&'//передача callback функции в компонент
    }
};

export {ItemComponent}
// angular.module("todoList")
//     .component('listItem', Component);