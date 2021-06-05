// import logo from './logo.svg';
import Header from "./components/Header";
import Directory from "./components/Directory";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Directory />
      </Wrapper>
    </div>
  );
}

export default App;
