/**
 * Created by IlyaLitvinov on 02.10.16.
 */
var TodoList = (function () {
    var STORAGE_NAME = "listStorage";

    function Constructor(root, options, ajax) {
        debugger;
        this.ajax = ajax;
        this._options = options || {title: "ToDoList"};
        this.rootEl = document.querySelector(root);
        this._data =  [];

        this.headTemplate = `<div class="todo_list__head">
            <h2>{{listTitle}}</h2>
            <input type="text" placeholder="enter your name">
            <div class="todo_list__comment_field" contenteditable="true">
            </div>
            <div class="todo_list__btn_add">Add comment</div>
            </div>
            <div class = "todo_list__output"></div>`;
        this.commentTemplate = `<div  id ="{{id}}"><div class = "todo_list__item_title">{{title}}</div>
            <div class="todo_list__item_description">{{description}}</div>
             <div class="btn_delete">X</div></div>
            `;
        this.outputEl = null;
        this.authorInput = null;
        this.commentInput = null;
        this.addBtn = null;

        this.init();
    }


    Constructor.prototype.init = function () {
        var self = this;
        this.renderStatic();

        this.outputEl = this.rootEl.querySelector(".todo_list__output");
        this.authorInput = this.rootEl.querySelector(".todo_list__head > input");
        this.commentInput = this.rootEl.querySelector(".todo_list__comment_field");
        this.addBtn = this.rootEl.querySelector(".todo_list__btn_add");

        this.ajax.get('comments', function (data) {
            self._data = data;
            self.handleEvents();
            self.renderAll();
        });

    };

    Constructor.prototype.renderStatic = function () {
        this.rootEl.innerHTML = this.headTemplate.replace("{{listTitle}}", this._options.title);
    };

    Constructor.prototype.renderAll = function () {
        var self = this;

        this.outputEl.innerHTML = this._data.map(function (item) {
            return self.renderOne(item);
        }).join('');
    };

    Constructor.prototype.renderOne = function (itemObject) {
        var out = this.commentTemplate.replace("{{title}}", itemObject.author);

        out = out.replace("{{description}}", itemObject.commentText);
        out = out.replace("{{id}}", itemObject.id);

        return out;
    };

    Constructor.prototype.handleEvents = function () {
        var self = this;

        this.addBtn.addEventListener("click", function () {
            self.addComment();
        });

        this.outputEl.addEventListener("click", function (e) {
            if (e.target.classList.contains('btn_delete')) {
                self._data.splice(findElById(self._data, e.target.parentNode.id), 1);
                self.renderAll();
            }
        })
    };

    Constructor.prototype.addComment = function () {
        var model = {
            author: this.authorInput.value.trim(),
            commentText: this.commentInput.textContent.trim(),
            id: Date.now()
        };
        var self = this;

        debugger;

        this.ajax.post("comments", function (data) {

            debugger;
            self._data = data;
            self.clearInputs();
            self.renderAll();
        }, model);

    };

    Constructor.prototype.clearInputs = function () {
        this.authorInput.value = "";
        this.commentInput.innerHTML = "";
    };

    function findElById (arr, id) {
        var targetObj = arr.filter(function (item) {
            return item.id === parseInt(id);
        })[0];

        return arr.indexOf(targetObj);
    }

    function saveToStorage (key, arrToSave) {
        localStorage.setItem(key, JSON.stringify(arrToSave));
    }

    function readFromStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    return Constructor;
})();

