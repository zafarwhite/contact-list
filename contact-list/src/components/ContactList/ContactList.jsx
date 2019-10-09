import React, { Component } from 'react'
import ContactListItem from '../ContactListenItem/ContactListItem'
import './ContactList.css'

class ContactList extends Component {
    render() {
        const { contacts, name, surname, phoneNumber, age } = this.props
        return (
            <React.Fragment>
                <h4>ContactList: {this.props.contacts.length}</h4>
                { this.props.contacts.map(contact => (
                            <ContactListItem  
                                key={contact.id} 
                                contact={contact}
                            />
                         )
                    )
                }                
            </React.Fragment>
        )
    }
}

export default ContactList
