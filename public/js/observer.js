/**
 * Created by IlyaLitvinov on 15.01.16.
 */
(function (window) {
    function EventEmiter () {
        this.subscribers = {}
    }
    EventEmiter.prototype.on = on;
    EventEmiter.prototype.emit = emit;
    EventEmiter.prototype.off = off;

    function on (event, callback) {
        if(typeof this.subscribers[event] === 'undefined') {
            this.subscribers[event] = []
        }
        this.subscribers[event].push(callback);

        return this.off(event, callback)
    }

    function emit (event, data, context) {
        var _context = context || window;

        if(typeof this.subscribers[event] === 'undefined') {
            this.subscribers[event] = [];
        }

        this.subscribers[event].forEach(function (item) {
            item.call(_context, data);
        });
    }

    function off(event, callback) {
        var self = this;

        return function unsub () {
            var subscribers = Object.assign({}, self.subscribers);

            subscribers[event] = subscribers[event].filter(function (handler) {
                return handler.toString() !== callback.toString();
            });

            !subscribers[event].length && (delete subscribers[event]);

            self.subscribers = Object.assign({}, subscribers);
        }
    }

    Object.assign(Object.prototype, new EventEmiter());
    Object.assign(Object.prototype, EventEmiter.prototype);

})(window);
