import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

import ContainerTable from './ContainerTable'

const BOOKS_URL = 'https://fakerapi.it/api/v1/books?_quantity=50'
const COMPANIES_URL = 'https://fakerapi.it/api/v1/companies?_quantity=50'
const PERSONS_URL = 'https://fakerapi.it/api/v1/persons?_quantity=50'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/persons">
          <ContainerTable url={PERSONS_URL} />
        </Route>
        <Route path="/companies">
          <ContainerTable url={COMPANIES_URL} />
        </Route>
        <Route path="/">
          <ContainerTable url={BOOKS_URL} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
