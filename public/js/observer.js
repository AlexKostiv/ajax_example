/**
 * Created by IlyaLitvinov on 15.01.16.
 */
(function (window) {
    function observer() {
        var topics = {};

        this.subscribe = function (topic, listener) {
            // создаем объект topic, если еще не создан
            if (!topics[topic]) topics[topic] = {queue: []};

            // добавляем listener в очередь
            var index = topics[topic].queue.push(listener) - 1;

            // предоставляем возможность удаления темы
            return {
                remove: function () {
                    delete topics[topic].queue[index];
                }
            };
        };
        this.publish = function (topic, info) {
            // если темы не существует или нет подписчиков, не делаем ничего
            if (!topics[topic] || !topics[topic].queue.length) return;

            // проходим по очереди и вызываем подписки
            var items = topics[topic].queue;
            items.forEach(function (item) {
                item(info || {});
            });
        };
    }

    Object.prototype.observer = new Observer();
})(window);
