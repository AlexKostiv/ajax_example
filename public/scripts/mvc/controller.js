/**
 * Created by IlyaLitvinov on 27.12.16.
 */
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        debugger;

        this.init();
    }

    init() {
        this.view.subscribe("addItem", (data) => {
            this.model.addItem(data, (data)=> {
                this.view.renderList(data);
            });
        });
        this.model.subscribe("getItems", (data) => {
            this.view.renderList(data);
        })
    }
}