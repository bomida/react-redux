import { connect } from "react-redux";
import styled from "styled-components";
import { actionCreators } from "../redux/todoList/action";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

function ToDo({ text, onBtnClick }) {
  return (
    <ListItem>{text} <button onClick={onBtnClick}>DEL</button></ListItem>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);