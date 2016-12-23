class API {
    fetchData(url, callback) {
        $.ajax({
            method: 'GET',
            url,
            success: (data) => {
                debugger;
                callback(data)
            },
            error: (e) => {
                throw new Error(e);
            }
        });
    }

    addItem(url, callback, data) {
        $.ajax({
            method: 'POST',
            url,
            data,
            success: (data) => {
                callback(data)
            },
            error: (e) => {
                throw new Error(e.responseText);
            }
        });
    }

    deleteItem(url, callback) {
        $.ajax({
            method: 'DELETE',
            url,
            success: (data) => {
                callback(data)
            },
            error: (e) => {
                throw new Error(e.responseText);
            }
        });
    }

    updateItem(url, callback, data) {
        debugger;
        $.ajax({
            method: 'PUT',
            url,
            data,
            success: (data) => {
                callback(data)
            },
            error: (e) => {
                throw new Error(e.responseText);
            }
        });
    }
}