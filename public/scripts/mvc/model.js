/**
 * Created by IlyaLitvinov on 27.12.16.
 */
class Model {
    constructor(api) {
        this.data = [];
        this.api = api;
    }

    getItems(callback) {
        this.api.fetchData('http://localhost:4001/list', (data) => {
            this.data = data;
            callback(this.data)
        });
    }

    addItem(text, callback) {
        const newItem = {
            title: text,
            completed: false
        };

        this.api.addItem('http://localhost:4001/list', (savedItem) => {
            this.data.push(savedItem);

            callback(this.data);
        }, newItem);

    }

    removeItem(id) {
        let index = 0;
        this.api.deleteItem(`http://localhost:4001/list/${id}`, () => {
            this.data.forEach((item, i) => {
                if (Number(item.id) === Number(id)) {
                    index = i;
                }
            });
            this.data.splice(index, 1);
        });
    }

    completeItem (id) {
        let index = 0;

        this.data.forEach((item, i) => {
            if (Number(item.id) === Number(id)) {
                index = i;
            }
        });
        const updatedElement = this.data.slice(index, index+1)[0];
        updatedElement.completed = !updatedElement.completed;

        this.api.updateItem(`http://localhost:4001/list/${id}`, (response) => {
            debugger;
            this.data.splice(index, 1, updatedElement);
            // this.renderList();
        }, updatedElement);
    }

    subscribe(eventName, callback) {
        if(eventName === "getItems") {
            this.getItems(callback);
        }
    }
}