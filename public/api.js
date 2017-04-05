(function () {
    function Api (baseUrl) {
        console.log("Hello wolr");
        this.baseUrl = baseUrl;
    }

    Api.prototype.get = get;
    Api.prototype.post = post;
    Api.prototype.put = put;

    function get(callbackFunction) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.baseUrl, true);

        xhr.send();

        xhr.addEventListener('readystatechange', function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                callbackFunction(JSON.parse(xhr.response));
            }
        });
        // if(xhr.status === 200) {
        //     return JSON.parse(xhr.response);
        // }
    }

    function post (callbackFunction, data) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', this.baseUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.addEventListener('readystatechange', function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                callbackFunction(JSON.parse(xhr.response));
            }
        });
    }

     function put (callbackFunction, data, id) {
        var xhr = new XMLHttpRequest();

        xhr.open('PUT', this.baseUrl+'/'+id, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.addEventListener('readystatechange', function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                callbackFunction(JSON.parse(xhr.response));
            }
        });
    }

    window.Api = Api;
})();