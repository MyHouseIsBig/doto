import React from 'react';
import $ from "jquery";

class MarkTaskDone extends React.Component {

    _handleClick = () => {
        let myArray = [];

        $('.list-group li').each(function () {
            myArray.push($(this).text());
        });

        // add to done
        let i;
        for (i = 0; i < myArray.length; i++) {
            $('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
        }

        // myArray
        $('.list-group li').remove();
        var count = $(".list-group li").length;
        $('.count-todos').html(count);
    }

    render() {
        return <button id="checkAll" className="btn btn-success" onClick={this._handleClick} >Mark all as done</button>
    }
}

export default MarkTaskDone;