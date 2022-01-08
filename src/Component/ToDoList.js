import React from "react";
import { connect } from "react-redux";
import { fetchtodowithuser } from "../action";
import UserList from "./UserList";

class ToDoList extends React.Component {
  componentDidMount() {
    console.log("i am in componentdidmounth");
    this.props.fetchtodowithuser();
  }

  renderlist() {
    return this.props.todolist.map((todo) => {
      return (
        <div
          className="item"
          key={todo.title}
          style={{ border: "1px black solid " }}
        >
          <div className="content">
            <div className="description">
              <h2>
                <UserList Uid={todo.userId} />
              </h2>
              <h3>Title : {todo.title}</h3>
              <p> Complted :{todo.completed ? "yes" : "No"}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div>{this.renderlist()}</div>;
  }
}

const mapStateTopProps = (state) => {
  return { todolist: state.todolist };
};

export default connect(mapStateTopProps, { fetchtodowithuser })(ToDoList);
