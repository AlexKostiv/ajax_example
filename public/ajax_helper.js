var AJAX = (function () {
    function Ajax(baseUrl) {
        this.baseUrl = baseUrl;
    }

    Ajax.prototype.get = function (url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.baseUrl + url, true);

        xhr.send();

        xhr.addEventListener('readystatechange', function () {

            if (this.readyState !== 4) {
                return;
            }

            if (this.status === 200) {
                callback(JSON.parse(this.response));
            }
        });

        console.log("Hello test");
    };

    Ajax.prototype.post = function (url, callback, data) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', this.baseUrl + url, true);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify(data));

        xhr.addEventListener('readystatechange', function () {

            if (this.readyState !== 4) {
                return;
            }

            if (this.status === 200) {
                callback(JSON.parse(this.response));
            }
        });

        console.log("Hello test");
    };

    return Ajax;

})()
;
