/**
 * Created by IlyaLitvinov on 18.10.16.
 */

class AjaxAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    fetchData(callback, uri) {
        $.ajax({
            method: "GET",
            url: this.baseUrl + uri
        }).done(callback);
    }

    /**
     * @param {Function} callback
     * @param {String} uri
     * @param {Object} newItem
     * @param {String} newItem.title
     * @param {Boolean} newItem.completed
     * */
    sendData(callback, uri, newItem) {
       $.ajax({
           method: "POST",
           url: this.baseUrl + uri,
           data: newItem
       }).done(callback)
    }
    deleteItem(callback, uri, id) {
        $.ajax({
            method: "DELETE",
            url: this.baseUrl + uri + '/' + id,
        }).done(callback)
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