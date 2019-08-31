import React, { Component } from 'react'
import axios from 'axios'
import EditItem from './EditItem';

const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";

// export default function ClientItem({ clientId, email, name, videos, removeClient, showEditor}) {
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
            // console.log("in clientEditor of Admin: ", retrievedData.videos)
            // console.log("in clientEditor of retrieved: ", this.state.currentDataForEdit)
            return <EditItem
                clientId={retrievedData.clientId}
                name={retrievedData.name}
                email={retrievedData.email}
                videos={retrievedData.videos}
                showEditor={this.showEditor}
                // updateClient={this.updateClient}
                allVideos={this.state.allVideos}
                
            />
        }
    }

//     updateClient = (event, id) => {
//         const selectedVideos = event.target.assignedVideos;
//         const assigned = [];
//         console.log(selectedVideos)
//         console.log(typeof selectedVideos)
//         for (let checkbox of selectedVideos) {

//             if (checkbox.checked) {

//                 assigned.push(checkbox.value);

//             }
//         }

//         // let type = { "content-type": "application/json" };

//         const clientToUpdate = {
//             clientId: id,
//             videos: assigned
//         }
//         axios.put(clientsUrl, clientToUpdate)
//             .then((response) => {
// console.log(response.data.data)
//                 axios.get(clientsUrl)
//                     .then(response => {

//                         this.setState({

//                             clients: response.data.data

//                         });

//                     }).catch(err => console.log(err));

//             }).catch(err => console.log(err));

//         event.target.reset();
//     };


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
        // console.log("in didMount of editItem: ", this.props.videos)
    }
    render() {
        return (
      <div>
            <div className="clientList__item" onClick={(event) => this.showEditor(event, this.props.clientId)}>
                <div className="clientList__item--name">{this.props.name}</div>
                <div className="clientList__item--id">{this.props.clientId}</div>
                <div className="clientList__item--email">{this.props.email}</div>
                <div className="clientList__item--videos">{this.props.videos.length} videos assigned</div>
                <div className="clientList__item--buttons">

                    {/* <button className="item__edit" onClick={(event) => showEditor(event, clientId)}>Edit</button> */}

                    <button className="item__delete" onClick={(event) => this.props.removeClient(event, this.props.clientId)}>Remove</button>

                </div>
                {/* <div className="client__editor">{this.clientEditor(this.state.currentDataForEdit)}</div> */}
            </div>
        
            <div className="client__editor">{this.clientEditor(this.state.currentDataForEdit)}</div>
            </div>
        )
    }
}
