import React, { Component } from 'react'
import EditItem from './EditItem'
import axios from 'axios'


const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";


export default class ClientItem extends Component {

    state = {
        isActive: false,
        currentDataForEdit: {},
        allVideos: [],
        assignedVideos:this.props.videos
    }

    showEditor = (event, clientId) => {
        event.preventDefault()

        this.setState({

            isActive: !this.state.isActive,
            assignedVideos: this.state.assignedVideos

        })

    }

    clientEditor = (retrievedData) => {
      
        if (this.state.isActive && retrievedData) {

            return <EditItem
                clientId={retrievedData.clientId}
                name={retrievedData.name}
                email={retrievedData.email}
                videos={this.state.assignedVideos}
                showEditor={this.showEditor}
                allVideos={this.state.allVideos}
                updateClient={this.props.updateClient}
                handleClick={this.handleClick}
                
            />
        }
    }

    handleClick = (id) => { 
        const editor = document.getElementById(id);
        editor.classList.toggle('isOpen')
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
            <div className="clientItem">

                <div className="clientItem__module" onClick={(event) => {
                    this.showEditor(event, this.props.clientId);
                    this.handleClick(this.props.clientId);
                }
                }>
                    <div className="clientItem__details">

                        <div className="clientItem__details--name">
                            <h5>{this.props.name}</h5>
                        </div>

                        <div className="clientItem__details--contact-videos">
                            <div className="email"><span>email:</span><p> {this.props.email}</p></div>
                            <div className="videos"><span>videos:</span><p>  {this.props.videos.length}</p></div>
                        </div>
                        
                    </div>
                    <div className="clientItem__module--button">

                        <button className="item__delete" onClick={(event) => this.props.removeClient(event, this.props.clientId, this.props.name)}><h5>Remove</h5></button>

                    </div>
                </div>
                   

               

                <div id={this.props.clientId} className="client__editor">
                    {this.clientEditor(this.state.currentDataForEdit)}
                </div>
               
            </div>

               
           
        
        )
    }
}
