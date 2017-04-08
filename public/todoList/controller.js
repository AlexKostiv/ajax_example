/**
 * Created by IlyaLitvinov on 08.04.17.
 */
(function () {
    function Controller (view, model) {
        this._view = view;
        this._model = model;
    }
    Controller.prototype.init = init;

    function init () {
        subscribeToModelEvents.call(this);
        subscribeToViewEvents.call(this);
        this._view.init();
        this._model.init();
    }

    function subscribeToModelEvents () {
        this._model.on('MODEL:DATA_RECIEVD', function (data) {
            this._view.renderList(data);
        }.bind(this));
        this._model.on('MODEL:ITEM_ADDED', function (data) {
            this._view.renderList(data);
        }.bind(this));
    }

    function subscribeToViewEvents () {
        this._view.on('VIEW:ADD_ITEM', function (text) {
            this._model.add(text);
        }.bind(this));
    }

    window.Controller = Controller;

})();