
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import MyProfile from './components/MyProfile/MyProfile';
import Messenger from './components/Messenger/Messenger';
import Users from './components/Users/Users';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
     <Header/>
     <Navigation/>
     <div className='app-wrapper-content'>
     <Route path = '/myProfile' render=
     {() => <MyProfile/>}/>
     <Route path = '/messenger' render=
     {() => <Messenger/>}/>
     <Route path = '/users' render=
     {() => <Users/>}/>
    </div>
    {/* <Content/> */}
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
