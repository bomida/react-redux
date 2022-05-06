import './App.css';
import Subscribers from './components/Subscribers';
import Likes from './components/Likes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import styled from 'styled-components';
import TodoList from './components/TodoLsit';

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.black};
`;

const Container = styled.div`
  padding: 20px 0;
`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 34px;
  text-align: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrap>
        <Container>
          <Title>Counter</Title>
          <Subscribers />
          <Likes />
        </Container>
        <Container>
          <Title>To Do List</Title>
          <TodoList />
        </Container>
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
