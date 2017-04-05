(function (window) {
    var BASE_TEMPLATE = '<div class="todo-list">'
            + '<div class="todo-list_header">{{header}}</div>'
            + '<div class="output">{{content}}</div>'
            + '<div class="todo-list_controls">'
            + '<input class="todo_list_control" type="radio" value="all" name="filter">ALL'
            + '<input class="todo_list_control" type="radio" value="completed" name="filter">COMPLETED'
            + '<input class="todo_list_control" type="radio" value="inProgress" name="filter">IN PROGRESS'
            +'</div>'
            + '</div>',
        HEADER_TEMPLATE = '<h2>{{header-text}}</h2>'
            +'<div class="todo-list_header-controlls">'
            +'<input class="todo-list_input" type="text">' 
            +'<input class="todo-list_btn" type="button" value="Add">'
            + '</div>',
         ITEM_TEMPLATE = '<div class="todo-list_item" id="{{id}}">'
            +'<div class="todo-list_item-title">{{title}} <input class="todo-list_checkbox" type="checkbox" {{cheked}}></div>'
            +'</div>';   

    function View (selector, listTitle) {
        window.EventEmiter.call(this);
        this._root = $(selector);
        this._listTitle = listTitle;
    }

    View.prototype = Object.create(window.EventEmiter.prototype);
    View.prototype.renderList = renderList;
    View.prototype.init = init;

    function init() {
        render.call(this);
        renderList.call(this);
        addEvents.call(this);
    }

     function render() {
        this._root.html(BASE_TEMPLATE.replace('{{header}}', renderHeader.call(this)));
        this.output = this._root.find('.output');
        this.input =  this._root.find('.todo-list_input');
    }

    function renderHeader() {
        return HEADER_TEMPLATE.replace('{{header-text}}', this._listTitle);
    }

    function renderList(dataList) {
        var _dataList = dataList || []
        var content = "";

        _dataList.forEach(function (el) {
            var item = ITEM_TEMPLATE.replace('{{title}}', el.title);
            item = item.replace('{{cheked}}', el.completed ? "checked" : "");
            item = item.replace('{{id}}', el.id);
            content += item;
        });

       this.output.html(content);
    }

    function addEvents () {
        var self = this;

        this._root.on('click', function (e) {
            console.log(e);
            if (e.target.classList.contains('todo-list_btn')) {
                addItem.call(self);
                 e.stopPropagation();
                // renderList.call(self);
            }
            if ($(e.target).hasClass('todo-list_checkbox')) { 
                toggleItem.call(self, $(e.target).closest('.todo-list_item').id);
                e.stopPropagation();
            }
            if($(e.target).hasClass('todo_list_control')) {
                filter.call(self, $(e.target).val());
                e.stopPropagation();
            }
        });
    }

    function addItem () {
         var title = this.input.val()
         var newItem = {
            title: title
        };

        this.trigger("VIEW:ADD_ITEM", newItem);
    }

    function toggleItem (id) {
        this.trigger("VIEW:TOGGLE_ITEM", Number(id));
    }

    function filter(filterParam) {
         this.trigger("VIEW:FILTER_ITEMS", filterParam);
    }

    // function addItem () {
    //      var title = this.input.val()
    //      var newItem = {
    //         title: title
    //     };

    //     this.trigger("VIEW:ADD_ITEM", newItem);
    // }

    window.list = window.list || {};
    window.list.View = View;
})(window);