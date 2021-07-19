import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

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
          <div>
            <h1>Books</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
