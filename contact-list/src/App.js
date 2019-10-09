import React, { Component } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';

export default class App extends Component {
  state = {
    title: 'Contacts',
    contacts: [
      {
        id: 1,
        name: 'Mark',
        surname: 'Zuckerberg',
        phoneNumber: '+1 650 543 4800',
        age: 35
      },
      {
        id: 2,
        name: 'Larry',
        surname: 'Page',
        phoneNumber: 'doesn\'t like to use mobile',
        age: 46
      },
      {
        id: 3,
        name: 'Sergey',
        surname: 'Brin',
        phoneNumber: '+1 216 363-3400',
        age: 46
      },
      {
        id: 4,
        name: 'Bill',
        surname: 'Gates',
        phoneNumber: '+1 206 709 XXXX',
        age:63
      },
      {
        id: 5,
        name: 'Ken',
        surname: 'Thompson',
        phoneNumber: '(902) 894-3949',
        age:76
      }
    ]
  }
  getTitle(){
    return 'Famous people of web';
  }

  render() {
    return (
      <div className="container">
        <header className="header">{this.getTitle()}</header>
        <h1 className="contacts">{this.state.title}:</h1>
        <ContactList className="contactLength" contacts={this.state.contacts} />
      </div>
    )
  }
}
