(function () {
    var BASE_TEMPLATE = '<div class="todo-list">'
            + '<div class="todo-list_header">{{header}}</div>'
            + '<div class="output">{{content}}</div>'
                + '<div class="footer">'
                    + '<input class="filter" type="radio" value="ALL" name="filter"/><span>ALL</span>'
                    + '<input class="filter" type="radio" value="COMPLETED" name="filter"/><span>Completed</span>'
                    + '<input class="filter" type="radio" value="IN_PROGRESS" name="filter"/><span>In Progress</span>'
                +'</div>'
            + '</div>',
        HEADER_TEMPLATE = '<h2>{{header-text}}</h2>'
            +'<div class="todo-list_header-controlls">'
            +'<input class="todo-list_input" type="text">'
            +'<input class="todo-list_btn" type="button" value="Add">'
            + '</div>',
        ITEM_TEMPLATE = '<div class="todo-list_item">'
            +'<div class="todo-list_item-title">{{title}} <input type="checkbox" {{cheked}}></div>'
            +'</div>';

    function View (rootElement, header) {
        EventEmiter.call(this);
        this._root = document.querySelector(rootElement);
        this._header = header || "Todo list";

        console.log("HEllo worlddasdasd")
    }

    View.prototype = Object.create(EventEmiter.prototype);
    View.prototype.init = init;
    View.prototype.render = render;
    View.prototype.renderList = renderList;

    function init() {
        this.render();
        renderList.call(this);
        addEvents.call(this);
    }

    function render() {
        this._root.innerHTML = BASE_TEMPLATE.replace('{{header}}', renderHeader.call(this));
        this.output = this._root.querySelector('.output');
        this.input =  this._root.querySelector('.todo-list_input');
    }

    function renderHeader() {
        return HEADER_TEMPLATE.replace('{{header-text}}', this._header);
    }

    function renderList(data) {
        var _data = data || [];
        var content = "";

        _data.forEach(function (el) {
            var item = ITEM_TEMPLATE.replace('{{title}}', el.title);
            item = item.replace('{{cheked}}', el.isCompleted ? "checked" : "");
            content += item;
        });

        this.output.innerHTML = content;
    }

    function addEvents () {
        var self = this;

        this._root.addEventListener('click', function (e) {
            console.log(e);
            if (e.target.classList.contains('todo-list_btn')) {
                addListItem.call(self);
            }
            if(e.target.classList.contains('filter')) {
                filterItems.call(self, e.target.value);
            }
        })
    }

    function filterItems (filterName) {
        this.trigger('VIEW:FILTER_ITEMS', filterName);
    }

    function addListItem () {
        this.trigger('VIEW:ADD_ITEM', this.input.value)
    }


    window.View = View;
})();

