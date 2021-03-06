var  ActionSignContract = React.createClass({
    step: 3,
    action: "signcontract",
    done: function(todoId) {
        let noteKey = this.action + "Note";
        let noteText = document.getElementById("note").value;
        updateTodo(todoId, noteKey, noteText)
        updateTodo(todoId, this.action, true);
        goToNextStep(this.step, todoId);
   },

    later: function(todoId) {
        updateTodo(todoId, this.action, false);
        window.location = "/#/start/"+todoId;
    },

    next: function(todoId) {
        let noteKey = this.action + "Note";
        let noteText = document.getElementById("note").value;
        updateTodo(todoId, noteKey, noteText)
        goToNextStep(this.step, todoId);
    },

    prev: function(todoId) {
        goToPrevStep(this.step, todoId);
    },

  render: function() {
    let todoId = this.props.params.todoId;
    let todo = getTodoObject(todoId);
    let note = getStepNote(todoId, this.action);

    if (todoId !== undefined) {
        var currentTodo = getTodoObject(todoId);
        var property = listings[currentTodo.listingId];
    }

    return (
      <div className="action-sign-contract" id="actionsigncontract">

        <HeaderCall 
            icon="fa-wpforms" 
            text="Sign the contract"
            description="Make sure your documents tidely prepared. Documents such as passport and visa is necessary for foreigner, We suggest you to make two bundle of it, with the other one as backup. "
            todoId={todoId}
        ></HeaderCall>

        <AgentInfo property={property} />
        <ActionNote note={note}></ActionNote>

        <ButtonControl
            done={todo[this.action]}
            onLater= {this.later}
            onDone={this.done}
            onNext={this.next}
            onPrev={this.prev}
            todoId={todoId}
        ></ButtonControl>
      </div>
    );
  }
});