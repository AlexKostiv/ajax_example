(function () {
    var AJAX = {
        get: function (url, callback) {
            var xhr = new XMLHttpRequest();
    
            xhr.open('GET', url, true);

            xhr.send();
            xhr.onreadystatechange = function () {
            if (this.readyState != 4) {
                console.log(this.readyState);
                return;
            };

            // по окончании запроса доступны:
            // status, statusText
            // responseText, responseXML (при content-type: text/xml)

            if (this.status != 200) {
                // обработать ошибку
                console.log('Error');
                return;
            }

            console.log(xhr.response);
            callback(JSON.parse(xhr.response));
            // получить результат из this.responseText или this.responseXML
            };
        },

        post: function (url, newData, callback) {
                var xhr = new XMLHttpRequest();

                xhr.open('POST', url, false);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xhr.send(JSON.stringify( {'fruite': newData}));

                xhr.onreadystatechange = function () {
                    if(this.readyState != 4){
                        console.log(this.readyState);
                    }
                }
                
                if(xhr.status != 200){
                    console.log(xhr.responseText);
                    return;
                };
                callback(JSON.parse(xhr.response));
            },

        put: function (url, id, text, callback ) {
                var xhr = new XMLHttpRequest(),
                newText = {'fruite': text};

                xhr.open('PUT', url+'/'+id, false);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xhr.send(JSON.stringify(newText));

                xhr.onreadystatechange = function () {
                    if(this.readyState != 4){
                        console.log(this.readyState);
                    }
                }

                if(xhr.status != 200){
                    console.log(xhr.responseText);
                    return;
                };
                callbback(JSON.parse(xhr.response));
            },

        del: function (url, callback) {
                var xhr = new XMLHttpRequest();
                var delT = {};
                xhr.open('DELETE', url, false);
                xhr.send();

                xhr.onreadystatechange = function () {
                    if(this.readyState != 4){
                        console.log(this.readyState);
                    }
                }

                if(xhr.status != 200){
                    console.log(xhr.responseText)
                    return;
                };
             callbback(JSON.parse(xhr.response));
            }
        }

    function List (root){
        var conteiner = $('.container'),
            output = conteiner.find('.output'),
            items = ['hello',10,20,50000],
            input = conteiner.find('.fieldProduct'),
            addBtn = conteiner.find('.btn_add');

//----------------- принятие данных ----------------------

        function addItem () {
                addBtn.on('click', function (e) {
                    sendData(input.val());
                    // items.push(input.val());
                    render();
                });
        };

        function fetchData () {
            AJAX.get('fruites', function (response) {
                 items = response;
                 render();
            });
        };


//------------------- Отправка данных ! ------------------------

        function sendData (newData) {
            items = AJAX.post('fruites', newData)
        };
// ------------------ Удаление -------------------------------------

        function deleteDate (id) {
            items = AJAX.del('fruites/'+id)
        };

// --------------------- chenges ------------------------------------


        function chengeData (text, id) {
            items = AJAX.put('fruites', id, text)
        };

// ----------------------- render -----------------------------------

        function render () {
            output.html(' ');
            input.val('');
            items.forEach(function (item, i){
                var el = $('<li>',{
                    class: 'newLi',
                    id: i
                });
                var span_li = $('<span>'
                    + item +'</span><input class="input_li hidden"><button class="dlt_btn">Delete</button>');

                $(span_li[0]).on('dblclick', function () {
                    var text = $(this).text();
                    $(this).addClass('hidden').siblings().removeClass('hidden');                        

                     $(span_li[1]).val(text).focus();
                     debugger;
                });

                $(span_li[1]).on('blur', function () {
                    var text = $(this).val();
                        chengeData(text, i);
                        render();

                });

                $(span_li[2]).on('click', function () {
                    deleteDate(i);
                    render();
                });
                el.append(span_li);
            output.append(el);
            });
        };

        fetchData();
        addItem();
        render();
    };
    var product = new List();
}())