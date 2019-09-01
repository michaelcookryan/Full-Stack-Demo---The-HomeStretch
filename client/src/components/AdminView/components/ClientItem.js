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
            <div className="clientList__wrapper" onClick={(event) => this.showEditor(event, this.props.clientId)}>
            <div className="clientList__item" >
                <div className="clientList__item--name">{this.props.name}</div>
                {/* <div className="clientList__item--id">{this.props.clientId}</div> */}
                <div className="clientList__item--email">{this.props.email}</div>
                <div className="clientList__item--videos">{this.props.videos.length} videos</div>
                <div className="clientList__item--buttons">

                    <button className="item__delete" onClick={(event) => this.props.removeClient(event, this.props.clientId)}>Remove</button>

                </div>

            </div>
        
            <div className="client__editor">{this.clientEditor(this.state.currentDataForEdit)}</div>
        </div>
        )
    }
}
