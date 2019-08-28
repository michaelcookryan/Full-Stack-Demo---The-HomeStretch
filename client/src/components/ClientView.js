import React, { Component } from 'react'
import axios from "axios";
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import { Link } from 'react-router-dom';

const clientsUrl = "http://localhost:8090/clients";
// const videosUrl = "http://localhost:8090/videos";

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
                                let finalGroup = []
                                assignedVideos.map(video => { 

                                    // let newVids = foundVideos.concat(allVideos.find(selected => video === selected.videoId))

                                    let newVids = allVideos.find(selected => video === selected.videoId)
                                    console.log("newVids: ",newVids)
                                    finalGroup.push(newVids)
                                    // this.setState({
                                    //     videos: newVids
                                    // })

                                    // finalGroup.push(newVids)
                                   
                                })
                                this.setState({
                                    videos: finalGroup
                                })                    
                                console.log("new videos in state: ", this.state.videos)
                            }).catch(err => console.log(err))
                    })
                
            }).catch(err => console.log(err))
        
        
    }

componentDidUpdate(prevProps) {
      if (this.props.match.params.id !== prevProps.match.params.id) {

          axios.get(clientsUrl + `/${prevProps.match.params.id}`)
              .then(response => {

                  this.setState({
                      current: response.data.data,
                      

                  })

              }).catch(err => console.log(err));

      }
  }



    retrieveMyVideos = videos => { 
        videos.map(video => {
            return <div>
                <div>{video.title}</div>
            </div>
        })
        
    }


    render() {
        
        return (
            <section>
                <h1>Client Page</h1> 
                {/* {this.retrieveMyVideos(this.state.videos)} */}
                <VideoPlayer current={this.state.current}/>
                <VideoList videos={this.state.videos}/>
            </section>
        )
    }
}
