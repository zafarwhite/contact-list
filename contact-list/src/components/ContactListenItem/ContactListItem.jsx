import React, { Component } from 'react'
import './ContactListItem.css'

class ContactListItem extends Component {
    render() {
        const {contact: {name, surname, phoneNumber, age} = {} }= this.props
        return (
            <div className="items">
                <div className="item names">{name} </div>
                <div className="item surname">{surname}</div>
                <div className="item age">{age} (age)</div>
                <div className="item phoneNumber"><a href="$">{phoneNumber}</a></div>
            </div>
        )
    }
}

export default ContactListItem
