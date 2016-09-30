var ListingComponent = React.createClass({
  render: function() {
    var todo = this.props.todo;
    var listing = listings[todo.listingId];

    var completeTodos = getTodoCompletion(todo.id);

    return (
      <li className="row">
        <div className="col-xs-offset-2 col-xs-4 text-left">
            <span><Link to={"start/" + todo.id} todoId={todo.id}>{listing.name}</Link></span>
        </div>
        <div className="col-xs-4">
            <ProgressBar valuenow={completeTodos} />
        </div>
        <div className="col-xs-2"></div>
      </li>
    );
  }
});

var ListingsListComponent = React.createClass({
  render: function() {
    var rows = todos.filter(function(todo) {
      return !todo.done;
    }).map(function(todo) {

      return (<ListingComponent key={todo.id} todo={todo}></ListingComponent>);
    });
    return (
      <div>
        <HeaderCall
            icon="fa-home"
            text="Home"
            description="Here are your favorites home. Follow along the guides to get your dream home."
        ></HeaderCall>
        <div className="active-todos text-center">
          <h2>My Favorite listing</h2>
          <ul className="list-no-style padding-top-20">{rows}</ul>
        </div>
      </div>
    );
  }
});
