(function () {
    /**
     * 
     * @param {*} setting 
     * @param {String} setting.header
     * @param {String[]} setting.options
     * @param {String} setting.target
     */
    var TEMPLATE_BASE = '<div class="toggle dropdown__header">{{header}}</div><div class="dropdown__options">{{options}}</div>';
    var TEMPLATE_OPTION = '<div class="items">{{option}}</div>';
    function Dropdown(setting) {
        this._open = false;
        this._header = setting.header;
        this._options = setting.options;
        this._rootEl = $(setting.target);
        this.headerElement = null;
    }

    Dropdown.prototype.init = init;

    function init () {
        create.call(this);
        $(this._rootEl).find('.dropdown__options').slideUp(0);
        handleEvents.call(this);
    }
    function create () {
        var content = TEMPLATE_BASE.replace('{{header}}', this._header);
        content = content.replace('{{options}}', createOptions(this._options));
        $(this._rootEl).addClass('dropdown');
        $(this._rootEl).html(content);
    }

    function createOptions (options) {
        var innerHtml = '';
        options.forEach(function (option) {
            innerHtml += TEMPLATE_OPTION.replace('{{option}}', option);
        });

        return innerHtml;
    }

    function handleEvents () {
        var self = this;
        this._rootEl.on('click', function (e) {
            if($(e.target).hasClass('dropdown__header')) {
                self._open = !self._open;
                $(self._rootEl)
                    .toggleClass('open')
                    .find('.dropdown__options')
                    .slideToggle(1000);
            }
             if($(e.target).hasClass('items')) {
                 $(e.target).hide(1000, function () {
                     $(e.target).show(1000);
                 });
             }
        });
    }

    window.Dropdown = Dropdown;
})()