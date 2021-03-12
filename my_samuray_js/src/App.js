
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="app-wrapper">
     <Header/>
     <Navigation/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
