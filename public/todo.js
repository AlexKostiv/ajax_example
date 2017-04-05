(function () {
    var BASE_TEMPLATE = '<div class="todo-list">'
            + '<div class="todo-list_header">{{header}}</div>'
            + '<div class="output">{{content}}</div>'
            + '</div>',
        HEADER_TEMPLATE = '<h2>{{header-text}}</h2>'
            +'<div class="todo-list_header-controlls">'
            +'<input class="todo-list_input" type="text">' 
            +'<input class="todo-list_btn" type="button" value="Add">'
            + '</div>',
         ITEM_TEMPLATE = '<div class="todo-list_item">'
            +'<div class="todo-list_item-title">{{title}} <input type="checkbox" {{cheked}}></div>'
            +'</div>';   

    function List (rootElement, header, api) {
        this._root = document.querySelector(rootElement);
        this._header = header;
        this._api = api;
        this._data = [];

        this._api.get(function (response) {
            this._data = response;
            renderList.call(this);
        }.bind(this));

        console.log("HEllo worlddasdasd")
    }

    List.prototype.init = init;
    List.prototype.render = render;



    function addListItem () {
        var title = this.input.value;
        var newItem = {
            title: title
        };

        this._api.post(function (responseData) {
            this._data.push(responseData);
            renderList.call(this);
        }.bind(this), newItem)
    }


    window.List = List;
})();

