/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function () {

    //Точка входа в приложение в этом месте инициализируются все сущности,
    //происходит первоначальное конфигурирование приложения
    function App () {
        this.model =  new app.Model();
        this.view =  new app.View();
        this.controller =  new app.Controller(this.model, this.view);
    }

    var app = new App();
})();
