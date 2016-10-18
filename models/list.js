/**
 * Created by IlyaLitvinov on 14.10.16.
 */
/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var _ = require('lodash');
var items = [
    {
        completed: false,
        title: "Test",
        id: Date.now()
    },
    {
        completed: true,
        title: "Test2",
        id: Date.now()+5
    }
    ];

var listModel = {
    setItem: function (data) {
        data.id = Date.now();
        data.completed = false;
        items.push(data);
        console.log('added to Array');
        return data;
    },
    getItems: function () {
        return items;
    },
    updateItem: function (data, id) {
        var index = items.indexOf(_.find(items, function (item) {
            return item.id === Number(id);
        }));
        data.date = new Date();
        data.id = id;

        items[index] = data;
        return items;
    },
    deleteItem: function (id) {
        var index = items.indexOf(_.find(items, function (item) {
            return item.id === id;
        }));

        if (index === -1) {
            return false;
        }

        return items.splice(index, 1);;
    }
};

module.exports = listModel;
