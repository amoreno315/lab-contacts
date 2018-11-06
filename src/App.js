import React, { Component } from 'react';
import Artista from './components/Artista';
import './App.css';
import data from './contact.json';




class App extends Component {
  initList (){
    let ArrayInit = [];
    for (let x = 0; x<5; x++){
      ArrayInit.push(data[x])
    }
    return ArrayInit;
  }
  state = {
    contacts: this.initList(),
    inputValue: '',
  }
  
  // state = {
  //   //contacts: contacts
  //   contacts: this.initList()
  // }
  sortContacts = (contacts) => {
    return contacts.sort ((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB){
        return -1;
      }
      if (nameA > nameB){
        return 1;
      }
      return 0;
    })
  }
  handleSortContact = () => {
    let { contacts } = this.state;

    this.setState({
      contacts: this.sortContacts(contacts),
    })
  }
  handleAddContact = () => {
    let {contacts} = this.state;

    contacts.push(data[Math.floor(Math.random() * data.length)]);
    this.setState ({
      contacts: contacts,
    })
  }
  handleDelete = (index) => {
    let {contacts} = this.state;
    contacts.splice(index, 1);
    this.setState({contacts: contacts});

  }
  
  handleInput = (event) => {
    this.setState ({inputValue: event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let {contacts, inputValue} = this.state;
    contacts.push({
      name: inputValue,
      pictureUrl: "data:image/png;base64,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",
      popularity: 10,
    })
    this.setState({
      contacts: contacts, 
      inputValue: '',
    })
  }
  renderList(){
    return this.state.contacts.map((artista, index) => {
      return (
      
        <Artista 
          key= {index}
          index={index}
          //picture= {artista.pictureUrl}
          name={artista.name}
          popularity= {artista.popularity}
          onDelete= {this.handleDelete}
        />
       
      )
        
    })
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={this.handleInput}/>
          <input type="submit" value="send"/>
        </form>

        <button onClick={this.handleSortContact}>Sort</button>
        <button onClick={this.handleAddContact}>Add Contact</button>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
