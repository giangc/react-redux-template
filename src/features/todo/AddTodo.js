import React from "react";
import { connect } from 'react-redux'
import { addTodo } from './todoSlice'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  render() {
    const handleAddTodo = () => {
      this.props.addTodo({
        id: this.props.nextId,
        content: this.state.input,
        complete: false
      })
      this.setState({ input: "" });
    };

    return (
      <div>
        <input
          onChange={event => this.updateInput(event.target.value)}
          value={this.state.input}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              handleAddTodo()
            }
          }
          }
        />
        <button className="add-todo" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    nextId: state.todo.data[state.todo.data.length - 1].id + 1
  }
}

export default connect(mapStateToProps, { addTodo })(AddTodo);
