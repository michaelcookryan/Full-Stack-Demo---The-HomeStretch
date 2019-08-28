import React, { Component } from 'react'
import axios from "axios";

const clientsUrl = "http://localhost:8090/clients";
// const videosUrl = "http://localhost:8090/videos";

export default class ClientView extends Component {

    state = {
        clientId: "",
        name: "",
        email: "",
        videos: [],
    }

    componentDidMount() {
        
        // axios.get(`${clientsUrl}` + "/:id")
        axios.get(clientsUrl + "/WLiF9").then(response => {
                console.log("from didMount: ",response)
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

                                console.log("before setting state: ", this.state.videos)
                                let foundVideos = []

                                assignedVideos.map(video => { 
                                    let newVids = foundVideos.concat(allVideos.filter(selected => video === selected.videoId))
                                    console.log("video objects: ", newVids)
                                    // return foundVideos
                                    this.setState({
                                        videos: newVids
                                    })
                                    foundVideos.push(newVids)
                                    console.log("found videos: ", foundVideos)
                                })
                                                              
                                console.log("new videos in state: ", this.state.videos)
                            }).catch(err => console.log(err))
                    })
                
            }).catch(err => console.log(err))
        
        
    }





    retrieveMyVideos = videos => { 
        axios.get(`${clientsUrl}/:id/videos`)
            .then(response => {

                const allVids = response.data.data
                const myVideos = this.state.videos
                
                myVideos.map(eachVid => {
                    let foundVids = allVids.filter(video => eachVid === video.videoId)
                    console.log("here?: ", foundVids)
                    return foundVids
                })
                
                
                // return foundVids

            }).catch(err => console.log(err))
        
    }


    render() {
        return (
            <div>
                <h1>Client Page</h1> 
                {/* {this.retrieveMyVideos(this.state.videos)} */}
            </div>
        )
    }
}
