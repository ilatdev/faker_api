import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

import Books from './Books'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/persons">
          <div>
            <h1>Persons</h1>
          </div>
        </Route>
        <Route path="/companies">
          <div>
            <h1>Companies</h1>
          </div>
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
