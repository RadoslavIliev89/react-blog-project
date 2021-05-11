import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreatePost from './components/CreatePost/CreatePost';
import CurrentPost from './components/CurrentPost/CurrentPost';


function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path ="/register" component={Register}/>
        <Route path ="/login" component={Login}/>
        <Route path="/create" component={CreatePost}/>
        <Route path="/current-post/:id" component={CurrentPost}/>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
