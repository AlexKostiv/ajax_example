/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function () {

    //Точка входа в приложение в этом месте инициализируются все сущности,
    //происходит первоначальное конфигурирование приложения
    var app = new App();

    function App () {
        this.model =  new window.app.Model();
        this.view =  new window.app.View();
        this.controller =  new window.app.Controller(this.model, this.view);
    }


})();
