import React, { Component } from 'react'
import './ContactListItem.css'

class ContactListItem extends Component {
    render() {
        const {contact: {name, surname, phoneNumber} = {} }= this.props
        return (
            <div>
                <div className="fullNames">{name} {surname} <a href="$">{phoneNumber}</a></div>
            </div>
        )
    }
}

export default ContactListItem
