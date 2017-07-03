(function () {
  class List {
    constructor(options) {
      this._apiUrl = 'http://localhost:4001/list';
      this._staticTemplate = `
        <div class="list-header">
           <input type="text" class="input-text">
           <input type="button" class="input-btn" value="Add">
        </div>
        <div class="list-content"></div>
      `;

      this._itemTenplate = `<div class="list-item">{{text}}</div>`;
      this._rootElement = document.querySelector(options.containerSelector);
      this.todos = [];
      this._init();
    }

    _render() {
      this._rootElement.innerHTML = this._staticTemplate;
      this._listContent = this._rootElement.querySelector('.list-content');
      this._inputText = this._rootElement.querySelector('.input-text');
    }

    _renderList() {
      let output = '';

      this.todos.forEach(item => {
        output += this._itemTenplate.replace('{{text}}', item.title);
      });

      this._listContent.innerHTML = output;
    }

    _fetchData() {
      Ajax.get(this._apiUrl, (response)=> {
        this.todos = this.todos.concat(response);
        this._renderList()
      });
    }

    _attachEvents() {
      this._rootElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('input-btn')) {
          console.log('Add event handler');
          this._addItem();
        }
      })
    }

    _addItem() {
      const requestData = {
        title: this._inputText.value
      };

      Ajax.post( this._apiUrl , requestData, (resp) => {
        this.todos.push(resp);
        this._renderList();
      }, (e) => {
        throw Error(e.error);
      })
    }

    _init() {
      this._render();
      this._attachEvents();
      this._fetchData();
    }
  }

  window.App = window.App || {};
  window.App.List = List;
})();