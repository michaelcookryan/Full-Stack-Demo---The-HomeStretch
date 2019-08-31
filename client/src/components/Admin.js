import React, { Component } from "react";
import ClientList from "./ClientList";
import EditItem from "./EditItem";
import axios from "axios";
import VideoOptions from "./VideoOptions"

const clientsUrl = "http://localhost:8090/clients";
const videosUrl = "http://localhost:8090/videos";


export default class Admin extends Component {

  state = {
    clients: [],
    clientId:'',
    videos: [],
    isActive:false,
    currentDataForEdit: {},
    defaultEmpty:['video']
  };
 
  settingStateForList= () => {
        axios.get(clientsUrl)
          .then(response => {
           
            this.setState({

              clients: response.data.data,
              clientId: response.data.data.clientId

            });

          }).catch(err => console.log(err));

        axios.get(videosUrl)
          .then(response => {

            this.setState({

              videos: response.data.data

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


  updateClient = (event, id) => {
    console.log("updated client ",id)
  }





  removeClient = (event, clientId) => {
    
    axios.delete(`${clientsUrl}/${clientId}`)
      .then(response => {

        this.settingStateForList()
        
      }).catch(err => console.log(err))

  }



  showEditor = (event, clientId) => {
    event.preventDefault() 

    this.setState({

      isActive: !this.state.isActive

    })

    axios.get(`${clientsUrl}/${clientId}`).then(response => {

      this.setState({

        currentDataForEdit: response.data.response

      })

    }).catch(err => console.log(err))
    
  }



 clientEditor = (retrievedData) => {
   if(this.state.isActive && retrievedData){
     console.log("in clientEditor of Admin: ", retrievedData.videos)
     console.log("in clientEditor of retrieved: ", this.state.currentDataForEdit)
    return <EditItem
      clientId={retrievedData.clientId}
      name={retrievedData.name}
      email={retrievedData.email}
      videos={retrievedData.videos}
      showEditor={this.showEditor}
      updateClient={this.updateClient}
      assigned={this.state.defaultEmpty}
      />
   }

  return
 }


  render() {

      

    return (
      <section>
        <h1>Admin Page</h1>

        <ClientList clients={this.state.clients} removeClient={this.removeClient} showEditor={this.showEditor} isActive={this.state.isActive}/>

        <div className="admin__addNewForm">
          <h2>Add New Client</h2>

          <form onSubmit={this.addClient}>
            <input type="text" name="name" placeholder="name" required />
            <input type="email" name="email" placeholder="email" required />
            
            <div className="select-videos">              
               
              <VideoOptions allVideos={this.state.videos} assigned={this.state.defaultEmpty}/>
            </div>
            
            <button>Add</button>
          </form>

        </div>

      <div className="client__editor">{this.clientEditor(this.state.currentDataForEdit)}</div>

      </section>

     
  
    );
  }
}
