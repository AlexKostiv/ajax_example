(function () {
    var app = new TodoList({
        rootEl: ".container",
        headerText: "Tasks",
        baseUrl: "http://localhost:4001/list",
        ajax: new Ajax()
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