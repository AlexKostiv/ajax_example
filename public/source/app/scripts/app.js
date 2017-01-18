/**
 * Created by IlyaLitvinov on 27.12.16.
 */
import {ListComponent} from './list.component';
import {HeadComponent} from './list.header.component'
import {ItemComponent} from './list.item.component'
import {TaskModel} from './list.service';

import '../styles.styl';

angular.module("todoList", ['ngAnimate'])
    .component('list', ListComponent)
    .component('listHead', HeadComponent)
    .component('listItem', ItemComponent)
    .service('taskModel', TaskModel);
