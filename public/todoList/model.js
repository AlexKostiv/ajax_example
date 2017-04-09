import EventEmiter from './eventEmiter';
import Api from '../api';

function Model() {
    EventEmiter.call(this);
    this.api = new Api('http://localhost:4001/list');
    this._data = [];
    this.filter = 'COMPLETED';
}

Model.prototype = Object.create(EventEmiter.prototype);
Model.prototype.init = function () {
    this.api.get(function (data) {
        this._data = data;
        this.trigger("MODEL:DATA_CHANGED", filter.call(this));
    }.bind(this));
};
Model.prototype.add = add;
Model.prototype.filterItems = filterItems;

function add(text) {
    var newItem = {
        title: text,
        completed: false
    };

    this.api.post(function (responseData) {
        this._data.push(responseData);
        this.trigger("MODEL:DATA_CHANGED", filter.call(this));
    }.bind(this), newItem);
}

function filter() {
    if (this.filter === 'ALL') {
        return  this._data;
    }

    if (this.filter === 'COMPLETED') {
       return this._data.filter(function (item) {
            return item.completed === true;
        });
    }

    if (this.filter === 'IN_PROGRESS') {
       return this._data.filter(function (item) {
            return item.completed === false;
        });
    }
}


function filterItems(filterName) {
    this.filter = filterName;

    this.trigger("MODEL:DATA_CHANGED", filter.call(this));
}

export default Model;

