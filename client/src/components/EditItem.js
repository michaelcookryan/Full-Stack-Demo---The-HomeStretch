import React, { Component } from 'react'
import axios from 'axios'
import VideoOptions from './VideoOptions'

const videosUrl = "http://localhost:8090/videos";

export default class EditItem extends Component {


    state = {
        allVideos:[]
    }

    componentDidMount(){
        axios.get(videosUrl)
            .then(response => {

                this.setState({

                    allVideos: response.data.data

                });

            }).catch(err => console.log(err));   
        
    }


    render() {
        

        return (
            <div>
                {/* <form onSubmit={this.addClient}> */}
                <form>
                    <input type="text" name="name" placeholder={this.props.name} required />
                    <input type="email" name="email" placeholder={this.props.email} required />

                    <div className="select-videos">
                        {this.props.videos}
                    </div>

                    
                    <div className="select-videos">
                       
                        <VideoOptions allVideos={this.state.allVideos} assigned={this.props.videos}/>

                    </div>

                    <button onClick={(event) => this.props.showEditor(event, this.props.clientId)}>Clear</button>
                    <button onClick={(event) => this.props.updateClient(event, this.props.clientId)}>Save</button>
                </form>
            </div>
        )

}
}



