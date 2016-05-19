function CommentsForm (rootElement) {
	var rootElement = document.querySelector(rootElement),
		data,
		output = rootElement.querySelector('.output');

	function recieveData () {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'comment', false);
		xhr.send();

		if(xhr.status !== 200) {
		// Проверка на ошибку
			alert(xhr.status);
		} else {
			data = (JSON.parse(xhr.responseText));
		};
	};


	function sendData (newComment) {
		var xhr = new XMLHttpRequest();

		xhr.open('POST', 'comment', false);

		// xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.send();

		if(xhr.status !== 200) {
		// Проверка на ошибку
			alert(xhr.status);
		} else {
			debugger;
			data = (JSON.parse(xhr.responseText));
		};
	}
	sendData({
			author: 'dasdasd',
			'text':'asdfghjklkjhbgvfdcfvghjklkjhgfdfghjklkjhgf'
		});

	function render() {
		var title = document.createElement('p');

		data.forEach( function(item) {
			var li = document.createElement('li'),
				name = document.createElement('span'),
				date = document.createElement('span'),
				text = document.createElement('span'),
				number = document.createElement('span');

			number.innerHTML = item.id +1;
			date.innerHTML = item.date;
			name.innerHTML = item.author;
			text.innerHTML = item.text;

			li.appendChild(number);
			li.appendChild(name);
			li.appendChild(text);
			li.appendChild(date);

			output.appendChild(li);
		});
	}

	recieveData();
	render();
}

var myComment1 = new CommentsForm('.form1');
debugger;
var myComment2 = new CommentsForm('.form2');
var myComment3 = new CommentsForm('.form3');
