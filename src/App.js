import React from 'react'
import ContactList from './components/ContactList'
import contacts from './data/contacts.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactList contactsArray={contacts.results} />
    </div>
  )
}

export default App
