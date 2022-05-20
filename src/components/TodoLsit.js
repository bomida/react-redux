import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actionCreators } from "../redux/todoList/action";
import ToDo from "./ToDo";

const Wrapper = styled.div`
  width: 280px;
  form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  input {
    width: 200px;
    color: ${props => props.theme.white};
    border: 0;
    border-bottom: 1px solid ${props => props.theme.main};
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  button {
    all: unset;
    padding: 5px 15px;
    cursor: pointer;
    color: ${props => props.theme.black};
    text-align: center;
    border-radius: 5px;
    background-color: ${props => props.theme.main};
  }
  ul {
    height: 300px;
    overflow-y: scroll;
  }
`;

function ToDoList({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") return;
    addToDo(text);
    setText("");
  }
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write a To Do"
        />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
    </Wrapper>
  );
}

const mapStateToProps = ({ todolist }) => {
  return {
    toDos: todolist // todolist는 reducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);