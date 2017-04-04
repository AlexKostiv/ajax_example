(function (window) {
    var template = '<div>{{text}}</div><div>{{author}}</div>'
    function List (root) {
        this.root = document.querySelector(root);
        this.data = [];
    }
    List.prototype.renderList = function () {
        var listContent = "";

        this.data.forEach(function (item) {
            var listItem = template.replace('{{text}}', item.text)
            listItem = listItem.replace('{{author}}', item.author);

            listContent += listItem;
        });

        this.root.innerHTML = listContent;
    }

    window.List = List;
})(window)