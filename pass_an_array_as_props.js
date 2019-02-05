const List= (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={["smile", "sing"]} />
        <h2>Tomorrow</h2>
        <List tasks={["smile", "sing", "dance"]} />
        { /* change code above this line */ }
      </div>
    );
  }
};
