(function () {
    $('.test')
        .wrap('<div class="wrapper"></div>')
        .wrap('<div class="wrapper2"></div>')
        .html("<h2>Hello wolrd</h2>")
        .css({background: 'red'})
        .height('200px')
        .slideUp(2000)
        .slideDown(2000)
        .hide(1500)
        .show(1500)
        .fadeIn(1500)
        .fadeOut(1500);
    
    $.ajax({
        method: 'GET',
        url: 'http://localhost:4001/comments'
    }).done(function (resp) {
        console.log(resp);
    }).catch(function (e) {
        console.log(e);
    })


    // function hello$ (selector) {
    //     function JQuery(selector) {
    //         this.counter = 0;
    //         this._element = document.querySelector(selector);
    //     }

    //     JQuery.prototype.addClass = addClass;
    //     JQuery.prototype.increase = increase;
    //     JQuery.prototype.decrease = decrease;

    //     function addClass (newClass) {
    //         this._element.className = this._element.className + ' ' + newClass;
    //         return this;
    //     }

    //     function decrease() {
    //         console.log(--this.counter);
    //         return this;
    //     }

    //     function increase() {
    //         console.log(++this.counter);
    //         return this;
    //     }

    //     return new JQuery(selector);
    // }
    // hello$('.test')
    //     .addClass("Hello world")
    //     .increase()
    //     .increase()
    //     .increase()
    //     .decrease();

})();