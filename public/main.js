import Controller from './todolist/controller';
import Model from './todolist/model';
import View from './todolist/view';

var model = new Model();
var view = new View('.test');
var control = new Controller(view, model);
control.init();