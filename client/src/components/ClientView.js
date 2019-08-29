import React, { Component } from 'react'
import axios from "axios";
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'

const clientsUrl = "http://localhost:8090/clients";


export default class ClientView extends Component {

    state = {
        clientId: "",
        name: "",
        email: "",
        videos: [],
        current: ""
    }

    componentDidMount() {
        
        // axios.get(`${clientsUrl}` + "/:id")
        axios.get(clientsUrl + this.props.clientId).then(response => {
               
                this.setState({

                    clientId: response.data.response.clientId,
                    name: response.data.response.name,
                    email: response.data.response.email,
                    videos: response.data.response.videos
                    
                }, () => { 
                                               
                        axios.get(`${clientsUrl}/:id/videos`)
                        
                            .then(response => { 
                                
                                const allVideos = response.data.data
                                const assignedVideos = this.state.videos                                                              
                                let currentClientVideosGroup = []
                                assignedVideos.map(video => { 
                                    
                                    let newVids = allVideos.find(selected => video === selected.videoId)
                                    
                                   return currentClientVideosGroup.push(newVids)
                                                                       
                                })

                                this.setState({
                                    videos: currentClientVideosGroup,
                                    current: currentClientVideosGroup[0]
                                })                    
                                
                            }).catch(err => console.log(err))
                    })
                
            }).catch(err => console.log(err))
        
        
    }

componentDidUpdate(prevProps) {

    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
        console.log("previous: ", this.state.current)

        const copyCurrent = this.state.videos

        const newCurrent = copyCurrent.find(video => video.videoId === this.props.match.params.videoId)

        console.log("new: ", newCurrent)

            this.setState({
                current: newCurrent
            })       

      }
  }

    render() {
        
        return (
            <section>
                <h1>Videos for {this.state.name}</h1> 
               
                <VideoPlayer current={this.state.current.url}/>
                <VideoList videos={this.state.videos} clientId={this.state.clientId}/>

            </section>
        )
    }
}
