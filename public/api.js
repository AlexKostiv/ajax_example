
function Api (url) {
    console.log("Hello wolr");
    this.url = url;
}

Api.prototype.get = get;
Api.prototype.post = post;

function get(callbackFunction) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', this.url, true);

    xhr.send();

    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callbackFunction(JSON.parse(xhr.response));
        }
    });
    // if(xhr.status === 200) {
    //     return JSON.parse(xhr.response);
    // }
}

function post (callbackFunction, data) {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:4001/list', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.addEventListener('readystatechange', function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            callbackFunction(JSON.parse(xhr.response));
        }
    });
}

export default Api;