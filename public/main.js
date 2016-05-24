/**
 * Created by IlyaLitvinov on 20.11.15.
 *
 */

$(document).ready(function () {

});


function Navbar(options) {
    //ваш код
}

var menu = new Navbar({
    menuItems: ["about", "contacts", "catalog", "sign in", "sign up"],
    callBack: someFunction,//функция которая будет вызываться при клике на елемент меню
    isRight: true, // опция которая указывает расположение елементов
    //меню с правого края страницы по умолчанию false
    isSearch: true // показывать или нет инпут с поиском
});
