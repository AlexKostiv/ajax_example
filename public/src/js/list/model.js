import EventEmiter from '../eventEmiter';

function Model (api) {
    EventEmiter.call(this);
    this._api = api;
    this._data = [];
    this._filterParam = 'all';
}

Model.prototype = Object.create(EventEmiter.prototype);
Model.prototype.getData = getData;
Model.prototype.setData = setData;
Model.prototype.toggleItem = toggleItem;
Model.prototype.filterItems = filterItems;
Model.prototype.init = init;

function init() {
    getData.call(this);
}
function getData() {
    this._api.get(function (data) {
        this._data = data;
        this.trigger("MODEL:DATA_CHANGED", this._data);
    }.bind(this));
    
}
/**
 * 
 * @param {Object} newItem 
 * @param {String} newItem.title
 * @param {Boolean} newItem.completed
 * @param {Number} newItem.id
 */
function setData(newItem) {
    this._api.post(function (responsData) {
        this._data.push(responsData);
        this.trigger("MODEL:DATA_CHANGED", this._data);
    }.bind(this), newItem)
}

function toggleItem (id) {
    var index = 0
    this._data.forEach(function (item, i) {
        if (item.id === id) {
            index = i;
        }
    });
    var updateItem = this._data[index];

    updateItem.completed = !updateItem.completed;

    this._api.put(function (updatedItem) {
        this._data[index] = updatedItem;
    }.bind(this), updateItem, updateItem.id);
}

function filterItems (param) {
    this._filterParam = param;
    var result = _filter.call(this)
    this.trigger('MODEL:DATA_CHANGED', result)
}

function _filter() {
    if (this._filterParam === 'all' ) {
        return this._data;
    }

    var filterStrategy = {
        'completed': true,
        'inProgress': false
    };
    var output = [];

    this._data.forEach(function (item) {
        if(item.completed === filterStrategy[this._filterParam]) {
            output.push(item);
        }
    }.bind(this));

    return output;
}

export {Model};