(function (window) {
    function Model(api) {
        window.EventEmiter.call(this);
        this._api = api;
        this._data = [];
        this.filter = 'ALL';
    }

    Model.prototype = Object.create(window.EventEmiter.prototype);
    Model.prototype.init = function () {
        this._api.get(function (data) {
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

        this._api.post(function (responseData) {
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

    window.Model = Model;
})(window);

