import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from './components/Landing.js';
import RelativePitch from './components/RelativePitch';
import Chords from './components/Chords';
import Landing2 from './components/Landing2';
import Sandbox from './components/Sandbox';

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Landing2}/>
            <Route path="/rp" component={RelativePitch}/>
            <Route path="/chords" component={Chords}/>
            <Route path="/sandbox" component={Sandbox}/>
          </Switch>
            
    </Router>
  );
}

export default App;
