(function (window) {
    function Model(api) {
        window.EventEmiter.call(this);
        this._api = api;
        this._data = [];
    }

    Model.prototype = Object.create(window.EventEmiter.prototype);
    Model.prototype.init = function () {
        this._api.get(function (data) {
            this._data = data;
            this.trigger("MODEL:DATA_RECIEVD", data);
        }.bind(this));
    };
    Model.prototype.add = add;

    function add (text) {
        var newItem = {
            title: text,
            completed: false
        };


        this._api.post(function (responseData) {
            this._data.push(responseData);
            this.trigger("MODEL:ITEM_ADDED", this._data);
        }.bind(this), newItem);
    }


    window.Model = Model;
})(window);

