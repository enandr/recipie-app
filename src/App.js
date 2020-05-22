import React from 'react';
import RecipieTable from './RecipieTable'
import RecipieCreate from './RecipieCreate'
import { Container} from 'reactstrap';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact strict path="/create">
            <RecipieCreate />
          </Route>
          <Route exact strict path="/">
            <RecipieTable />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
