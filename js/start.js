let StartTodoItem = React.createClass({


  render: function() {
    let key = this.props.text.name;
    let text = this.props.text.text;

    let icon = (true === getTodoObject(this.props.todoId)[key]) ? 'fa fa-check-square-o' : 'fa fa-square-o';

    return (
        <li className="start-list-item">
            <Link to={key + "/" +  this.props.todoId}>
                <div>
                    <div className="col-xs-2 text-right action-start-task-checkbox">
                        <i className={icon} aria-hidden="true"></i>
                    </div>
                    <div className="col-xs-10 text-left">{text}</div>
                </div>
            </Link>
        </li>);
  }
});

let StartTodoList = React.createClass({
  render: function() {
    let todoText = this.props.todosText;
    let todoId = this.props.todoId;
    let completeTodos = getTodoCompletion(todoId);
    let rows = todoText.map(function(text) {
      return (<StartTodoItem text={text} todoId={todoId}/>);
    });
    return (
      <div className="text-center">
        <div className="col-xs-4"></div>
        <div className="col-xs-6"><ul className="list-no-style">{rows}</ul></div>
        <div className="col-xs-2"></div>
        <div className="clearfix"></div>
        <div className="col-xs-4"></div>
        <div className="col-xs-4 padding-top-40">
            <ProgressBar valuenow={completeTodos} />
        </div>
        <div className="col-xs-4"></div>
      </div>
    );
  }
});

let Start = React.createClass({
  
  goHome : function() {
      window.location = "/";
  },

  render: function() {
    let todoId = this.props.params.todoId;
    return (
      <div>
        <HeaderCall
            icon="fa-star"
            text="Start your progress"
            description="Your dream home is a few steps away. Please follow the guides to easy your progress. Don't forget to always look to our Guru Tips in each step."
            todoId={todoId}
        ></HeaderCall>
        <StartTodoList todosText={todosText} todoId={todoId}/>

        <div className="clearfix"></div>

        <div className="row padding-top-40 ">
            <div className="col-xs-4">&nbsp;</div>
            <div className="col-xs-4 text-center">
                <button onClick={this.goHome} type="button" className="btn btn-primary btn-lg btn-block" aria-label="Left Align">Back</button>
            </div>
            <div className="col-xs-4 text-center">
                &nbsp;
            </div>
        </div>  
        
      </div>
    );
  }
});