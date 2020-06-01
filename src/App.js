import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// COMPONENTS
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homepage';
import NewPage from './components/pages/newpage';

// INCLUDES
import './Assets/css/default.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/newpage' component={NewPage} />
    
    </div>
    </Router>
  );
}

export default App;