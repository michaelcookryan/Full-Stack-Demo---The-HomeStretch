import React from "react"
import Header from './Header'
import ClientView from './ClientView'
import Admin from './Admin'
import Landing from './Landing'
import EditItem from './EditItem'
import "../styles/app.css"
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/:id" component={EditItem} />
          <Route path="/clients/:id" component={ClientView} />
        </Switch>
      </main>
      
    </div>  
  );
}

export default App;
