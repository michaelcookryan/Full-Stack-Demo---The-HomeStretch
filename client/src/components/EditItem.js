import React, { Component } from 'react'
import axios from 'axios'
import VideoOptions from './VideoOptions'

const clientsUrl = "http://localhost:8090/clients";

export default class EditItem extends Component {


    state = {
        fromEdit: true
    }

    updateClient = (event) => {
       
        const selectedVideos = event.target.assignedVideos;
        const id = this.props.clientId
        const assigned = [];

        console.log("event 1:", selectedVideos)
        console.log(typeof selectedVideos)

        for (let checkbox of selectedVideos) {

            if (checkbox.checked) {

                assigned.push(checkbox.value);
                console.log("event 2:", assigned)

            }
        }

        // let type = { "content-type": "application/json" };

        const clientToUpdate = {
            clientId: id,
            videos: assigned
        }
        axios.put(`${clientsUrl}/${clientToUpdate}`, clientToUpdate)
            .then((response) => {
                console.log("res: ",response.data.data)
                // axios.get(clientsUrl)
                //     .then(response => {

                //         this.setState({

                //             clients: response.data.data

                //         });

                //     }).catch(err => console.log(err));

            }).catch(err => console.log(err));

        event.target.reset();
    };

    render() {
       

        return (
           
            <div>
                {/* <form onSubmit={this.updateClient(e, this.props.clientId)}> */}
                {/* <form> */}
                    {/* <input type="text" name="name" placeholder={this.props.name} required />
                    <input type="email" name="email" placeholder={this.props.email} required />

                    <div className="select-videos">
                        {this.props.videos}
                    </div> */}
                <h3>Client Name: {this.props.name}</h3>
                <h3>Contact Info: {this.props.email}</h3>
                <form onSubmit={this.updateClient}>
                    <div className="select-videos">
                       
                        <VideoOptions allVideos={this.props.allVideos} assigned={this.props.videos}/>

                    </div>

                    <button onClick={(event) => this.props.showEditor(event, this.props.clientId)}>Close</button>
                    {/* <button onClick={(event) => this.updateClient(event, this.props.clientId)}>Update</button> */}
                    {/* <button onSubmit={this.updateClient(this.props.clientId)}>Update</button> */}
                    <button>update</button>
                </form>
            </div> 
        )

}
}



