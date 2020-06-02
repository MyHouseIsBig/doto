import React from 'react';
import $ from "jquery";

class CreateTodoComponent extends React.Component {

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            var todo = document.getElementById("adddoto").value;

            let xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://localhost:4000/tasks", true);
            xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhttp.send(JSON.stringify({ "title": todo, "description": "Giallo Chiaro" }));
            $('.add-todo').val('');
            window.location.reload();

            var count = $(".list-group li").length;
            $('.count-todos').html(count);
        }
    }

    render() {
        return <input type="text" id='adddoto' className="form-control add-todo" placeholder="Add todo" onKeyDown={this._handleKeyDown} />
    }
}

export default CreateTodoComponent;