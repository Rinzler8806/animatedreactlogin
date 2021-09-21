
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import wallstreet from './images/wallstreet.png';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App"
      style={{backgroundImage: `url(${wallstreet})`}}>
    <AppContainer>
      <AccountBox />
    </AppContainer>
    </div>
  );
}

export default App;
