import React, { Component } from "react";
import ClientList from "./components/ClientList";
import VideoOptions from "./components/VideoOptions";
import axios from "axios";

const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";


export default class Admin extends Component {

  state = {
    clients: [],
    clientId:'',
    videos: [],
    isActive: false,
    isLoading:true,
    defaultEmpty:['video']
  };



  settingStateForList = () => {
    axios.get(clientsUrl)
      .then(response => {

        this.setState({

          clients: response.data.data,
          clientId: response.data.data.clientId

        }, () => {
            axios.get(videosUrl)
              .then(response => {

                this.setState({

                  videos: response.data.data

                });

              }).catch(err => console.log(err));
        });

      }).catch(err => console.log(err));

  }




  componentDidMount() {

    this.settingStateForList()

  }
  


showAllVideoOptions() {
    const options = this.state.videos.map(video => {

      return (
          
        <div className="video__checkbox" key={video._id}>
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
    
    let type = { "content-type": "application/json" };

    const clientToAdd = {
        
      name: event.target.name.value,
      email: event.target.email.value,
      videos: assigned
          
    };

    axios.post(clientsUrl, clientToAdd, type)
      .then((response) => {        
          
          axios.get(clientsUrl)
            .then(response => {

              this.setState({

                clients: response.data.data

              });

            }).catch(err => console.log(err));
          
        }).catch(err => console.log(err));

      event.target.reset();
};

  
  
  removeClient = (event, clientId, name) => {

    let confirmation = window.confirm(`Confirm you are removing ${name} from your client list.`)

    if (confirmation) {
    
    axios.delete(`${clientsUrl}/${clientId}`)
      .then(response => {

        this.settingStateForList()

      }).catch(err => console.log(err))
  }    

}

  
  
  updateClient = (event, id) => {
    event.preventDefault()

    const selectedVideos = event.target.assignedVideos;
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
      .then(() => {

        this.settingStateForList()
        

      }).catch(err => console.log(err));


  }; 
  
  
  render() {

    return (
     
      
      <section className="admin-section">
         
        <h1 className="admin-section__title">Therapist's Dashboard</h1>
        <a href="#list-anchor" className="admin-section__add-new-link-mobile">Go to Add New Client &#x25BE;</a>
        <h2 className="admin-section__subtitle">Client List</h2>

        <div className="admin-columns">

          <div className="admin-columns__list">

            <ClientList clients={this.state.clients} removeClient={this.removeClient} showEditor={this.showEditor} isActive={this.state.isActive} updateClient={this.updateClient} />
            
          </div>

          <div id="list-anchor"></div>
          <div className="admin-columns__form">
            <h2>Add New Client</h2>
            
            <form onSubmit={this.addClient}>
              <input className="admin-form-input" type="text" name="name" placeholder="name" required />
              <input className="admin-form-input" type="email" name="email" placeholder="email" required />
              
              <div className="select-videos">              
                
                <VideoOptions allVideos={this.state.videos} assigned={this.state.defaultEmpty} admin="admin-"/>
                
              </div>
              
              <button>&#xff0b; Add</button>
            </form>

          </div>
        </div>
      
      </section>
      
     
  
    );
  }
}
