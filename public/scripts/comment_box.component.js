/**
 * Created by IlyaLitvinov on 18.01.17.
 * Компонент который будет отвечать за виджет комментарие
 * Должен состоять из двух дополнительных компонентов head и content
 * <div>
 *     <comment-box--head></comment-box--head>
 *     <comment-box--content></comment-box--content>
 * </div>
 */
(() => {
    console.warn("App init!");
    class Controller {
        constructor() {}

        someMethod(){}
    }

    const component = {
        template: `
        <div>
            Comment box
            <!--<comment-box-head></comment-box-head>
            <comment-box-content></comment-box-content>-->
        </div>`,
        controller: Controller,
        bindings: {}
    };
    angular.module('commentBox')
        .component('commentBox', component);
})();