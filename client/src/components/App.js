import React from "react"
import Header from './Header'
import ClientView from './ClientView'
import Admin from './Admin'
import Login from './Login'
import EditItem from './EditItem'
import "../styles/app.css"
import axios from 'axios'
import { Route, Switch, Redirect } from 'react-router-dom'

const clientsUrl = "http://localhost:8090/clients";


class App extends React.Component {

  state = {
    access: false,
    id:'',
    role:''
  }

componentDidMount(){
  this.setState({
    access:false,
    id:null,
    role:null
  })
  
}

  findAndRedirect = event => {
    event.preventDefault()

    const searchByEmail = event.target.email.value

    axios.get(clientsUrl).then(response => {
     
      const allUsers = response.data.data

      const currentUser = allUsers.find(user => user.email === searchByEmail)
     
          let redirect = false

            if (currentUser.role !== "Admin") {
              redirect = false
            } else { 
              redirect = true
            }

            this.setState({
              access: redirect,
              id: currentUser.clientId,
              role: currentUser.role
            })
     
    })
   
  }

  

  render() {
 
    return (
      <div className="App">
        <Header returnToHome={this.returnToHomePage}/>

        <main>
          <Switch>

            <Route exact path="/" render={() => {

              if (this.state.access) {

                return (<Redirect to="/admin" />)
                                                
              }else if(this.state.role === "Client"){

                return (<Redirect to={"/clients/" + `${this.state.id}`} />)
                               
              }else{

                return (<Login findAndRedirect={this.findAndRedirect}/>)
              }
          
            }} />

            <Route exact path="/admin" component={Admin} />           
           
            <Route path="/clients/:clientId/:videoId" render={(props) => {
    
              return (<ClientView clientId={this.state.id} {...props}/>)

            }} />

            <Route path="/clients/:clientId" render={(props) => {
              
              return (<ClientView clientId={this.state.id} {...props}/>)

            }} />
            
          </Switch>
        </main>
      
      </div>
    );
  }
}
export default App;
