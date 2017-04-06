import { Controller, Model, View } from './js/list/index';
import { Api } from './js/api';

var api = new Api('http://localhost:4001/list');
var model = new Model(api);
var view = new View('.test');
var controller = new Controller(view, model);
controller.init();