/**
 * Created by IlyaLitvinov on 18.10.16.
 */

class AjaxAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    fetchData(callback, uri) {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", this.baseUrl + uri, true);

        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState === 4) {
                if(xhr.status !== 200) {
                    alert("Error!");
                }

                callback(JSON.parse(xhr.response));
            }
        });
    }

    /**
     * @param {Function} callback
     * @param {String} uri
     * @param {Object} newItem
     * @param {String} newItem.title
     * @param {Boolean} newItem.completed
     * */
    sendData(callback, uri, newItem) {
        const xhr = new XMLHttpRequest();

        xhr.open("POST", this.baseUrl + uri, true);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(JSON.stringify(newItem));

        xhr.addEventListener('readystatechange', function () {
            if(this.readyState === 4) {
                if(this.status !== 200) {
                    alert("Error!");
                }

                callback(JSON.parse(xhr.response));
            }
        });
    }
}
// var Ajax = (function () {
//     function Constructor (baseUrl) {
//         // this.baseUrl = baseUrl;
//     }
//
//     Constructor.prototype.get = function (url, callback) {
//         var xhr = new XMLHttpRequest();
//
//         xhr.open("GET", url, true);
//
//         xhr.send();
//
//         xhr.addEventListener('readystatechange', function () {
//             if(this.readyState === 4) {
//                 if(this.status !== 200) {
//                     alert("Error!");
//                 }
//
//                 callback(JSON.parse(xhr.response));
//             }
//         });
//     };
//
//     Constructor.prototype.post = function (url, callback, newItem) {
//         var xhr = new XMLHttpRequest();
//
//         xhr.open("POST", url, true);
//
//         xhr.setRequestHeader("Content-Type", "application/json");
//
//         xhr.send(JSON.stringify(newItem));
//
//         xhr.addEventListener('readystatechange', function () {
//             if(this.readyState === 4) {
//                 if(this.status !== 200) {
//                     alert("Error!");
//                 }
//
//                 callback(JSON.parse(xhr.response));
//             }
//         });
//     };
//
//     return Constructor
// })();