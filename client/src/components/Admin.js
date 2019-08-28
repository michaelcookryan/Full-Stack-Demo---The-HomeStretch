import React, { Component } from "react";
import ClientList from "./ClientList";
// import VideoOptions from './VideoOptions'
import axios from "axios";

const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";
export default class Admin extends Component {
  state = {
    clients: [],
    videos: []
  };

  componentDidMount() {
    axios
      .get(clientsUrl)
      .then(response => {
        this.setState({
          clients: response.data.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get(videosUrl)
      .then(response => {

        this.setState({
          videos: response.data.data
        });
      })
      .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps) {
  //     if (this.props.match.params.id !== prevProps.match.params.id) {

  //         let searchCriteria = ''

  //         if (this.props.match.params.id === undefined) {
  //             searchCriteria = JSON.parse(localStorage.defaultInfo)
  //         } else {
  //             searchCriteria = this.props.match.params.id
  //         }

  //         axios.get(url + `/${searchCriteria}`)
  //             .then(response => {

  //                 this.setState({
  //                     clients: response.data.data,
  //                     // videos: response.data,

  //                 })

  //             }).catch(err => console.log(err));

  //     }
  // }
showAllVideoOptions() {
    const options = this.state.videos.map(video => {

        return (
            <div className="video__checkbox">
            <label>{video.title}</label>
            <input type="checkbox" name="assignedVideos" value={video.videoId} />
            </div>
        );

    });
    
    return options;
}

  addClient = event => {
    event.preventDefault();

    const selectedVideos = event.target.assignedVideos;   
    const assigned = [];

    for (let checkbox of selectedVideos) {
      if (checkbox.checked) {
        assigned.push(checkbox.value);
      }
    }
    //   console.log(assigned);
    // const clientToAdd = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   videos: assigned
    // };
    

    let type = { "content-type": "application/json" };
      console.log(assigned);
      const clientToAdd = {
          name: event.target.name.value,
          email: event.target.email.value,
          videos: assigned
      };

    axios
      .post(clientsUrl, clientToAdd, type)
      .then((response) => {
          console.log(response.data)
        axios
          .get(clientsUrl)
          .then(response => {
            this.setState({
              clients: response.data.data
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    event.target.reset();
  };

  render() {
    return (
      <section>
        <h1>Admin Page</h1>

        <ClientList clients={this.state.clients} />

        <div className="admin__addNewForm">
          <h2>Add New Client</h2>

          <form onSubmit={this.addClient}>
            <input type="text" name="name" placeholder="name" required />
            <input type="email" name="email" placeholder="email" required />
            
            <div className="select-videos">              
                {this.showAllVideoOptions()}
            </div>
            
            <button>Add</button>
          </form>

        </div>
      </section>
    );
  }
}
