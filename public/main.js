( () => {
    const ajaxApi = new AjaxAPI('http://localhost:4001');
    const app = new TodoList({
        rootEl: ".container",
        title: "Todo list",
        placeholder: "Enter todo list...",
        ajaxApi
        // placeholderText: "Some cool todo list"
    });
    //
    // function _ () {
    //     function Constructor () {
    //         var i = 0;
    //
    //         this.test = function () {
    //             console.log("Test");
    //             return this;
    //         };
    //         this.add = function (num) {
    //             i += num;
    //             return this;
    //         };
    //         this.showCounter = function () {
    //             console.log(i);
    //             return this;
    //         };
    //         this.returnCounter = function () {
    //             return i;
    //         }
    //     }
    //
    //     return new Constructor();
    // }
    //
    // var el = $(".jquery_test");
    //
    // debugger;

})();