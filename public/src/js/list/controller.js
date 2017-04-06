import EventEmiter from '../eventEmiter';

function Controller (view, model) {
    EventEmiter.call(this);
    this._view = view;
    this._model = model;
}

Controller.prototype = Object.create(EventEmiter.prototype);
Controller.prototype.init = init;
Controller.prototype.setData = setData;

function init () {
    this._view.init();
    this._model.init();
    subscribeToModelEvents.call(this);
    subscribeToViewEvents.call(this);
}

function subscribeToModelEvents () {
    this._model.on("MODEL:DATA_CHANGED", function (data) {
        this._view.renderList(data);
    }.bind(this));
}

function subscribeToViewEvents () {
    this._view.on("VIEW:ADD_ITEM", setData.bind(this));
    this._view.on("VIEW:TOGGLE_ITEM", toggleItem.bind(this));
    this._view.on("VIEW:FILTER_ITEMS", filter.bind(this));
}

function setData (item) {
        this._model.setData(item);
}

function toggleItem (id) {
        this._model.toggleItem(id);
}

function filter(param) {
    this._model.filterItems(param);
}

export {Controller}