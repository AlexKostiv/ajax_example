(function () {
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
            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'fruites', false);

            xhr.send();
            if(xhr.status != 200) {
                console.log(xhr.responseText);
            }else{
                items = JSON.parse(xhr.response);
            };
        };

//------------------- Отправка данных ! ------------------------

        function sendData (newData) {
            var xhr = new XMLHttpRequest();
            var newT = {'fruite': newData};

            xhr.open('POST', 'fruites', false);

            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            xhr.send(JSON.stringify(newT));
            
            if(xhr.status != 200){
                console.log(xhr.responseText);
            }else{
                items = JSON.parse(xhr.response);
            };
        };
// ------------------ Удаление -------------------------------------

        function deleteDate (id) {
            var xhr = new XMLHttpRequest();
            var delT = {};

            xhr.open('Delete', 'fruites/'+id, false);

            xhr.send();

            if(xhr.status != 200){
                console.log(xhr.responseText);
            }else{
                items = JSON.parse(xhr.response);
            };
        };

        function chengeDate (text, id) {
          
              var xhr = new XMLHttpRequest();
            var newText = {'fruite': text};

            xhr.open('PUT', 'fruites/'+id, false);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(JSON.stringify(newText));

            if(xhr.status != 200){
                console.log(xhr.responseText);
            }else{
                items = JSON.parse(xhr.response);
            };
        };

        function render () {
            output.html(' ');
            items.forEach(function (item, i){
                var el = $('<li>',{
                    class: 'newLi',
                    id: i
                });
                var span_li = $('<span>'
                    + item +'</span><input class="input_li"><button>DELETE</button>');

                $(span_li[0]).on('dblclick', function () {
                    var text = $(this).text();
                    debugger;
                     $(span_li[1]).val(text).focus();
                });

                $(span_li[1]).on('blur', function () {
                    var text = $(this).val();
                        chengeDate(text, i);
                        render();

                });

                $(span_li[2]).on('click', function () {
                    console.log(i)
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