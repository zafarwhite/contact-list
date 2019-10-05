import React, { Component } from 'react'
import './App.css'
import ContactList from './components/ContactList';

export default class App extends Component {
  state = {
    title: 'Contacts',
    contacts: [
      {
        id: 1,
        name: 'Mark',
        surname: 'Zuckerberg',
        phoneNumber: '+1 650 543 4800'
      },
      {
        id: 2,
        name: 'Larry',
        surname: 'Page',
        phoneNumber: 'doesn\'t like to use mobile '
      },
      {
        id: 3,
        name: 'Sergey',
        surname: 'Brin',
        phoneNumber: '+1 216 363-3400'
      },
      {
        id: 4,
        name: 'Bill',
        surname: 'Gates',
        phoneNumber: '+1 206 709 XXXX'
      },
    ]
  }
  getTitle(){
    return 'Famous people of web';
  }

  render() {
    return (
      <div className="container">
        <header className="header">{this.getTitle()}</header>
        <h1 className="contacts">{this.state.title || 'Anonymus' }:</h1>
        <ContactList className="contactLength" contacts={this.state.contacts} />
      </div>
    )
  }
}
