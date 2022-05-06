import styled from "styled-components";
import { connect } from "react-redux";
import { addLike } from "../redux/views/action";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    all: unset;
    margin-left: 10px;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.main};
  }
`;

function Likes({ count, addLike }) {
  return (
    <Wrapper>
      <h3>좋아요 : {count}</h3>
      <button onClick={() => addLike()}>💜</button>
    </Wrapper>
  );
}

const mapStateToProps = ({ likes }) => {
  return {
    count: likes.count,
  }
}

const mapDispatchToProps = {
  addLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);