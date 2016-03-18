(function () {
    function List (root){
        var conteiner = $('.container'),
            output = conteiner.find('.output'),
            items = ['hello',10,20,50000],
            input = conteiner.find('.fieldProduct'),
            addBtn = conteiner.find('.btn_add');



        function addItem () {
                addBtn.on('click', function (e) {
                    items.push(input.val());
                    render();
                });

        };

        function fetchData () {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'fruites',false);

            xhr.send();
            if(xhr.status != 200) {
                console.log(xhr.responseText);
            }else{
                items = JSON.parse(xhr.response);
            };
        };


        function render () {
            output.html(' ');
            items.forEach(function (item){
                var el = $('<li>',{
                    class: 'newLi',
                    text: item
                });
            output.append(el);
            });
        };


        fetchData();
        addItem();
        render();
    };
    var product = new List();
}())