import React, { Component } from 'react'
import VideoOptions from './VideoOptions'
import axios from 'axios'

const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";

export default class EditItem extends Component {
   

    state = {
        
        allVideos: [],
        currentDataForEdit: {},
        assignedVideos: this.props.videos
    }

    componentDidMount() { 

        this.refeshView()

    }

    refeshView() {
      
        axios.get(videosUrl)
            .then(response => {

                this.setState({

                    allVideos: response.data.data

                });

            }).catch(err => console.log(err));

        axios.get(`${clientsUrl}/${this.props.clientId}`).then(response => {

            this.setState({

                currentDataForEdit: response.data.response,
                assignedVideos: response.data.response.videos

            })

        }).catch(err => console.log(err))

    }

    render() {
       
        return (
         
            <section>
                <h3>Client Name: {this.props.name}</h3>
                <h3>Contact Info: {this.props.email}</h3>

                <form onSubmit={(event)=> this.props.updateClient(event, this.props.clientId)}>
                    <div className="select-videos">
                       
                        <VideoOptions allVideos={this.state.allVideos} assigned={this.state.assignedVideos}/>

                    </div>

                    <button onClick={(event) => {
                        this.props.showEditor(event, this.props.clientId);
                        this.refeshView();
                    }}>Close</button>

                    <button>update</button>
                </form>
            </section> 
        )

}
}



