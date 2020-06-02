import React from 'react';

//* INIZIO FUNZIONI DEL TODO =>
import Todo from '../sortableComponent/SortableComponent';
import CreateTodoComponent from '../createTodoComponent/CreateTodoComponent';
import MarkTaskDone from '../markTaskDone/MarkTaskDone';

//* INIZIO RENDERING DELL'HTML DELLA PAGINA =>
function Homepage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="todolist not-done">
            <h1>Todos</h1>
            <CreateTodoComponent />
            <MarkTaskDone />

            <hr />
            <Todo />
            <div className="todo-footer">
              <strong><span className="count-todos"></span></strong> Items Left
                </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="todolist">
            <h1>Already Done</h1>
            <ul id="done-items" className="list-unstyled">
              <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;