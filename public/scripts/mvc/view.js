/**
 * Created by IlyaLitvinov on 27.12.16.
 */
class View {
    constructor(rootEl, listTitle, placeHolderText) {
        this.listItemTemplate = `
            <li class="card-panel todo_list__todo_item row" id="{{_id}}">
                <div class="col s1 m1 l1 checkbox">
                    <input type="checkbox" id="{{input_id}}" {{checked}}/>
                    <label for="{{input_id}}" class="todo_list__checkbox"></label>
                </div>
                <div class="todo_list__todo_item__title">{{title}}</div>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons todo_list__btn_delete">X</i></a>
            </li>`;


        this.templateStatic = `<div class="todo_list">
                <div class="todo_list__head row">
                    <h3 class="teal-text text-darken-2">{{listHeader}}</h3>
                    <div class="todo_list__head_input input-field col s12">
                        <input class="todo_list__head_input__field" type="text" id="todo_list__head_input__field">
                        <label for="todo_list__head_input__field">{{placeHolderText}}</label>
                    </div>
                </div>
                <ul class="todo_list__section row">
                </ul>
            </div>`;

        this.rootEl = $(rootEl);
        this.listTitle = listTitle;
        this.placeHolder = placeHolderText;

        this.renderStatic();

        this.output = this.rootEl.find('.todo_list__section ');
        this.input = this.rootEl.find('.todo_list__head_input__field');
        debugger;

    }

    renderStatic() {
        const todoTemplate = this.templateStatic
            .replace('{{listHeader}}', this.listTitle)
            .replace('{{placeHolderText}}', this.placeHolder);

        this.rootEl.html(todoTemplate);
    }

    renderList(data) {
        let ouptutContent = '';
        debugger;
        data.forEach((item) => {
            ouptutContent += this.renderOneItem(item);
        });

        this.output.html(ouptutContent);
    }

    renderOneItem(item) {
        return this.listItemTemplate
            .replace('{{title}}', item.title)
            .replace('{{checked}}', item.completed ? 'checked' : '')
            .replace(/\{\{input_id}}/g, item.id)
            .replace('{{_id}}', item.id);
    }

    initEvents() {
        this.input.on('keypress', (e) => {
            if (e.keyCode === 13) {
                this.addItem(this.input.val());
                this.input.val('');
            }
        });
        this.output.on('click', (e) => {
            if (e.target.classList.contains('todo_list__btn_delete')) {
                const id = $(e.target).closest('li').attr('id');
                // this.removeItem(Number(id));
                this.renderList();
            }
            if($(e.target).hasClass('todo_list__checkbox')) {
                const id = $(e.target).closest('li').attr('id');
                // this.completeItem(Number(id));
                this.renderList();
            }
        })
    }

    subscribe(eventName, callback) {
        if(eventName === "addItem") {
            debugger;
            this.input.on('keypress', (e) => {
                console.log("test");
                if (e.keyCode === 13) {
                    callback(this.input.val());
                    this.input.val('');
                }
            });
        }
    }

}