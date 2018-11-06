import React, {Component} from 'react'; 

class Artista extends Component{

  handleDelete = () => {
    this.props.onDelete(this.props.index)
  }

  render(){
    return (
      <div>
        {/* <img src={this.props.picture} alt="Picture Artist" /> */}
        <h3>{this.props.name}</h3>
        {/* <h3>{this.props.popularity}</h3> */}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Artista; 