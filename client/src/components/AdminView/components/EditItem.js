import React, { Component } from 'react'
import VideoOptions from './VideoOptions'
import axios from 'axios'

const clientsUrl = "http://localhost:8090/clients";

export default class EditItem extends Component {


    state = {
        fromEdit: true
    }

    updateClient = (event) => {
       
        const selectedVideos = event.target.assignedVideos;
        const id = this.props.clientId
        const assigned = [];

        for (let checkbox of selectedVideos) {

            if (checkbox.checked) {

                assigned.push(checkbox.value);

            }
        }

        const clientToUpdate = {
            clientId: id,
            videos: assigned
        }
        axios.put(`${clientsUrl}/${clientToUpdate}`, clientToUpdate)
            .then((response) => {

                console.log("update sent ",response.data.data)

            }).catch(err => console.log(err));

        event.target.reset();
    };

    render() {
       

        return (
           
            <div>
                <h3>Client Name: {this.props.name}</h3>
                <h3>Contact Info: {this.props.email}</h3>

                <form onSubmit={this.updateClient}>
                    <div className="select-videos">
                       
                        <VideoOptions allVideos={this.props.allVideos} assigned={this.props.videos}/>

                    </div>

                    <button onClick={(event) => this.props.showEditor(event, this.props.clientId)}>Close</button>

                    <button>update</button>
                </form>
            </div> 
        )

}
}



