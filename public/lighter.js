(function () {
    var self;
    var TEST = "HELLO WOLRD";

    function Lighter (selector) {
        self = this;

        this._parentElement = null;
        private: this._lights = null;
        this._isEnabled = true;
        
        this._outputElement = document.querySelector(selector || 'body');
        this.init();
    }

    Lighter.create = function () {
        return new Lighter();
    };

    Lighter.prototype.getTestConstant = function () {
        return TEST;
    }

     Lighter.prototype.switchOffAll = function () {
            
        this._lights.forEach(function (el) {
            el.classList.remove('active');
        });
    };

    Lighter.prototype.create = function () {
        var parentElement = document.createElement('div'),
            lights = this._createLights(),
            btnToggle = document.createElement('button');//[];
        
        btnToggle.classList.add('toggler');
        btnToggle.innerHTML = "ON/OFF";

        parentElement.classList.add('lighter');
        parentElement.appendChild(btnToggle);

        lights.forEach(function (el) {
            parentElement.appendChild(el);
        });

        this._parentElement = parentElement;
        this._lights = lights;

        this._outputElement.appendChild(parentElement);
    }

    Lighter.prototype._createLights = function () {
        var newElements = [],
            newElement = null,
            i = 0;
        for(i; i< 3; i++) {
            newElement = document.createElement('div');
            newElement.classList.add('lights');
            newElements.push(newElement);
        }

        newElements[0].classList.add('red');
        newElements[1].classList.add('yellow');
        newElements[2].classList.add('green');

        return newElements;
    }

    Lighter.prototype._hendleEvents = function () {
        this._parentElement.addEventListener('click', function (e) {
            if(e.target.classList.contains('lighter')) {
                return;
            }
            if(e.target.classList.contains('lights') && self._isEnabled) {
                self.switchOffAll();
                e.target.classList.add('active');
            }
            if(e.target.classList.contains('toggler')) {
                self._isEnabled = !self._isEnabled;
                if(!self._isEnabled) {
                    self.switchOffAll();
                }
                console.log(self._isEnabled);
            }
        });
    };

    Lighter.prototype.init = function () {
        this.create();
        this._hendleEvents();
    };

    window.Lighter = Lighter;
})();




