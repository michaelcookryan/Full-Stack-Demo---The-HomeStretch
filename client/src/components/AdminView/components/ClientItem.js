import React, { Component } from 'react'
import EditItem from './EditItem';
import axios from 'axios'

const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";


export default class ClientItem extends Component {

    state = {
        isActive: false,
        currentDataForEdit: {},
        allVideos: []
    }

    showEditor = (event, clientId) => {
        event.preventDefault()

        this.setState({

            isActive: !this.state.isActive

        })

    }

    clientEditor = (retrievedData) => {
        
        if (this.state.isActive && retrievedData) {

            return <EditItem
                clientId={retrievedData.clientId}
                name={retrievedData.name}
                email={retrievedData.email}
                videos={retrievedData.videos}
                showEditor={this.showEditor}
                allVideos={this.state.allVideos}
                
            />
        }
    }



    componentDidMount() {
        axios.get(videosUrl)
            .then(response => {

                this.setState({

                    allVideos: response.data.data

                });

            }).catch(err => console.log(err));
        
        axios.get(`${clientsUrl}/${this.props.clientId}`).then(response => {

            this.setState({

                currentDataForEdit: response.data.response

            })

        }).catch(err => console.log(err))
 
    }
    render() {
        return (
            <div className="clientList__wrapper">
                <div className="clientList__item" onClick={(event) => this.showEditor(event, this.props.clientId)}>
                    <div className="clientList__item--name"><h5>{this.props.name}</h5></div>
                    <div className="clientList__details">
                        {/* <div className="clientList__details--name"><h5>{this.props.name}</h5></div> */}
                        
                        <div className="clientList__details--email"><span>email:</span><p> {this.props.email}</p></div>
                        <div className="clientList__details--videos"><span>videos:</span><p>  {this.props.videos.length}</p></div>
                    </div>
                    
                <div className="clientList__item--button">

                        <button className="item__delete" onClick={(event) => this.props.removeClient(event, this.props.clientId)}><h5>Remove</h5></button>

                </div>

            </div>
        
            <div className="client__editor">{this.clientEditor(this.state.currentDataForEdit)}</div>
        </div>
        )
    }
}
