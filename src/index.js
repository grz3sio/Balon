import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Quiz from './components/Quiz'
import Game from './components/Game/Game'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Switch>
              <Route path="/quiz" component={Quiz} />
              <Route path="/game"  component={Game}/>

          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
