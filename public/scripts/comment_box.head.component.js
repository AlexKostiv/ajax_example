/**
 * Created by IlyaLitvinov on 18.01.17.
 * Данный фаил должен описывать компонет шапку с полями ввода и кнопкой добавления комментария
 */
(() => {
    console.warn("Comment box init init!");

    class Controller {
        constructor() {}

        someMethod(){}
    }

    const component = {
        template: `<!--Здесь опишите шаблон компонетна-->`,
        controller: Controller,
        bindings: {}
    };

    angular.module('commentBox')
        .component('commentBoxHead', component);
})();