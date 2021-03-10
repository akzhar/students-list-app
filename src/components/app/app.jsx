import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import StudentsScreen from '../students-screen/students-screen.jsx';
import NewStudentScreen from '../new-student-screen/new-student-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <StudentsScreen/>
      </Route>
      <Route path="/new" exact>
        <NewStudentScreen/>
      </Route>
      <Route>
        <NotFoundScreen/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
