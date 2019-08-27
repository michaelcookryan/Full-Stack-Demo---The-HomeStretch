import React, { Component } from 'react'
import ClientList from './ClientList'
import axios from 'axios'

const url = 'http://localhost:8090/clients'
export default class Admin extends Component {

    state = {
        clients: [],
        videos: []
    }


    componentDidMount() { 

        axios.get(url)
            .then((response) => {
         
            this.setState({
                clients: response.data.data
            })
                
        }).catch(err => console.log(err))
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.id !== prevProps.match.params.id) {

    //         let searchCriteria = ''

    //         if (this.props.match.params.id === undefined) {
    //             searchCriteria = JSON.parse(localStorage.defaultInfo)
    //         } else {
    //             searchCriteria = this.props.match.params.id
    //         }

    //         axios.get(url + `/${searchCriteria}`)
    //             .then(response => {

    //                 this.setState({
    //                     clients: response.data.data,
    //                     // videos: response.data,

    //                 })

    //             }).catch(err => console.log(err));

    //     }      
    // }

    addClient = event => { 
        event.preventDefault()

        const clientToAdd = {
            name: event.target.name.value,
            email: event.target.email.value,
            // videos: event.target.videos.value,
        }

        let type = { 'content-type': 'application/json' }

        axios.post(url, clientToAdd, type)
            .then(() => { 

                axios.get(url)
                    .then((response) => {

                        this.setState({
                            clients: response.data.data
                        })

                    }).catch(err => console.log(err))

            }).catch(err => console.log(err))
        
        event.target.reset()
    }



    render() {
        
        return (
            <section>
                <h1>Admin Page</h1>
                <ClientList clients={this.state.clients}/>
                
                <div>
                    <h2>Add New Client</h2>
                    <form onSubmit={this.addClient}>
                        <input type="text" name="name" placeholder="name" required />
                        <input type="email" name="email" placeholder="email" required />                                              
                        <button>Add</button>
                    </form>
                </div>
            </section>
        )
    }
}
