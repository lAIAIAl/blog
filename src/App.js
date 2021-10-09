import './App.css';
import { Fragment } from 'react';
import Audio from './components/audio/audio';
import Header from './components/header';
import Setting from './components/setting';
import Background from './components/background';

import { Route,Switch,Redirect } from 'react-router';

import Search from './pages/search';
//import About from './pages/about';
import Home from './pages/home';
import Other from './pages/other';
import Introduction from './pages/introduction';
import Note from './pages/note';
import Leftnav from './components/left-nav';
import Footer from './components/footer';

function App() {
  return (
    <Fragment>
      <Background/>
      <Audio/>
      <Header title='还没想好叫什么的个人Blog'/>
      <Setting/>
      <Leftnav/>
      <div className="content">
        <Switch>
          <Route path='/home' component={Home} />
          {/* <Route path='/about' component={About} /> */}
          <Route path='/other' component={Other} />
          <Route path='/introduction' component={Introduction} />
          <Route path='/note' component={Note} />
          <Route path='/search' component={Search} />
          <Redirect to='/home'/>
        </Switch>
      </div>
      <Footer /> 
    </Fragment>
  );
}

export default App;
