import styled from "styled-components";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/subscribers/action";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  button {
    all: unset;
    margin-left: 10px;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.main};
  }
`;

function Subscribers({ count, addSubscriber }) {
  return (
    <Wrapper>
      <h3>구독자 수 : {count}</h3>
      <button onClick={() => addSubscriber()}>👍</button>
    </Wrapper>
  );
}

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  }
}

const mapDispatchToProps = {
  addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);