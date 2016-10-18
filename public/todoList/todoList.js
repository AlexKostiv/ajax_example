var TodoList = (function () {
    var templateStatic = `<div class="todo_list">
            <div class="todo_list__head row">
                <h3 class="teal-text text-darken-2">{{listHeader}}</h3>
                <div class="todo_list__head_input input-field col s12">
                    <input id="todo_list__head_input__field" type="text">
                    <label for="todo_list__head_input__field">{{placeHolderText}}</label>
                </div>
            </div>
            <ul class="todo_list__section row">
            </ul>
        </div>`,
        templateItem = `<li class="card-panel todo_list__todo_item row" id="{{_id}}">
                   <div class="col s1 m1 l1 checkbox">
                       <input type="checkbox" id="{{input_id}}" {{checked}}/>
                       <label for="{{input_id}}"></label>
                   </div>
                   <div class="todo_list__todo_item__title">{{title}}</div>
               </li>`,
        storageKey = null;

    function Constructor(options) {
        this.baseUrl = options.baseUrl;
        this.rootEl = document.querySelector(options.rootEl);
        this.header = options.headerText;
        this.placeholder = options.placeholderText;
        this.ajax = options.ajax;
        storageKey = options.storageKey || "list";

        this.data = [];

        this.init();
    }

    Constructor.prototype.renderStatic = function () {
        var widget = templateStatic.replace('{{listHeader}}', this.header);

        widget = widget.replace('{{placeHolderText}}', this.placeholder || "Enter todos");
        this.rootEl.innerHTML = widget;
    };

    Constructor.prototype.renderItems = function () {
        var self = this,
            list = "";

        this.data.forEach(function (item, i) {
            list += self.renderItem(item, i);
        });

        this.output.innerHTML = list;
    };

    Constructor.prototype.renderItem = function (object, i) {
        var listItem = templateItem.replace("{{_id}}", object.id);

        listItem = listItem.replace("{{checked}}", object.completed ? "checked='checked'" : "");
        listItem = listItem.replace(/\{\{input_id}}/g, (Date.now() + (i * 5)));
        listItem = listItem.replace("{{title}}", object.title);

        return listItem;
    };

    Constructor.prototype.init = function () {
        this.fetchData();
        this.renderStatic();
        this.output = this.rootEl.querySelector(".todo_list__section");
        this.renderItems();
        this.handleEvents();
        console.log("Hello world");
    };

    Constructor.prototype.handleEvents = function () {
        var self = this;

        this.rootEl.addEventListener("keypress", function (e) {
            var newItem = null;
            if (e.target.id === "todo_list__head_input__field" && e.keyCode === 13) {
                newItem = {
                    title: e.target.value
                };

                e.target.value = "";

                self.saveItem(newItem);
                self.renderItems();
            }
        });
    };

    Constructor.prototype.fetchData = function () {
        var self = this;

        this.ajax.get(this.baseUrl, function (responseFromServer) {
            self.data = responseFromServer;
            self.renderItems();
        });
        // this.data = ;
    };

    Constructor.prototype.saveItem = function (newItem) {
        var self = this;

        this.ajax.post(this.baseUrl, function (response) {
            self.data.push(response);
            self.renderItems();
        }, newItem);
    };

    function saveToStorage(dataForSave) {
        localStorage.setItem(storageKey, JSON.stringify(dataForSave));
    }

    function readFromStorage () {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    }

    return Constructor;
})();

