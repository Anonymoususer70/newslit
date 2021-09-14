import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height = {4}
      />
          <Router>
          <Navbar/>
          <Switch>
              <Route exact path="/"><News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={6} category="general" country = "in"/></Route>
              <Route exact path="/business"><News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={6} category="business" country = "in"/></Route>
              <Route exact path="/entertainment"><News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={6} category="entertainment" country = "in"/></Route>
              <Route exact path="/sports"><News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={6} category="sports" country = "in"/></Route>
              <Route exact path="/health"><News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={6} category="health" country = "in"/></Route>
              <Route exact path="/science"><News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={6} category="science" country = "in"/></Route>
              <Route exact path="/technology"><News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={6} category="technology" country = "in"/></Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App