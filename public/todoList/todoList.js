class TodoList {

    constructor(options) {
        this.ajaxApi = options.ajaxApi;
        this.rootElement = document.querySelector(options.rootEl);
        this.listTitle = options.title;
        this.placeholder = options.placeholder;

        this.templateStatic = `<div class="todo_list">
            <div class="todo_list__head row">
                <h3 class="teal-text text-darken-2">{{listHeader}}</h3>
                <div class="todo_list__head_input input-field col s12">
                    <input id="todo_list__head_input__field" type="text">
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
                   <div class="">X</div>
               </li>`;
        this.storageKey = null;

        this.renderView();

        this.ul = this.rootElement.querySelector('.todo_list__section');
        this.ajaxApi.fetchData(this.renderList.bind(this), '/list');
        this.addItem();
    }

    renderView () {
        let appView = this.templateStatic.replace('{{listHeader}}', this.listTitle);

        appView = appView.replace('{{placeHolderText}}', this.listTitle)
        console.log(appView);

        this.rootElement.innerHTML = appView;

    }


    renderList(list) {
        let output = '';

        list.forEach((item) => {
            debugger;
            let li = this.templateItem.replace('{{title}}', item.title);

            output += li;
        });


        this.ul.innerHTML = output;
    }

    addItem () {
        let item = {
            title: "asdasd",
            completed: false
        };

        this.ajaxApi.sendData((newItemObj) => {
            debugger
        }, '/list', item)
    }
}

