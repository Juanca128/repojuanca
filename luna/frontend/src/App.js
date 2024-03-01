import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <img src={'logo_redondo.png'} className="App-logo" alt="logo" />
      <header className="App-header">
        <Nav></Nav>
        <Header></Header>
        
        


      </header>
      <Footer></Footer>
     

    </div>

  );
}

export default App;
