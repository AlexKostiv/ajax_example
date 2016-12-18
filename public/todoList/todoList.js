class TodoList {

    constructor(options) {
        this.ajaxApi = options.ajaxApi;
        this.rootElement = $(options.rootEl);
        this.rootElVanila = document.querySelector(options.rootEl);
        this.listTitle = options.title;
        this.placeholder = options.placeholder;

        this.templateStatic = `<div class="todo_list">
            <div class="todo_list__head row">
                <h3 class="teal-text text-darken-2">{{listHeader}}</h3>
                <div class="todo_list__head_input input-field col s12">
                    <input class="todo_list__head_input__field" type="text">
                    <label for="todo_list__head_input__field">{{placeHolderText}}</label>
                </div>
            </div>
            <ul class="todo_list__section row">
            </ul>
        </div>`;
        this.templateItem = `<li class="card-panel todo_list__todo_item row" id="{{_id}}">
                   <div class="col s1 m1 l1 checkbox">
                       <input type="checkbox" id="{{input_id}}" {{checked}}/>
                       <label for="{{input_id}}"></label>
                   </div>
                   <div class="todo_list__todo_item__title">{{title}}</div>
                   <div class="todo_list__btn todo_list__btn_delete">X</div>
               </li>`;
        this.storageKey = null;

        this.renderView();

        this.input = $(this.rootElement).find('.todo_list__head_input__field');

        this.ul = $(this.rootElement).find('.todo_list__section');

        this.ajaxApi.fetchData(this.renderList.bind(this), '/list');

        this.handleEvents();

       // this.rootElVanila.addEventListener('click', function (eventObject) {
       //     console.log("Event fired");
       //     if(eventObject.target.classList.contains('todo_list__btn_delete')) {
       //         console.log("Deleted");
       //     }
       // });

    }

    renderView () {
        let appView = this.templateStatic.replace('{{listHeader}}', this.listTitle);

        appView = appView.replace('{{placeHolderText}}', this.listTitle);

        $(this.rootElement).html(appView);
    }


    renderList(list) {
        let output = '';

        list.forEach((item) => {
            output += this.renderOne(item);
        });


        $(this.ul).html(output);
    }

    renderOne (item) {
        let el = this.templateItem.replace('{{title}}', item.title);

        el = el.replace('{{_id}}', item.id);

        return el;
    }


    addItem (text) {
        let item = {
            title: text,
            completed: false
        };

        this.ajaxApi.sendData((newItemObj) => {
            let el = $("<div>");

            el.html(this.renderOne(newItemObj));

            this.ul.append(el.find('li').unwrap().fadeIn(1000));
        }, '/list', item)
    }
    deleteItem (id) {
        this.ajaxApi.deleteItem((resp) => {
            let target = $(this.rootElement).find('#'+id);

            target.fadeOut(1000, () => {
                target.remove();
            });
        },  '/list', id);
    }
    handleEvents () {
        $(this.input).on('keypress', (e) => {
            console.log(e);
            if(e.keyCode === 13) {
                this.addItem(this.input.val());
            }
        });

        $(this.ul).on('click', (e) => {
            if($(e.target).hasClass('todo_list__btn_delete')) {
                this.deleteItem($(e.target).parent().attr('id'));
            }
        });
    }

}

