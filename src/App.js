import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

import Books from './Books'
import Companies from './Companies'
import Persons from './Persons'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/persons">
          <Persons />
        </Route>
        <Route path="/companies">
          <Companies />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
